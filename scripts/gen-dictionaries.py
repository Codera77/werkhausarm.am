#!/usr/bin/env python3
"""Generate src/lib/i18n/dictionaries.ts for DizArt."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/lib/i18n/dictionaries.ts"

PRODUCTS = [
    ("tonus-wall-panel", "Tonus Wall Panel", "Modern wall acoustic panel system for residential quiet", "Wall Acoustics",
     "Панель Tonus для стен", "Современная стеновая акустическая система для жилых помещений", "Акустика стен",
     "Tonus պատի պանել", "Ժամանակակից պատի ձայնամեկուսիչ համակարգ բնակելի տարածքների համար", "Պատի ակուստիկա"),
    ("tonus-ceiling", "Tonus Ceiling System", "Ceiling acoustic assembly for rooms with overhead noise", "Ceiling Acoustics",
     "Потолочная система Tonus", "Потолочная акустическая сборка от шума сверху", "Акустика потолка",
     "Tonus առաստաղի համակարգ", "Առաստաղի ակուստիկ համակարգ վերևից եկող աղմուկի դեմ", "Առաստաղի ակուստիկա"),
    ("idealdom-floor", "IdealDom Floor System", "Floor sound insulation for impact and structure-borne noise", "Floor Acoustics",
     "Система IdealDom для пола", "Звукоизоляция пола от ударного и структурного шума", "Акустика пола",
     "IdealDom հատակի համակարգ", "Հատակի ձայնամեկուսացում հարվածային և կառուցվածքային աղմուկից", "Հատակի ակուստիկա"),
    ("idealdom-wall", "IdealDom Wall System", "Complete wall insulation stack for apartments and offices", "Sound Insulation",
     "Стеновая система IdealDom", "Полный стеновой пакет для квартир и офисов", "Звукоизоляция",
     "IdealDom պատի համակարգ", "Ամբողջական պատի փաթեթ բնակարանների և գրասենյակների համար", "Ձայնամեկուսացում"),
    ("idealdom-partition", "IdealDom Partition", "Acoustic partition solution for offices and commercial rooms", "Interior Finishing",
     "Перегородка IdealDom", "Акустическая перегородка для офисов и коммерции", "Внутренняя отделка",
     "IdealDom միջնորմ", "Ակուստիկ միջնորմ գրասենյակների և կոմերցիոն տարածքների համար", "Ներքին հարդարում"),
    ("membrane-pro", "Acoustic Membrane Pro", "High-density sound membrane for multi-layer assemblies", "Accessories",
     "Акустическая мембрана Pro", "Плотная звукоизоляционная мембрана для многослойных систем", "Аксессуары",
     "Ակուստիկ մեմբրան Pro", "Բարձր խտության ձայնամեկուսիչ մեմբրան բազմաշերտ համակարգերի համար", "Աքսեսուարներ"),
    ("mineral-wool", "Acoustic Mineral Wool", "Dense mineral wool for professional sound insulation layers", "Construction Systems",
     "Акустическая минвата", "Плотная минвата для профессиональных слоёв звукоизоляции", "Строительные системы",
     "Ակուստիկ հանքային բամբակ", "Խիտ հանքային բամբակ պրոֆեսիոնալ ձայնամեկուսիչ շերտերի համար", "Շինարարական համակարգեր"),
    ("drywall-acoustic", "Acoustic Drywall Board", "Specialized board for quieter wall and ceiling builds", "Construction Systems",
     "Акустический гипсокартон", "Специализированный лист для тихих стен и потолков", "Строительные системы",
     "Ակուստիկ գիպսաստվարաթուղթ", "Հատուկ թիթեղ ավելի հանգիստ պատերի և առաստաղների համար", "Շինարարական համակարգեր"),
    ("sealant-kit", "Acoustic Sealant Kit", "Sealing kit for junctions, sockets, and frame edges", "Accessories",
     "Набор акустического герметика", "Герметизация узлов, розеток и краёв каркаса", "Аксессуары",
     "Ակուստիկ հերմետիկի հավաքածու", "Հանգույցների, վարդակների և շրջանակի եզրերի հերմետիկացում", "Աքսեսուարներ"),
    ("frame-profile", "Metal Frame Profiles", "Profiles for framed acoustic and partition assemblies", "Construction Systems",
     "Металлические профили", "Профили для каркасных акустических и перегородочных систем", "Строительные системы",
     "Մետաղական պրոֆիլներ", "Պրոֆիլներ շրջանակային ակուստիկ և միջնորմային համակարգերի համար", "Շինարարական համակարգեր"),
    ("design-finish-panel", "Design Finish Panel", "Premium interior finish panels paired with acoustic stacks", "Design Solutions",
     "Дизайн-панель отделки", "Премиальные панели отделки в паре с акустическими слоями", "Дизайн-решения",
     "Դիզայն հարդարման պանել", "Պրեմիում հարդարման պանելներ ակուստիկ շերտերի հետ", "Դիզայն լուծումներ"),
    ("commercial-system", "Commercial Acoustic Pack", "Turnkey acoustic package for offices and retail interiors", "Commercial Spaces",
     "Коммерческий акустический пакет", "Готовый акустический пакет для офисов и ритейла", "Коммерческие пространства",
     "Կոմերցիոն ակուստիկ փաթեթ", "Պատրաստի ակուստիկ փաթեթ գրասենյակների և խանութների համար", "Կոմերցիոն տարածքներ"),
    ("residential-kit", "Residential Quiet Kit", "Ready kit for apartment bedrooms and living rooms", "Residential",
     "Жилой комплект Quiet", "Готовый комплект для спален и гостиных", "Жилые пространства",
     "Բնակելի Quiet հավաքածու", "Պատրաստի հավաքածու ննջասենյակների և հյուրասենյակների համար", "Բնակելի"),
    ("office-liner", "Office Acoustic Liner", "Absorptive liner panels for open-plan and meeting rooms", "Commercial Spaces",
     "Офисный акустический лайнер", "Поглощающие панели для open-space и переговорных", "Коммерческие пространства",
     "Գրասենյակային ակուստիկ լայներ", "Կլանող պանելներ open-space և հանդիպումների սենյակների համար", "Կոմերցիոն տարածքներ"),
    ("home-envelope", "Home Envelope System", "Whole-home insulation approach for private houses", "Residential",
     "Система Home Envelope", "Комплексная изоляция для частных домов", "Жилые пространства",
     "Home Envelope համակարգ", "Ամբողջ տան մեկուսացման մոտեցում մասնավոր տների համար", "Բնակելի"),
    ("coming-soon-pack", "IdealDom · Coming Soon", "Full IdealDom range arriving soon across Armenia", "Coming Soon",
     "IdealDom · Скоро", "Полный ассортимент IdealDom скоро в Армении", "Скоро в продаже",
     "IdealDom · Շուտով", "IdealDom-ի ամբողջ տեսականին շուտով Հայաստանում", "Շուտով"),
]


def js(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit(obj: dict, indent: int = 1) -> str:
    sp = "  " * indent
    items: list[str] = []
    for k, v in obj.items():
        key = k if str(k).isidentifier() else js(k)
        if isinstance(v, dict):
            items.append(f"{sp}{key}: {{\n{emit(v, indent + 1)}\n{sp}}}")
        else:
            items.append(f"{sp}{key}: {js(v)}")
    return ",\n".join(items)


def nest(flat: dict[str, str]) -> dict:
    data: dict = {}
    for key, val in flat.items():
        parts = key.split(".")
        cur = data
        for p in parts[:-1]:
            cur = cur.setdefault(p, {})
        cur[parts[-1]] = val
    return data


def products_for(lang: int) -> dict:
    out = {}
    for p in PRODUCTS:
        pid = p[0]
        if lang == 0:
            name, desc, cat = p[1], p[2], p[3]
        elif lang == 1:
            name, desc, cat = p[4], p[5], p[6]
        else:
            name, desc, cat = p[7], p[8], p[9]
        out[pid] = {"name": name, "description": desc, "category": cat}
    return out


EN = json.loads(Path("/tmp/dizart_en_strings.json").read_text(encoding="utf-8"))

RU_OVER = {
    "nav.home": "Главная", "nav.products": "Каталог", "nav.about": "О нас", "nav.contact": "Контакты",
    "common.search": "Поиск", "common.account": "Аккаунт", "common.wishlist": "Избранное", "common.menu": "Меню",
    "common.close": "Закрыть", "common.openMenu": "Открыть меню", "common.closeMenu": "Закрыть меню",
    "common.shopCollection": "Смотреть ассортимент", "common.shopAll": "Смотреть всё", "common.viewAll": "Смотреть все",
    "common.learnMore": "Подробнее", "common.discoverMore": "Узнать больше", "common.exploreAll": "Смотреть всё",
    "common.exploreNow": "Смотреть сейчас", "common.continueShopping": "Продолжить просмотр",
    "common.backToStore": "Вернуться в магазин", "common.clearAll": "Очистить всё", "common.reset": "Сбросить",
    "common.previous": "Назад", "common.next": "Далее", "common.loading": "Загрузка…", "common.of": "из",
    "common.showing": "Показано", "common.items": "товаров", "common.item": "товар", "common.collections": "Коллекции",
    "common.catalog": "Каталог", "common.categories": "Категории", "common.browse": "Смотреть", "common.from": "От",
    "common.to": "До", "common.brand": "Бренд", "common.category": "Категория", "common.tags": "Теги",
    "common.color": "Цвет", "common.price": "Цена", "common.stock": "Наличие", "common.action": "Действие",
    "common.product": "Товар", "common.inStock": "В наличии", "common.addToCart": "В корзину",
    "common.noReviews": "Нет отзывов", "common.taxIncluded": "С учётом налогов", "common.savePercent": "Скидка {n}%",
    "common.homeCrumb": "Главная", "header.language": "Язык",
    "footer.blurb": "DizArt — решения для строительства и дизайна в одном месте. Современная звукоизоляция и строительные системы по всей Армении.",
    "footer.location": "Ереван, Армения", "footer.aboutUs": "О нас", "footer.ourStory": "Наша история",
    "footer.philosophy": "Почему DizArt", "footer.contact": "Контакты", "footer.newsletter": "Рассылка",
    "footer.emailPlaceholder": "Ваш email", "footer.join": "Подписаться",
    "footer.rights": "© 2026 DizArt. Все права защищены.", "footer.follow": "Мы в соцсетях",
    "search.placeholder": "Поиск товаров…", "search.results": "Результаты поиска", "search.popular": "Популярные запросы",
    "search.noMatches": "Ничего не найдено по запросу «{query}»", "search.viewAllProducts": "Смотреть все товары",
    "sidebar.catalog": "Каталог", "sidebar.categories": "Категории", "sidebar.itemsCount": "{n} товаров",
    "sidebar.browse": "Смотреть", "sidebar.viewAll": "Смотреть все", "sidebar.shopAll": "Смотреть всё",
    "sidebar.browseCategories": "Категории",
    "home.qualityTitle": "Проверенные технологии. Профессиональный подход.",
    "home.qualityBody": "Звукоизоляция и строительные системы для квартир, домов, офисов и коммерческих помещений — для долговечного комфорта.",
    "home.responsibleEyebrow": "Доставка по стране",
    "home.responsibleTitle": "Розница, опт и доставка по всей Армении.",
    "home.responsibleBody": "Товары доступны локально в Армении с доставкой по всей стране — IdealDom, Tonus и профессиональные строительные системы.",
    "home.philosophyTitle": "Почему DizArt",
    "home.philosophyP1": "Комфорт начинается не только с красивого дизайна, но и с правильной звукоизоляции и качественных строительных решений.",
    "home.philosophyP2": "Мы предлагаем современные системы для домов, квартир, офисов и коммерческих интерьеров — с профессиональным подходом и верной технологией.",
    "home.craftedTitle": "Решения под ваше пространство",
    "home.craftedBody": "От многослойных акустических систем до финишной отделки — помогаем выбрать верное решение для каждой комнаты.",
    "home.limitedOffers": "Скоро", "home.flashSale": "Новинки", "home.allItems": "Все товары", "home.sales": "Предложения",
    "home.featured": "Избранное",
    "home.testimonialQuote": "DizArt помог спланировать тихие интерьеры с понятными слоями системы. Профессиональная консультация и материалы для Армении.",
    "home.testimonialAuthor": "Клиент проекта — Ереван",
    "hero.slide1Eyebrow": "DizArt.am", "hero.slide1Title": "Решения для строительства\nи дизайна в одном месте",
    "hero.slide1Cta": "Смотреть ассортимент",
    "hero.slide1Sub": "Современная звукоизоляция и строительные системы в Армении (IdealDom, Tonus).",
    "hero.slide2Eyebrow": "Скоро в Армении", "hero.slide2Title": "Системы звукоизоляции\nIdealDom · Tonus",
    "hero.slide2Cta": "Связаться", "hero.slide2Sub": "Розница и опт · Доставка по всей Армении",
    "news.eyebrow": "Новинка", "news.title": "Скоро в Армении",
    "news.lead": "Комфорт вашего дома или квартиры начинается не только с красивого дизайна, но и с правильной звукоизоляции и качественных строительных решений.",
    "news.body": "Скоро наш ассортимент пополнится современными решениями системы «IdealDom» для звукоизоляции и внутренней отделки.",
    "news.tonus": "Звукоизоляционные системы Tonus", "news.modern": "Современные строительные решения",
    "news.pro": "Профессиональный подход и верная технология", "news.local": "Товары — на месте в Армении",
    "news.deliveryNote": "Мы планируем предлагать товары не только в нашем магазине, но и с доставкой по всей территории Армении.",
    "news.soonShop": "Скоро в нашем магазине", "news.retailWholesale": "Розница и опт",
    "news.deliveryAll": "Доставка по всей РА",
    "news.follow": "Следите за нашей страницей — скоро представим ассортимент, цены и детали применения.",
    "news.cta": "Узнать о наличии",
    "collections.title": "Коллекции", "collections.sofaLiving": "Системы Tonus", "collections.chicResidence": "IdealDom",
    "collections.dreamyDecor": "Акустические слои", "collections.fineFurnish": "Дизайн-отделка",
    "about.heroTitle": "О нас", "about.storyTitle": "Наша история",
    "about.storySubtitle": "Решения для строительства и дизайна в одном месте.",
    "about.storyBody": "DizArt привозит в Армению современные системы звукоизоляции и строительства. Мы фокусируемся на проверенных технологиях для квартир, домов, офисов и коммерческих пространств — розница, опт и доставка по стране.",
    "about.teamTitle": "Команда DizArt",
    "about.teamBody": "Сфокусированная команда специалистов по строительству и дизайну, которая внедряет акустические и строительные технологии профессионально и практично.",
    "about.commitment": "Мы стремимся приносить качественные системы и понятные рекомендации в каждый проект в Армении.",
    "about.policyShippingTitle": "Доставка по Армении", "about.policyShippingBody": "Розница и опт по всей стране",
    "about.policySecurityTitle": "Безопасная оплата", "about.policySecurityBody": "Гибкие способы оплаты",
    "about.policyReturnsTitle": "Экспертная консультация", "about.policyReturnsBody": "Профессиональный подбор систем",
    "about.policySupportTitle": "Локальное наличие", "about.policySupportBody": "Товары на складе в Армении",
    "about.memberCeo": "CEO", "about.memberDesigner": "Специалист",
    "contact.title": "Контакты", "contact.addressLabel": "Адрес", "contact.addressLine": "Ереван, Армения",
    "contact.address": "Приходите в шоурум в рабочие часы или оставьте сообщение — мы ответим как можно скорее.",
    "contact.phoneLabel": "Телефон", "contact.emailLabel": "Email", "contact.hoursLabel": "Часы работы",
    "contact.hoursWeekday": "Понедельник–пятница 09:30 - 17:30", "contact.hoursWeekend": "Суббота и воскресенье 10:00 - 15:00",
    "contact.formTitle": "Заявка на консультацию", "contact.namePlaceholder": "Имя",
    "contact.phonePlaceholder": "Номер телефона", "contact.emailPlaceholder": "Эл. почта",
    "contact.serviceLabel": "Тип услуги / товара", "contact.serviceSound": "Звукоизоляция",
    "contact.serviceBuild": "Строительные материалы", "contact.serviceOther": "Другое",
    "contact.messagePlaceholder": "Сообщение", "contact.submit": "Отправить заявку",
    "contact.thanks": "Спасибо — мы скоро свяжемся с вами.", "contact.openMap": "Открыть карту",
    "login.joinTitle": "Присоединиться к DizArt", "login.viewCollection": "Смотреть каталог",
    "login.pitch": "Войдите, чтобы сохранять товары, следить за коллекциями и держать шортлист проекта в одном месте.",
    "wishlist.savedPieces": "Сохранённые товары", "wishlist.emptyBody": "Сохраняйте нужные товары и находите их здесь в любое время.",
    "wishlist.continueShopping": "Продолжить просмотр",
    "products.heroTitle": "Каталог", "products.refine": "Уточнить", "products.filters": "Фильтры",
    "products.browseBy": "Смотреть по", "products.category": "Категория", "products.budget": "Бюджет",
    "products.priceRange": "Диапазон цен", "products.from": "От", "products.to": "До", "products.filter": "Фильтр",
    "products.showing": "Показано {shown} из {total}", "products.showProducts": "Показать {n} товаров",
    "products.noFound": "Товары не найдены", "products.noFoundHint": "Попробуйте изменить фильтры или сбросить их.",
    "products.clearFilters": "Сбросить фильтры", "products.sortFeatured": "Избранное", "products.sortBest": "Бестселлеры",
    "products.sortAZ": "По алфавиту, А–Я", "products.sortZA": "По алфавиту, Я–А",
    "products.sortPriceAsc": "Цена, по возрастанию", "products.sortPriceDesc": "Цена, по убыванию",
    "categories.livingRoom": "Звукоизоляция", "categories.bedroom": "Строительство",
    "categories.dining": "Интерьерные системы", "categories.office": "Дизайн-решения",
    "categories.decor": "Аксессуары", "categories.sale": "Скоро",
    "sub.sofas": "Стеновые системы", "sub.coffeeTables": "Системы пола", "sub.accentChairs": "Системы потолка",
    "sub.tvUnits": "Мембраны", "sub.beds": "Профили", "sub.nightstands": "Листы", "sub.dressers": "Герметики",
    "sub.wardrobes": "Комплекты", "sub.diningTables": "Перегородки", "sub.diningChairs": "Финишные панели",
    "sub.sideboards": "Коммерция", "sub.barStools": "Аксессуары", "sub.desks": "Квартиры",
    "sub.officeChairs": "Офисы", "sub.bookshelves": "Дома", "sub.storage": "Шоурумы",
    "filterCat.modernLiving": "Звукоизоляция", "filterCat.cozyCorner": "Строительные системы",
    "filterCat.urbanNest": "Внутренняя отделка", "filterCat.naturalForm": "Акустика пола",
    "filterCat.nordicHome": "Акустика стен", "filterCat.pureComfort": "Акустика потолка",
    "filterCat.timelessSpace": "Коммерческие пространства", "filterCat.elegantRoom": "Жилые пространства",
    "filterCat.warmHabitat": "Дизайн-решения", "filterCat.luxeInterior": "Скоро в продаже",
    "filterCat.softShelter": "Аксессуары",
    "badge.sale": "Скидка", "badge.new": "Новинка", "badge.hot": "Хит",
    "colors.white": "Белый", "colors.green": "Серый", "colors.black": "Чёрный", "colors.beige": "Бежевый",
    "colors.oak": "Натуральный",
}

HY_OVER = {
    "nav.home": "Գլխավոր", "nav.products": "Տեսականի", "nav.about": "Մեր մասին", "nav.contact": "Կապ",
    "common.search": "Որոնում", "common.account": "Հաշիվ", "common.wishlist": "Նախընտրածներ", "common.menu": "Մենյու",
    "common.close": "Փակել", "common.openMenu": "Բացել մենյուն", "common.closeMenu": "Փակել մենյուն",
    "common.shopCollection": "Տեսնել տեսականին", "common.shopAll": "Տեսնել ամենը", "common.viewAll": "Տեսնել բոլորը",
    "common.learnMore": "Իմանալ ավելին", "common.discoverMore": "Բացահայտել ավելին", "common.exploreAll": "Տեսնել ամենը",
    "common.exploreNow": "Դիտել հիմա", "common.continueShopping": "Շարունակել դիտումը",
    "common.backToStore": "Վերադառնալ խանութ", "common.clearAll": "Մաքրել ամենը", "common.reset": "Վերակայել",
    "common.previous": "Նախորդ", "common.next": "Հաջորդ", "common.loading": "Բեռնվում է…", "common.of": "ից",
    "common.showing": "Ցուցադրված է", "common.items": "ապրանք", "common.item": "ապրանք",
    "common.collections": "Հավաքածուներ", "common.catalog": "Կատալոգ", "common.categories": "Կատեգորիաներ",
    "common.browse": "Դիտել", "common.from": "Սկսած", "common.to": "Մինչև", "common.brand": "Բրենդ",
    "common.category": "Կատեգորիա", "common.tags": "Պիտակներ", "common.color": "Գույն", "common.price": "Գին",
    "common.stock": "Առկայություն", "common.action": "Գործողություն", "common.product": "Ապրանք",
    "common.inStock": "Առկա է", "common.addToCart": "Ավելացնել զամբյուղ", "common.noReviews": "Կարծիքներ չկան",
    "common.taxIncluded": "Հարկերով", "common.savePercent": "Խնայել {n}%", "common.homeCrumb": "Գլխավոր",
    "header.language": "Լեզու",
    "footer.blurb": "DizArt — շինարարության և դիզայնի լուծումներ մեկ վայրում։ Ժամանակակից ձայնամեկուսացում և շինարարական համակարգեր ամբողջ Հայաստանում։",
    "footer.location": "Երևան, Հայաստան", "footer.aboutUs": "Մեր մասին", "footer.ourStory": "Մեր պատմությունը",
    "footer.philosophy": "Ինչու DizArt", "footer.contact": "Կապ", "footer.newsletter": "Բաժանորդագրություն",
    "footer.emailPlaceholder": "Ձեր էլ. փոստը", "footer.join": "Միանալ",
    "footer.rights": "© 2026 DizArt. Բոլոր իրավունքները պաշտպանված են։", "footer.follow": "Հետևեք մեզ",
    "search.placeholder": "Որոնել ապրանքներ…", "search.results": "Որոնման արդյունքներ",
    "search.popular": "Հանրաճանաչ որոնումներ", "search.noMatches": "«{query}» հարցման համար արդյունքներ չկան",
    "search.viewAllProducts": "Տեսնել բոլոր ապրանքները",
    "sidebar.catalog": "Կատալոգ", "sidebar.categories": "Կատեգորիաներ", "sidebar.itemsCount": "{n} ապրանք",
    "sidebar.browse": "Դիտել", "sidebar.viewAll": "Տեսնել բոլորը", "sidebar.shopAll": "Տեսնել ամենը",
    "sidebar.browseCategories": "Դիտել կատեգորիաները",
    "home.qualityTitle": "Ստուգված տեխնոլոգիաներ։ Պրոֆեսիոնալ մոտեցում։",
    "home.qualityBody": "Ձայնամեկուսացում և շինարարական համակարգեր բնակարանների, տների, գրասենյակների և կոմերցիոն տարածքների համար՝ երկարատև հարմարավետության համար։",
    "home.responsibleEyebrow": "Առաքում ամբողջ ՀՀ-ում",
    "home.responsibleTitle": "Մանրածախ, մեծածախ և առաքում ամբողջ Հայաստանում։",
    "home.responsibleBody": "Ապրանքները առկա են տեղում Հայաստանում՝ առաքմամբ ամբողջ երկրում։ IdealDom, Tonus և պրոֆեսիոնալ շինարարական համակարգեր։",
    "home.philosophyTitle": "Ինչու DizArt",
    "home.philosophyP1": "Ձեր տան կամ բնակարանի հարմարավետությունը սկսվում է ոչ միայն գեղեցիկ դիզայնից, այլև ճիշտ ձայնամեկուսացումից և որակյալ շինարարական լուծումներից։",
    "home.philosophyP2": "Մենք առաջարկում ենք ժամանակակից համակարգեր տների, բնակարանների, գրասենյակների և կոմերցիոն ինտերիերների համար՝ պրոֆեսիոնալ մոտեցմամբ և ճիշտ տեխնոլոգիայով։",
    "home.craftedTitle": "Լուծումներ ձեր տարածքի համար",
    "home.craftedBody": "Շերտավոր ակուստիկ համակարգերից մինչև հարդարման լուծումներ՝ օգնում ենք ընտրել ճիշտ համակարգը յուրաքանչյուր սենյակի համար։",
    "home.limitedOffers": "Շուտով", "home.flashSale": "Նորույթներ", "home.allItems": "Բոլոր ապրանքները",
    "home.sales": "Առաջարկներ", "home.featured": "Ընտրված",
    "home.testimonialQuote": "DizArt-ը օգնեց պլանավորել հանգիստ ինտերիերներ՝ հստակ համակարգային շերտերով։ Պրոֆեսիոնալ խորհրդատվություն և նյութեր Հայաստանի համար։",
    "home.testimonialAuthor": "Նախագծի հաճախորդ — Երևան",
    "hero.slide1Eyebrow": "DizArt.am",
    "hero.slide1Title": "Շինարարության և դիզայնի\nլուծումներ մեկ վայրում",
    "hero.slide1Cta": "Տեսնել տեսականին",
    "hero.slide1Sub": "Ժամանակակից ձայնամեկուսացում և շինարարական համակարգեր Հայաստանում («ИдеалДом», Tonus)։",
    "hero.slide2Eyebrow": "Շուտով Հայաստանում",
    "hero.slide2Title": "Ձայնամեկուսիչ համակարգեր\nIdealDom · Tonus",
    "hero.slide2Cta": "Կապ հաստատել",
    "hero.slide2Sub": "Մանրածախ և մեծածախ · Առաքում ամբողջ ՀՀ տարածքում",
    "news.eyebrow": "Նորույթ", "news.title": "Շուտով Հայաստանում",
    "news.lead": "Ձեր տան կամ բնակարանի հարմարավետությունը սկսվում է ոչ միայն գեղեցիկ դիզայնից, այլև ճիշտ ձայնամեկուսացումից և որակյալ շինարարական լուծումներից։",
    "news.body": "Շուտով մեր տեսականին կհամալրվի «ИдеалДом» համակարգի ժամանակակից լուծումներով՝ ձայնամեկուսացման և ներքին հարդարման աշխատանքների համար։",
    "news.tonus": "Tonus ձայնամեկուսիչ համակարգեր", "news.modern": "Ժամանակակից շինարարական լուծումներ",
    "news.pro": "Պրոֆեսիոնալ մոտեցում և ճիշտ տեխնոլոգիա", "news.local": "Ապրանքները՝ տեղում Հայաստանում",
    "news.deliveryNote": "Մենք նախատեսում ենք առաջարկել ապրանքները ոչ միայն մեր խանութում, այլև առաքմամբ ամբողջ Հայաստանի տարածքում։",
    "news.soonShop": "Շուտով՝ մեր խանութում", "news.retailWholesale": "Մանրածախ և մեծածախ վաճառք",
    "news.deliveryAll": "Առաքում ամբողջ ՀՀ տարածքում",
    "news.follow": "Հետևեք մեր էջին․ շուտով կներկայացնենք տեսականին, գները և կիրառման մանրամասները։",
    "news.cta": "Հարցնել առկայության մասին",
    "collections.title": "Հավաքածուներ", "collections.sofaLiving": "Tonus համակարգեր",
    "collections.chicResidence": "IdealDom", "collections.dreamyDecor": "Ակուստիկ շերտեր",
    "collections.fineFurnish": "Դիզայն հարդարում",
    "about.heroTitle": "Մեր մասին", "about.storyTitle": "Մեր պատմությունը",
    "about.storySubtitle": "Շինարարության և դիզայնի լուծումներ մեկ վայրում։",
    "about.storyBody": "DizArt-ը Հայաստան է բերում ժամանակակից ձայնամեկուսացման և շինարարական համակարգեր։ Մենք կենտրոնանում ենք ստուգված տեխնոլոգիաների վրա՝ բնակարանների, տների, գրասենյակների և կոմերցիոն տարածքների համար՝ մանրածախ, մեծածախ և առաքում ամբողջ երկրում։",
    "about.teamTitle": "DizArt թիմը",
    "about.teamBody": "Կենտրոնացված թիմ շինարարության և դիզայնի մասնագետներից, որոնք ներմուծում են ակուստիկ և շինարարական տեխնոլոգիաներ պրոֆեսիոնալ և գործնական մոտեցմամբ։",
    "about.commitment": "Մենք պարտավորվում ենք որակյալ համակարգեր և հստակ ուղեցույց բերել Հայաստանի յուրաքանչյուր նախագծի։",
    "about.policyShippingTitle": "Առաքում ամբողջ ՀՀ-ում", "about.policyShippingBody": "Մանրածախ և մեծածախ ամբողջ երկրում",
    "about.policySecurityTitle": "Անվտանգ վճարումներ", "about.policySecurityBody": "Ճկուն վճարման տարբերակներ",
    "about.policyReturnsTitle": "Փորձագիտական խորհրդատվություն", "about.policyReturnsBody": "Պրոֆեսիոնալ համակարգի ընտրություն",
    "about.policySupportTitle": "Տեղական առկայություն", "about.policySupportBody": "Ապրանքները Հայաստանում",
    "about.memberCeo": "Տնօրեն", "about.memberDesigner": "Մասնագետ",
    "contact.title": "Կապ", "contact.addressLabel": "Հասցե", "contact.addressLine": "Երևան, Հայաստան",
    "contact.address": "Այցելեք մեր շոուրումը աշխատանքային ժամերին կամ թողեք հաղորդագրություն՝ մենք կպատասխանենք որքան հնարավոր է շուտ։",
    "contact.phoneLabel": "Հեռախոս", "contact.emailLabel": "Էլ. փոստ", "contact.hoursLabel": "Աշխատանքային ժամեր",
    "contact.hoursWeekday": "Երկուշաբթի–ուրբաթ 09:30 - 17:30", "contact.hoursWeekend": "Շաբաթ և կիրակի 10:00 - 15:00",
    "contact.formTitle": "Խորհրդատվության հայտ", "contact.namePlaceholder": "Անուն",
    "contact.phonePlaceholder": "Հեռախոսահամար", "contact.emailPlaceholder": "Էլ. փոստ",
    "contact.serviceLabel": "Ծառայության/Ապրանքի տեսակը", "contact.serviceSound": "Ձայնամեկուսացում",
    "contact.serviceBuild": "Շինարարական նյութեր", "contact.serviceOther": "Այլ",
    "contact.messagePlaceholder": "Հաղորդագրություն", "contact.submit": "Ուղարկել հայտը",
    "contact.thanks": "Շնորհակալություն — շուտով կկապվենք ձեզ հետ։", "contact.openMap": "Բացել քարտեզը",
    "login.joinTitle": "Միացեք DizArt-ին", "login.viewCollection": "Դիտել կատալոգը",
    "login.pitch": "Մուտք գործեք՝ ապրանքներ պահելու, հավաքածուներին հետևելու և նախագծի ցանկը մեկ տեղում պահելու համար։",
    "wishlist.savedPieces": "Պահված ապրանքներ",
    "wishlist.emptyBody": "Պահեք անհրաժեշտ ապրանքները և գտեք դրանք այստեղ ցանկացած պահի։",
    "wishlist.continueShopping": "Շարունակել դիտումը",
    "products.heroTitle": "Տեսականի", "products.refine": "Զտել", "products.filters": "Ֆիլտրեր",
    "products.browseBy": "Դիտել ըստ", "products.category": "Կատեգորիա", "products.budget": "Բյուջե",
    "products.priceRange": "Գնային միջակայք", "products.from": "Սկսած", "products.to": "Մինչև",
    "products.filter": "Ֆիլտր", "products.showing": "Ցուցադրված է {shown}՝ {total}-ից",
    "products.showProducts": "Ցույց տալ {n} ապրանք", "products.noFound": "Ապրանքներ չեն գտնվել",
    "products.noFoundHint": "Փորձեք փոխել ֆիլտրերը կամ մաքրել դրանք։", "products.clearFilters": "Մաքրել ֆիլտրերը",
    "products.sortFeatured": "Ընտրված", "products.sortBest": "Լավագույն վաճառք",
    "products.sortAZ": "Այբբենական, Ա–Ֆ", "products.sortZA": "Այբբենական, Ֆ–Ա",
    "products.sortPriceAsc": "Գին՝ ցածրից բարձր", "products.sortPriceDesc": "Գին՝ բարձրից ցածր",
    "categories.livingRoom": "Ձայնամեկուսացում", "categories.bedroom": "Շինարարություն",
    "categories.dining": "Ինտերիեր համակարգեր", "categories.office": "Դիզայն լուծումներ",
    "categories.decor": "Աքսեսուարներ", "categories.sale": "Շուտով",
    "sub.sofas": "Պատի համակարգեր", "sub.coffeeTables": "Հատակի համակարգեր", "sub.accentChairs": "Առաստաղի համակարգեր",
    "sub.tvUnits": "Մեմբրաններ", "sub.beds": "Պրոֆիլներ", "sub.nightstands": "Թիթեղներ", "sub.dressers": "Հերմետիկներ",
    "sub.wardrobes": "Հավաքածուներ", "sub.diningTables": "Միջնորմեր", "sub.diningChairs": "Հարդարման պանելներ",
    "sub.sideboards": "Կոմերցիոն", "sub.barStools": "Աքսեսուարներ", "sub.desks": "Բնակարաններ",
    "sub.officeChairs": "Գրասենյակներ", "sub.bookshelves": "Տներ", "sub.storage": "Շոուրումներ",
    "filterCat.modernLiving": "Ձայնամեկուսացում", "filterCat.cozyCorner": "Շինարարական համակարգեր",
    "filterCat.urbanNest": "Ներքին հարդարում", "filterCat.naturalForm": "Հատակի ակուստիկա",
    "filterCat.nordicHome": "Պատի ակուստիկա", "filterCat.pureComfort": "Առաստաղի ակուստիկա",
    "filterCat.timelessSpace": "Կոմերցիոն տարածքներ", "filterCat.elegantRoom": "Բնակելի",
    "filterCat.warmHabitat": "Դիզայն լուծումներ", "filterCat.luxeInterior": "Շուտով",
    "filterCat.softShelter": "Աքսեսուարներ",
    "badge.sale": "Զեղչ", "badge.new": "Նոր", "badge.hot": "Հիթ",
    "colors.white": "Սպիտակ", "colors.green": "Մոխրագույն", "colors.black": "Սև", "colors.beige": "Բեժ",
    "colors.oak": "Բնական",
}


def build(code: str, flat: dict[str, str], lang_idx: int) -> str:
    data = nest(flat)
    data["products"].update(products_for(lang_idx))
    return f"const {code} = {{\n{emit(data)}\n}} as const satisfies Messages;\n"


def main() -> None:
    ru = {**EN, **RU_OVER}
    hy = {**EN, **HY_OVER}
    content = (
        'import type { Messages } from "./utils";\n\n'
        + build("en", EN, 0)
        + "\n"
        + build("ru", ru, 1)
        + "\n"
        + build("hy", hy, 2)
        + "\n"
        + "export const dictionaries = { en, ru, hy } as const satisfies Record<\n"
        + '  "en" | "ru" | "hy",\n'
        + "  Messages\n"
        + ">;\n"
    )
    OUT.write_text(content, encoding="utf-8")
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
