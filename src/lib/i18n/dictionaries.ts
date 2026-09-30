import type { Messages } from "./utils";

const en = {
  nav: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact"
  },
  common: {
    search: "Search",
    account: "Account",
    wishlist: "Wishlist",
    menu: "Menu",
    close: "Close",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    shopCollection: "View assortment",
    shopAll: "View all",
    viewAll: "View all",
    learnMore: "Learn More",
    discoverMore: "Discover More",
    exploreAll: "Explore All",
    exploreNow: "Explore Now",
    continueShopping: "Continue browsing",
    backToStore: "Back to store",
    clearAll: "Clear all",
    reset: "Reset",
    previous: "Previous",
    next: "Next",
    loading: "Loading…",
    of: "of",
    showing: "Showing",
    items: "items",
    item: "item",
    collections: "Collections",
    catalog: "Catalog",
    categories: "Categories",
    browse: "Browse",
    from: "From",
    to: "To",
    brand: "Brand",
    category: "Category",
    tags: "Tags",
    color: "Color",
    price: "Price",
    stock: "Stock",
    action: "Action",
    product: "Product",
    inStock: "In stock",
    addToCart: "Add to cart",
    noReviews: "No reviews",
    taxIncluded: "Tax included",
    savePercent: "Save {n}%",
    homeCrumb: "Home"
  },
  header: {
    language: "Language"
  },
  footer: {
    blurb: "DizArt — construction and design solutions in one place. Modern sound insulation and building systems across Armenia.",
    location: "Yerevan, Armenia",
    aboutUs: "About Us",
    ourStory: "Our Story",
    philosophy: "Why DizArt",
    contact: "Contact",
    newsletter: "Newsletter",
    emailPlaceholder: "Your email",
    join: "Join",
    rights: "© 2026 DizArt. All rights reserved.",
    languages: "AM · EN · RU",
    follow: "Follow us"
  },
  search: {
    placeholder: "Search products…",
    results: "Search results",
    popular: "Popular searches",
    noMatches: "No matches for “{query}”",
    viewAllProducts: "View all products"
  },
  sidebar: {
    catalog: "Catalog",
    categories: "Categories",
    itemsCount: "{n} items",
    browse: "Browse",
    viewAll: "View all",
    shopAll: "View all",
    browseCategories: "Browse categories"
  },
  home: {
    qualityTitle: "Proven technologies. Professional approach.",
    qualityBody: "Sound insulation and construction systems for apartments, houses, offices, and commercial spaces — selected for lasting comfort.",
    responsibleEyebrow: "Nationwide delivery",
    responsibleTitle: "Retail, wholesale, and delivery across Armenia.",
    responsibleBody: "Products available locally in Armenia with delivery throughout the country — IdealDom, Tonus, and professional building systems.",
    philosophyTitle: "Why DizArt",
    philosophyP1: "Comfort starts not only with beautiful design, but with the right sound insulation and quality construction solutions.",
    philosophyP2: "We bring modern systems for homes, apartments, offices, and commercial interiors — with a professional approach and correct technology.",
    craftedTitle: "Built for your space",
    craftedBody: "From layered acoustic assemblies to finishing systems — we help you choose the right solution for each room.",
    limitedOffers: "Coming soon",
    flashSale: "New arrivals",
    allItems: "All items",
    sales: "Offers",
    featured: "Featured",
    testimonialQuote: "DizArt helped us plan quiet interiors with clear system layers. Professional advice and materials ready for Armenia.",
    testimonialAuthor: "Project client — Yerevan"
  },
  hero: {
    slide1Eyebrow: "DizArt.am",
    slide1Title: "Construction and design\nsolutions in one place",
    slide1Cta: "View assortment",
    slide1Sub: "Modern sound insulation and building systems in Armenia (IdealDom, Tonus).",
    slide2Eyebrow: "Coming soon in Armenia",
    slide2Title: "Sound insulation systems\nIdealDom · Tonus",
    slide2Cta: "Contact us",
    slide2Sub: "Retail & wholesale · Delivery across Armenia"
  },
  news: {
    eyebrow: "Coming soon",
    title: "Coming soon in Armenia",
    lead: "Comfort in your home or apartment starts not only with beautiful design, but with the right sound insulation and quality construction solutions.",
    body: "Soon our assortment will include modern IdealDom solutions for sound insulation and interior finishing works.",
    tonus: "Tonus sound insulation systems",
    modern: "Modern construction solutions",
    pro: "Professional approach and correct technology",
    local: "Products available locally in Armenia",
    deliveryNote: "We plan to offer products not only in our store, but also with delivery across Armenia.",
    soonShop: "Soon in our store",
    retailWholesale: "Retail and wholesale",
    deliveryAll: "Delivery across Armenia",
    follow: "Follow our page — we will soon present the assortment, prices, and application details.",
    cta: "Ask about availability"
  },
  collections: {
    title: "Collections",
    sofaLiving: "Tonus Systems",
    chicResidence: "IdealDom",
    dreamyDecor: "Acoustic Layers",
    fineFurnish: "Design Finishes"
  },
  about: {
    heroTitle: "About Us",
    storyTitle: "Our Story",
    storySubtitle: "Construction and design solutions in one place.",
    storyBody: "DizArt brings modern sound insulation and construction systems to Armenia. We focus on proven technologies for apartments, houses, offices, and commercial spaces — with retail, wholesale, and nationwide delivery.",
    teamTitle: "Behind DizArt",
    teamBody: "A focused team of construction and design specialists delivering acoustic and building technologies with a professional, practical approach.",
    commitment: "We are committed to bringing quality systems and clear guidance to every project in Armenia.",
    policyShippingTitle: "Delivery Across Armenia",
    policyShippingBody: "Retail and wholesale nationwide",
    policySecurityTitle: "Secure Payments",
    policySecurityBody: "Flexible payment options",
    policyReturnsTitle: "Expert Consultation",
    policyReturnsBody: "Professional system selection",
    policySupportTitle: "Local Availability",
    policySupportBody: "Products stocked in Armenia",
    memberCeo: "CEO",
    memberDesigner: "Specialist"
  },
  contact: {
    title: "Contact Us",
    addressLabel: "Address",
    addressLine: "Yerevan, Armenia",
    address: "Visit our showroom during business hours, or leave a message and we will respond as soon as possible.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Open Hours",
    hoursWeekday: "Monday to Friday 09:30 - 17:30",
    hoursWeekend: "Saturday & Sunday 10:00 - 15:00",
    formTitle: "Request a consultation",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone number",
    emailPlaceholder: "Email",
    serviceLabel: "Service / product type",
    serviceSound: "Sound insulation",
    serviceBuild: "Construction materials",
    serviceOther: "Other",
    messagePlaceholder: "Message",
    submit: "Send request",
    thanks: "Thank you — we will be in touch soon.",
    openMap: "Open map"
  },
  login: {
    memberAccess: "Member access",
    pitch: "Sign in to save products, follow collections, and keep your project shortlist in one place.",
    welcomeBack: "Welcome back",
    joinTitle: "Join DizArt",
    signIn: "Sign in",
    createAccount: "Create account",
    signInCopy: "Enter your details to continue to your account.",
    registerCopy: "Create an account to save favorites and explore the catalog.",
    register: "Register",
    fullName: "Full name",
    yourName: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    password: "Password",
    forgot: "Forgot password?",
    remember: "Remember me",
    terms: "By continuing you agree to our terms and privacy policy.",
    pleaseWait: "Please wait…",
    successSignIn: "Signed in successfully.",
    successRegister: "Account created successfully.",
    preferBrowse: "Prefer to browse first?",
    viewCollection: "View catalog"
  },
  wishlist: {
    title: "Wishlist",
    savedPieces: "Saved products",
    itemCount: "{n} item",
    itemsCount: "{n} items",
    clear: "Clear wishlist",
    emptyTitle: "Your wishlist is empty",
    emptyBody: "Save products you need and find them here anytime.",
    continueShopping: "Continue browsing",
    product: "Product",
    price: "Price",
    stock: "Stock",
    action: "Action",
    inStock: "In stock",
    addToCart: "Add to cart",
    alsoLike: "You may also like"
  },
  products: {
    heroTitle: "Products",
    refine: "Refine",
    filters: "Filters",
    browseBy: "Browse by",
    category: "Category",
    budget: "Budget",
    priceRange: "Price range",
    from: "From",
    to: "To",
    filter: "Filter",
    showing: "Showing {shown} of {total}",
    showProducts: "Show {n} products",
    noFound: "No products found",
    noFoundHint: "Try adjusting your filters or clearing them to see more.",
    clearFilters: "Clear filters",
    sortFeatured: "Featured",
    sortBest: "Best selling",
    sortAZ: "Alphabetically, A–Z",
    sortZA: "Alphabetically, Z–A",
    sortPriceAsc: "Price, low to high",
    sortPriceDesc: "Price, high to low",
    "tonus-wall-panel": {
      name: "Tonus Wall Panel",
      description: "Modern wall acoustic panel system for residential quiet",
      category: "Wall Acoustics"
    },
    "tonus-ceiling": {
      name: "Tonus Ceiling System",
      description: "Ceiling acoustic assembly for rooms with overhead noise",
      category: "Ceiling Acoustics"
    },
    "idealdom-floor": {
      name: "IdealDom Floor System",
      description: "Floor sound insulation for impact and structure-borne noise",
      category: "Floor Acoustics"
    },
    "idealdom-wall": {
      name: "IdealDom Wall System",
      description: "Complete wall insulation stack for apartments and offices",
      category: "Sound Insulation"
    },
    "idealdom-partition": {
      name: "IdealDom Partition",
      description: "Acoustic partition solution for offices and commercial rooms",
      category: "Interior Finishing"
    },
    "membrane-pro": {
      name: "Acoustic Membrane Pro",
      description: "High-density sound membrane for multi-layer assemblies",
      category: "Accessories"
    },
    "mineral-wool": {
      name: "Acoustic Mineral Wool",
      description: "Dense mineral wool for professional sound insulation layers",
      category: "Construction Systems"
    },
    "drywall-acoustic": {
      name: "Acoustic Drywall Board",
      description: "Specialized board for quieter wall and ceiling builds",
      category: "Construction Systems"
    },
    "sealant-kit": {
      name: "Acoustic Sealant Kit",
      description: "Sealing kit for junctions, sockets, and frame edges",
      category: "Accessories"
    },
    "frame-profile": {
      name: "Metal Frame Profiles",
      description: "Profiles for framed acoustic and partition assemblies",
      category: "Construction Systems"
    },
    "design-finish-panel": {
      name: "Design Finish Panel",
      description: "Premium interior finish panels paired with acoustic stacks",
      category: "Design Solutions"
    },
    "commercial-system": {
      name: "Commercial Acoustic Pack",
      description: "Turnkey acoustic package for offices and retail interiors",
      category: "Commercial Spaces"
    },
    "residential-kit": {
      name: "Residential Quiet Kit",
      description: "Ready kit for apartment bedrooms and living rooms",
      category: "Residential"
    },
    "office-liner": {
      name: "Office Acoustic Liner",
      description: "Absorptive liner panels for open-plan and meeting rooms",
      category: "Commercial Spaces"
    },
    "home-envelope": {
      name: "Home Envelope System",
      description: "Whole-home insulation approach for private houses",
      category: "Residential"
    },
    "coming-soon-pack": {
      name: "IdealDom · Coming Soon",
      description: "Full IdealDom range arriving soon across Armenia",
      category: "Coming Soon"
    }
  },
  categories: {
    livingRoom: "Sound Insulation",
    bedroom: "Construction",
    dining: "Interior Systems",
    office: "Design Solutions",
    decor: "Accessories",
    sale: "Coming Soon"
  },
  sub: {
    sofas: "Wall Systems",
    coffeeTables: "Floor Systems",
    accentChairs: "Ceiling Systems",
    tvUnits: "Membranes",
    beds: "Profiles",
    nightstands: "Boards",
    dressers: "Sealants",
    wardrobes: "Kits",
    diningTables: "Partitions",
    diningChairs: "Finishing Panels",
    sideboards: "Commercial",
    barStools: "Accessories",
    desks: "Apartments",
    officeChairs: "Offices",
    bookshelves: "Homes",
    storage: "Showrooms",
    lighting: "IdealDom",
    rugs: "Tonus",
    mirrors: "Layers",
    vases: "Consultation",
    clearance: "IdealDom",
    seasonalOffers: "Tonus",
    bundles: "Bundles"
  },
  filterCat: {
    modernLiving: "Sound Insulation",
    cozyCorner: "Construction Systems",
    urbanNest: "Interior Finishing",
    naturalForm: "Floor Acoustics",
    nordicHome: "Wall Acoustics",
    pureComfort: "Ceiling Acoustics",
    timelessSpace: "Commercial Spaces",
    elegantRoom: "Residential",
    warmHabitat: "Design Solutions",
    luxeInterior: "Coming Soon",
    softShelter: "Accessories"
  },
  badge: {
    sale: "Sale",
    new: "New",
    hot: "Hot"
  },
  colors: {
    white: "White",
    green: "Grey",
    black: "Black",
    beige: "Beige",
    oak: "Natural"
  }
} as const satisfies Messages;

const ru = {
  nav: {
    home: "Главная",
    products: "Каталог",
    about: "О нас",
    contact: "Контакты"
  },
  common: {
    search: "Поиск",
    account: "Аккаунт",
    wishlist: "Избранное",
    menu: "Меню",
    close: "Закрыть",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    shopCollection: "Смотреть ассортимент",
    shopAll: "Смотреть всё",
    viewAll: "Смотреть все",
    learnMore: "Подробнее",
    discoverMore: "Узнать больше",
    exploreAll: "Смотреть всё",
    exploreNow: "Смотреть сейчас",
    continueShopping: "Продолжить просмотр",
    backToStore: "Вернуться в магазин",
    clearAll: "Очистить всё",
    reset: "Сбросить",
    previous: "Назад",
    next: "Далее",
    loading: "Загрузка…",
    of: "из",
    showing: "Показано",
    items: "товаров",
    item: "товар",
    collections: "Коллекции",
    catalog: "Каталог",
    categories: "Категории",
    browse: "Смотреть",
    from: "От",
    to: "До",
    brand: "Бренд",
    category: "Категория",
    tags: "Теги",
    color: "Цвет",
    price: "Цена",
    stock: "Наличие",
    action: "Действие",
    product: "Товар",
    inStock: "В наличии",
    addToCart: "В корзину",
    noReviews: "Нет отзывов",
    taxIncluded: "С учётом налогов",
    savePercent: "Скидка {n}%",
    homeCrumb: "Главная"
  },
  header: {
    language: "Язык"
  },
  footer: {
    blurb: "DizArt — решения для строительства и дизайна в одном месте. Современная звукоизоляция и строительные системы по всей Армении.",
    location: "Ереван, Армения",
    aboutUs: "О нас",
    ourStory: "Наша история",
    philosophy: "Почему DizArt",
    contact: "Контакты",
    newsletter: "Рассылка",
    emailPlaceholder: "Ваш e-mail",
    join: "Подписаться",
    rights: "© 2026 DizArt. Все права защищены.",
    languages: "AM · EN · RU",
    follow: "Мы в соцсетях"
  },
  search: {
    placeholder: "Поиск товаров…",
    results: "Результаты поиска",
    popular: "Популярные запросы",
    noMatches: "Ничего не найдено по запросу «{query}»",
    viewAllProducts: "Смотреть все товары"
  },
  sidebar: {
    catalog: "Каталог",
    categories: "Категории",
    itemsCount: "{n} товаров",
    browse: "Смотреть",
    viewAll: "Смотреть все",
    shopAll: "Смотреть всё",
    browseCategories: "Категории"
  },
  home: {
    qualityTitle: "Проверенные технологии. Профессиональный подход.",
    qualityBody: "Звукоизоляция и строительные системы для квартир, домов, офисов и коммерческих помещений — для долговечного комфорта.",
    responsibleEyebrow: "Доставка по стране",
    responsibleTitle: "Розница, опт и доставка по всей Армении.",
    responsibleBody: "Товары доступны локально в Армении с доставкой по всей стране — IdealDom, Tonus и профессиональные строительные системы.",
    philosophyTitle: "Почему DizArt",
    philosophyP1: "Комфорт начинается не только с красивого дизайна, но и с правильной звукоизоляции и качественных строительных решений.",
    philosophyP2: "Мы предлагаем современные системы для домов, квартир, офисов и коммерческих интерьеров — с профессиональным подходом и верной технологией.",
    craftedTitle: "Решения под ваше пространство",
    craftedBody: "От многослойных акустических систем до финишной отделки — помогаем выбрать верное решение для каждой комнаты.",
    limitedOffers: "Скоро",
    flashSale: "Новинки",
    allItems: "Все товары",
    sales: "Предложения",
    featured: "Рекомендуем",
    testimonialQuote: "DizArt помог спланировать тихие интерьеры с понятными слоями системы. Профессиональная консультация и материалы для Армении.",
    testimonialAuthor: "Клиент проекта — Ереван"
  },
  hero: {
    slide1Eyebrow: "DizArt.am",
    slide1Title: "Решения для строительства\nи дизайна в одном месте",
    slide1Cta: "Смотреть ассортимент",
    slide1Sub: "Современная звукоизоляция и строительные системы в Армении (IdealDom, Tonus).",
    slide2Eyebrow: "Скоро в Армении",
    slide2Title: "Системы звукоизоляции\nIdealDom · Tonus",
    slide2Cta: "Связаться",
    slide2Sub: "Розница и опт · Доставка по всей Армении"
  },
  news: {
    eyebrow: "Новинка",
    title: "Скоро в Армении",
    lead: "Комфорт вашего дома или квартиры начинается не только с красивого дизайна, но и с правильной звукоизоляции и качественных строительных решений.",
    body: "Скоро наш ассортимент пополнится современными решениями системы «IdealDom» для звукоизоляции и внутренней отделки.",
    tonus: "Звукоизоляционные системы Tonus",
    modern: "Современные строительные решения",
    pro: "Профессиональный подход и верная технология",
    local: "Товары — на месте в Армении",
    deliveryNote: "Мы планируем предлагать товары не только в нашем магазине, но и с доставкой по всей территории Армении.",
    soonShop: "Скоро в нашем магазине",
    retailWholesale: "Розница и опт",
    deliveryAll: "Доставка по всей РА",
    follow: "Следите за нашей страницей — скоро представим ассортимент, цены и детали применения.",
    cta: "Узнать о наличии"
  },
  collections: {
    title: "Коллекции",
    sofaLiving: "Системы Tonus",
    chicResidence: "IdealDom",
    dreamyDecor: "Акустические слои",
    fineFurnish: "Дизайн-отделка"
  },
  about: {
    heroTitle: "О нас",
    storyTitle: "Наша история",
    storySubtitle: "Решения для строительства и дизайна в одном месте.",
    storyBody: "DizArt привозит в Армению современные системы звукоизоляции и строительства. Мы фокусируемся на проверенных технологиях для квартир, домов, офисов и коммерческих пространств — розница, опт и доставка по стране.",
    teamTitle: "Команда DizArt",
    teamBody: "Сфокусированная команда специалистов по строительству и дизайну, которая внедряет акустические и строительные технологии профессионально и практично.",
    commitment: "Мы стремимся приносить качественные системы и понятные рекомендации в каждый проект в Армении.",
    policyShippingTitle: "Доставка по Армении",
    policyShippingBody: "Розница и опт по всей стране",
    policySecurityTitle: "Безопасная оплата",
    policySecurityBody: "Гибкие способы оплаты",
    policyReturnsTitle: "Экспертная консультация",
    policyReturnsBody: "Профессиональный подбор систем",
    policySupportTitle: "Локальное наличие",
    policySupportBody: "Товары на складе в Армении",
    memberCeo: "Генеральный директор",
    memberDesigner: "Специалист"
  },
  contact: {
    title: "Контакты",
    addressLabel: "Адрес",
    addressLine: "Ереван, Армения",
    address: "Приходите в наш шоурум в рабочие часы или оставьте сообщение — мы ответим как можно скорее.",
    phoneLabel: "Телефон",
    emailLabel: "Эл. почта",
    hoursLabel: "Часы работы",
    hoursWeekday: "Понедельник–пятница 09:30 - 17:30",
    hoursWeekend: "Суббота и воскресенье 10:00 - 15:00",
    formTitle: "Заявка на консультацию",
    namePlaceholder: "Имя",
    phonePlaceholder: "Номер телефона",
    emailPlaceholder: "Эл. почта",
    serviceLabel: "Тип услуги / товара",
    serviceSound: "Звукоизоляция",
    serviceBuild: "Строительные материалы",
    serviceOther: "Другое",
    messagePlaceholder: "Сообщение",
    submit: "Отправить заявку",
    thanks: "Спасибо — мы скоро свяжемся с вами.",
    openMap: "Открыть карту"
  },
  login: {
    memberAccess: "Доступ участника",
    pitch: "Войдите, чтобы сохранять товары, следить за коллекциями и держать список проекта в одном месте.",
    welcomeBack: "С возвращением",
    joinTitle: "Присоединиться к DizArt",
    signIn: "Войти",
    createAccount: "Создать аккаунт",
    signInCopy: "Введите данные, чтобы продолжить.",
    registerCopy: "Создайте аккаунт, чтобы сохранять избранное и смотреть каталог.",
    register: "Регистрация",
    fullName: "Полное имя",
    yourName: "Ваше имя",
    email: "Эл. почта",
    emailPlaceholder: "you@example.com",
    password: "Пароль",
    forgot: "Забыли пароль?",
    remember: "Запомнить меня",
    terms: "Продолжая, вы соглашаетесь с условиями и политикой конфиденциальности.",
    pleaseWait: "Подождите…",
    successSignIn: "Вход выполнен успешно.",
    successRegister: "Аккаунт создан успешно.",
    preferBrowse: "Сначала хотите посмотреть каталог?",
    viewCollection: "Смотреть каталог"
  },
  wishlist: {
    title: "Избранное",
    savedPieces: "Сохранённые товары",
    itemCount: "{n} товар",
    itemsCount: "{n} товаров",
    clear: "Очистить избранное",
    emptyTitle: "Список избранного пуст",
    emptyBody: "Сохраняйте нужные товары и находите их здесь в любое время.",
    continueShopping: "Продолжить просмотр",
    product: "Товар",
    price: "Цена",
    stock: "Наличие",
    action: "Действие",
    inStock: "В наличии",
    addToCart: "В корзину",
    alsoLike: "Вам также может понравиться"
  },
  products: {
    heroTitle: "Каталог",
    refine: "Уточнить",
    filters: "Фильтры",
    browseBy: "Смотреть по",
    category: "Категория",
    budget: "Бюджет",
    priceRange: "Диапазон цен",
    from: "От",
    to: "До",
    filter: "Фильтр",
    showing: "Показано {shown} из {total}",
    showProducts: "Показать {n} товаров",
    noFound: "Товары не найдены",
    noFoundHint: "Попробуйте изменить фильтры или сбросить их.",
    clearFilters: "Сбросить фильтры",
    sortFeatured: "Рекомендуемые",
    sortBest: "Бестселлеры",
    sortAZ: "По алфавиту, А–Я",
    sortZA: "По алфавиту, Я–А",
    sortPriceAsc: "Цена, по возрастанию",
    sortPriceDesc: "Цена, по убыванию",
    "tonus-wall-panel": {
      name: "Панель Tonus для стен",
      description: "Современная стеновая акустическая система для жилых помещений",
      category: "Акустика стен"
    },
    "tonus-ceiling": {
      name: "Потолочная система Tonus",
      description: "Потолочная акустическая сборка от шума сверху",
      category: "Акустика потолка"
    },
    "idealdom-floor": {
      name: "Система IdealDom для пола",
      description: "Звукоизоляция пола от ударного и структурного шума",
      category: "Акустика пола"
    },
    "idealdom-wall": {
      name: "Стеновая система IdealDom",
      description: "Полный стеновой пакет для квартир и офисов",
      category: "Звукоизоляция"
    },
    "idealdom-partition": {
      name: "Перегородка IdealDom",
      description: "Акустическая перегородка для офисов и коммерции",
      category: "Внутренняя отделка"
    },
    "membrane-pro": {
      name: "Акустическая мембрана Pro",
      description: "Плотная звукоизоляционная мембрана для многослойных систем",
      category: "Аксессуары"
    },
    "mineral-wool": {
      name: "Акустическая минвата",
      description: "Плотная минвата для профессиональных слоёв звукоизоляции",
      category: "Строительные системы"
    },
    "drywall-acoustic": {
      name: "Акустический гипсокартон",
      description: "Специализированный лист для тихих стен и потолков",
      category: "Строительные системы"
    },
    "sealant-kit": {
      name: "Набор акустического герметика",
      description: "Герметизация узлов, розеток и краёв каркаса",
      category: "Аксессуары"
    },
    "frame-profile": {
      name: "Металлические профили",
      description: "Профили для каркасных акустических и перегородочных систем",
      category: "Строительные системы"
    },
    "design-finish-panel": {
      name: "Дизайн-панель отделки",
      description: "Премиальные панели отделки в паре с акустическими слоями",
      category: "Дизайн-решения"
    },
    "commercial-system": {
      name: "Коммерческий акустический пакет",
      description: "Готовый акустический пакет для офисов и ритейла",
      category: "Коммерческие пространства"
    },
    "residential-kit": {
      name: "Жилой комплект «Тишина»",
      description: "Готовый комплект для спален и гостиных",
      category: "Жилые пространства"
    },
    "office-liner": {
      name: "Офисный акустический лайнер",
      description: "Поглощающие панели для открытых офисов и переговорных",
      category: "Коммерческие пространства"
    },
    "home-envelope": {
      name: "Система изоляции дома",
      description: "Комплексная изоляция для частных домов",
      category: "Жилые пространства"
    },
    "coming-soon-pack": {
      name: "IdealDom · Скоро",
      description: "Полный ассортимент IdealDom скоро в Армении",
      category: "Скоро в продаже"
    }
  },
  categories: {
    livingRoom: "Звукоизоляция",
    bedroom: "Строительство",
    dining: "Интерьерные системы",
    office: "Дизайн-решения",
    decor: "Аксессуары",
    sale: "Скоро"
  },
  sub: {
    sofas: "Стеновые системы",
    coffeeTables: "Системы пола",
    accentChairs: "Системы потолка",
    tvUnits: "Мембраны",
    beds: "Профили",
    nightstands: "Листы",
    dressers: "Герметики",
    wardrobes: "Комплекты",
    diningTables: "Перегородки",
    diningChairs: "Финишные панели",
    sideboards: "Коммерция",
    barStools: "Аксессуары",
    desks: "Квартиры",
    officeChairs: "Офисы",
    bookshelves: "Дома",
    storage: "Шоурумы",
    lighting: "IdealDom",
    rugs: "Tonus",
    mirrors: "Слои",
    vases: "Консультация",
    clearance: "IdealDom",
    seasonalOffers: "Tonus",
    bundles: "Наборы"
  },
  filterCat: {
    modernLiving: "Звукоизоляция",
    cozyCorner: "Строительные системы",
    urbanNest: "Внутренняя отделка",
    naturalForm: "Акустика пола",
    nordicHome: "Акустика стен",
    pureComfort: "Акустика потолка",
    timelessSpace: "Коммерческие пространства",
    elegantRoom: "Жилые пространства",
    warmHabitat: "Дизайн-решения",
    luxeInterior: "Скоро в продаже",
    softShelter: "Аксессуары"
  },
  badge: {
    sale: "Скидка",
    new: "Новинка",
    hot: "Хит"
  },
  colors: {
    white: "Белый",
    green: "Серый",
    black: "Чёрный",
    beige: "Бежевый",
    oak: "Натуральный"
  }
} as const satisfies Messages;

const hy = {
  nav: {
    home: "Գլխավոր",
    products: "Տեսականի",
    about: "Մեր մասին",
    contact: "Կապ"
  },
  common: {
    search: "Որոնում",
    account: "Հաշիվ",
    wishlist: "Նախընտրածներ",
    menu: "Մենյու",
    close: "Փակել",
    openMenu: "Բացել մենյուն",
    closeMenu: "Փակել մենյուն",
    shopCollection: "Տեսնել տեսականին",
    shopAll: "Տեսնել ամենը",
    viewAll: "Տեսնել բոլորը",
    learnMore: "Իմանալ ավելին",
    discoverMore: "Բացահայտել ավելին",
    exploreAll: "Տեսնել ամենը",
    exploreNow: "Դիտել հիմա",
    continueShopping: "Շարունակել դիտումը",
    backToStore: "Վերադառնալ դեպի խանութ",
    clearAll: "Մաքրել ամենը",
    reset: "Զրոյացնել",
    previous: "Նախորդ",
    next: "Հաջորդ",
    loading: "Բեռնվում է…",
    of: "ից",
    showing: "Ցուցադրված է",
    items: "ապրանքներ",
    item: "ապրանք",
    collections: "Հավաքածուներ",
    catalog: "Կատալոգ",
    categories: "Կատեգորիաներ",
    browse: "Դիտել",
    from: "Սկսած",
    to: "Մինչև",
    brand: "Բրենդ",
    category: "Կատեգորիա",
    tags: "Պիտակներ",
    color: "Գույն",
    price: "Գին",
    stock: "Առկայություն",
    action: "Գործողություն",
    product: "Ապրանք",
    inStock: "Առկա է",
    addToCart: "Ավելացնել զամբյուղին",
    noReviews: "Կարծիքներ չկան",
    taxIncluded: "Հարկերով",
    savePercent: "Խնայել {n}%",
    homeCrumb: "Գլխավոր"
  },
  header: {
    language: "Լեզու"
  },
  footer: {
    blurb: "DizArt — շինարարության և դիզայնի լուծումներ մեկ վայրում։ Ժամանակակից ձայնամեկուսացում և շինարարական համակարգեր ամբողջ Հայաստանում։",
    location: "Երևան, Հայաստան",
    aboutUs: "Մեր մասին",
    ourStory: "Մեր պատմությունը",
    philosophy: "Ինչո՞ւ DizArt",
    contact: "Կապ",
    newsletter: "Բաժանորդագրություն",
    emailPlaceholder: "Ձեր էլ. փոստը",
    join: "Բաժանորդագրվել",
    rights: "© 2026 DizArt. Բոլոր իրավունքները պաշտպանված են։",
    languages: "AM · EN · RU",
    follow: "Հետևեք մեզ"
  },
  search: {
    placeholder: "Որոնել ապրանքներ…",
    results: "Որոնման արդյունքներ",
    popular: "Հանրաճանաչ որոնումներ",
    noMatches: "«{query}» հարցման համար արդյունքներ չկան",
    viewAllProducts: "Տեսնել բոլոր ապրանքները"
  },
  sidebar: {
    catalog: "Կատալոգ",
    categories: "Կատեգորիաներ",
    itemsCount: "{n} ապրանք",
    browse: "Դիտել",
    viewAll: "Տեսնել բոլորը",
    shopAll: "Տեսնել ամենը",
    browseCategories: "Դիտել կատեգորիաները"
  },
  home: {
    qualityTitle: "Ստուգված տեխնոլոգիաներ։ Պրոֆեսիոնալ մոտեցում։",
    qualityBody: "Ձայնամեկուսացում և շինարարական համակարգեր բնակարանների, տների, գրասենյակների և կոմերցիոն տարածքների համար՝ երկարատև հարմարավետության համար։",
    responsibleEyebrow: "Առաքում ամբողջ ՀՀ-ում",
    responsibleTitle: "Մանրածախ, մեծածախ և առաքում ամբողջ Հայաստանում։",
    responsibleBody: "Ապրանքները առկա են տեղում Հայաստանում՝ առաքմամբ ամբողջ երկրում։ IdealDom, Tonus և պրոֆեսիոնալ շինարարական համակարգեր։",
    philosophyTitle: "Ինչո՞ւ DizArt",
    philosophyP1: "Ձեր տան կամ բնակարանի հարմարավետությունը սկսվում է ոչ միայն գեղեցիկ դիզայնից, այլև ճիշտ ձայնամեկուսացումից և որակյալ շինարարական լուծումներից։",
    philosophyP2: "Մենք առաջարկում ենք ժամանակակից համակարգեր տների, բնակարանների, գրասենյակների և կոմերցիոն ինտերիերների համար՝ պրոֆեսիոնալ մոտեցմամբ և ճիշտ տեխնոլոգիայով։",
    craftedTitle: "Լուծումներ ձեր տարածքի համար",
    craftedBody: "Շերտավոր ակուստիկ համակարգերից մինչև հարդարման լուծումներ՝ օգնում ենք ընտրել ճիշտ համակարգը յուրաքանչյուր սենյակի համար։",
    limitedOffers: "Շուտով",
    flashSale: "Նորույթներ",
    allItems: "Բոլոր ապրանքները",
    sales: "Առաջարկներ",
    featured: "Ընտրված",
    testimonialQuote: "DizArt-ը օգնեց պլանավորել հանգիստ ինտերիերներ՝ հստակ համակարգային շերտերով։ Պրոֆեսիոնալ խորհրդատվություն և նյութեր Հայաստանի համար։",
    testimonialAuthor: "Նախագծի հաճախորդ — Երևան"
  },
  hero: {
    slide1Eyebrow: "DizArt.am",
    slide1Title: "Շինարարության և դիզայնի\nլուծումներ մեկ վայրում",
    slide1Cta: "Տեսնել տեսականին",
    slide1Sub: "Ժամանակակից ձայնամեկուսացում և շինարարական համակարգեր Հայաստանում («ИдеалДом», Tonus)։",
    slide2Eyebrow: "Շուտով Հայաստանում",
    slide2Title: "Ձայնամեկուսիչ համակարգեր\nIdealDom · Tonus",
    slide2Cta: "Կապ հաստատել",
    slide2Sub: "Մանրածախ և մեծածախ · Առաքում ամբողջ ՀՀ տարածքում"
  },
  news: {
    eyebrow: "Նորույթ",
    title: "Շուտով Հայաստանում",
    lead: "Ձեր տան կամ բնակարանի հարմարավետությունը սկսվում է ոչ միայն գեղեցիկ դիզայնից, այլև ճիշտ ձայնամեկուսացումից և որակյալ շինարարական լուծումներից։",
    body: "Շուտով մեր տեսականին կհամալրվի «ИдеалДом» համակարգի ժամանակակից լուծումներով՝ ձայնամեկուսացման և ներքին հարդարման աշխատանքների համար։",
    tonus: "Tonus ձայնամեկուսիչ համակարգեր",
    modern: "Ժամանակակից շինարարական լուծումներ",
    pro: "Պրոֆեսիոնալ մոտեցում և ճիշտ տեխնոլոգիա",
    local: "Ապրանքները՝ տեղում Հայաստանում",
    deliveryNote: "Մենք նախատեսում ենք առաջարկել ապրանքները ոչ միայն մեր խանութում, այլև առաքմամբ ամբողջ Հայաստանի տարածքում։",
    soonShop: "Շուտով՝ մեր խանութում",
    retailWholesale: "Մանրածախ և մեծածախ վաճառք",
    deliveryAll: "Առաքում ամբողջ ՀՀ տարածքում",
    follow: "Հետևեք մեր էջին․ շուտով կներկայացնենք տեսականին, գները և կիրառման մանրամասները։",
    cta: "Հարցնել առկայության մասին"
  },
  collections: {
    title: "Հավաքածուներ",
    sofaLiving: "Tonus համակարգեր",
    chicResidence: "IdealDom",
    dreamyDecor: "Ակուստիկ շերտեր",
    fineFurnish: "Դիզայնային հարդարում"
  },
  about: {
    heroTitle: "Մեր մասին",
    storyTitle: "Մեր պատմությունը",
    storySubtitle: "Շինարարության և դիզայնի լուծումներ մեկ վայրում։",
    storyBody: "DizArt-ը Հայաստան է բերում ժամանակակից ձայնամեկուսացման և շինարարական համակարգեր։ Մենք կենտրոնանում ենք ստուգված տեխնոլոգիաների վրա՝ բնակարանների, տների, գրասենյակների և կոմերցիոն տարածքների համար՝ մանրածախ, մեծածախ և առաքում ամբողջ երկրում։",
    teamTitle: "DizArt թիմը",
    teamBody: "Կենտրոնացված թիմ շինարարության և դիզայնի մասնագետներից, որոնք ներմուծում են ակուստիկ և շինարարական տեխնոլոգիաներ պրոֆեսիոնալ և գործնական մոտեցմամբ։",
    commitment: "Մենք պարտավորվում ենք որակյալ համակարգեր և հստակ ուղեցույց բերել Հայաստանի յուրաքանչյուր նախագծի։",
    policyShippingTitle: "Առաքում ամբողջ ՀՀ-ում",
    policyShippingBody: "Մանրածախ և մեծածախ ամբողջ երկրում",
    policySecurityTitle: "Անվտանգ վճարումներ",
    policySecurityBody: "Ճկուն վճարման տարբերակներ",
    policyReturnsTitle: "Փորձագիտական խորհրդատվություն",
    policyReturnsBody: "Պրոֆեսիոնալ համակարգի ընտրություն",
    policySupportTitle: "Տեղական առկայություն",
    policySupportBody: "Ապրանքները Հայաստանում",
    memberCeo: "Տնօրեն",
    memberDesigner: "Մասնագետ"
  },
  contact: {
    title: "Կապ",
    addressLabel: "Հասցե",
    addressLine: "Երևան, Հայաստան",
    address: "Այցելեք մեր շոուրումը աշխատանքային ժամերին կամ թողեք հաղորդագրություն․ մենք կպատասխանենք որքան հնարավոր է շուտ։",
    phoneLabel: "Հեռախոս",
    emailLabel: "Էլ. փոստ",
    hoursLabel: "Աշխատանքային ժամեր",
    hoursWeekday: "Երկուշաբթի–ուրբաթ 09:30 - 17:30",
    hoursWeekend: "Շաբաթ և կիրակի 10:00 - 15:00",
    formTitle: "Խորհրդատվության հայտ",
    namePlaceholder: "Անուն",
    phonePlaceholder: "Հեռախոսահամար",
    emailPlaceholder: "Էլ. փոստ",
    serviceLabel: "Ծառայության/Ապրանքի տեսակը",
    serviceSound: "Ձայնամեկուսացում",
    serviceBuild: "Շինարարական նյութեր",
    serviceOther: "Այլ",
    messagePlaceholder: "Հաղորդագրություն",
    submit: "Ուղարկել հայտը",
    thanks: "Շնորհակալություն — շուտով կկապվենք ձեզ հետ։",
    openMap: "Բացել քարտեզը"
  },
  login: {
    memberAccess: "Անդամի մուտք",
    pitch: "Մուտք գործեք՝ ապրանքներ պահելու, հավաքածուներին հետևելու և նախագծի ցանկը մեկ տեղում պահելու համար։",
    welcomeBack: "Բարի վերադարձ",
    joinTitle: "Միացեք DizArt-ին",
    signIn: "Մուտք",
    createAccount: "Ստեղծել հաշիվ",
    signInCopy: "Մուտքագրեք տվյալները շարունակելու համար։",
    registerCopy: "Ստեղծեք հաշիվ՝ նախընտրածները պահելու և կատալոգը դիտելու համար։",
    register: "Գրանցում",
    fullName: "Ամբողջական անուն",
    yourName: "Ձեր անունը",
    email: "Էլ. փոստ",
    emailPlaceholder: "you@example.com",
    password: "Գաղտնաբառ",
    forgot: "Մոռացե՞լ եք գաղտնաբառը",
    remember: "Հիշել ինձ",
    terms: "Շարունակելով՝ համաձայնում եք պայմաններին և գաղտնիության քաղաքականությանը։",
    pleaseWait: "Խնդրում ենք սպասել…",
    successSignIn: "Մուտքը հաջողվեց։",
    successRegister: "Հաշիվը ստեղծվեց։",
    preferBrowse: "Նախ ուզո՞ւմ եք դիտել կատալոգը",
    viewCollection: "Դիտել կատալոգը"
  },
  wishlist: {
    title: "Նախընտրածներ",
    savedPieces: "Պահված ապրանքներ",
    itemCount: "{n} ապրանք",
    itemsCount: "{n} ապրանք",
    clear: "Մաքրել նախընտրածները",
    emptyTitle: "Նախընտրածների ցանկը դատարկ է",
    emptyBody: "Պահեք անհրաժեշտ ապրանքները և գտեք դրանք այստեղ ցանկացած պահի։",
    continueShopping: "Շարունակել դիտումը",
    product: "Ապրանք",
    price: "Գին",
    stock: "Առկայություն",
    action: "Գործողություն",
    inStock: "Առկա է",
    addToCart: "Ավելացնել զամբյուղին",
    alsoLike: "Ձեզ կարող է դուր գալ նաև"
  },
  products: {
    heroTitle: "Տեսականի",
    refine: "Զտել",
    filters: "Ֆիլտրեր",
    browseBy: "Դիտել ըստ",
    category: "Կատեգորիա",
    budget: "Բյուջե",
    priceRange: "Գնային միջակայք",
    from: "Սկսած",
    to: "Մինչև",
    filter: "Ֆիլտր",
    showing: "Ցուցադրված է {shown}՝ {total}-ից",
    showProducts: "Ցույց տալ {n} ապրանք",
    noFound: "Ապրանքներ չեն գտնվել",
    noFoundHint: "Փորձեք փոխել ֆիլտրերը կամ մաքրել դրանք։",
    clearFilters: "Մաքրել ֆիլտրերը",
    sortFeatured: "Ընտրված",
    sortBest: "Լավագույն վաճառք",
    sortAZ: "Այբբենական, Ա–Ֆ",
    sortZA: "Այբբենական, Ֆ–Ա",
    sortPriceAsc: "Գին՝ ցածրից բարձր",
    sortPriceDesc: "Գին՝ բարձրից ցածր",
    "tonus-wall-panel": {
      name: "Tonus պատի պանել",
      description: "Ժամանակակից պատի ձայնամեկուսիչ համակարգ բնակելի տարածքների համար",
      category: "Պատի ակուստիկա"
    },
    "tonus-ceiling": {
      name: "Tonus առաստաղի համակարգ",
      description: "Առաստաղի ակուստիկ համակարգ վերևից եկող աղմուկի դեմ",
      category: "Առաստաղի ակուստիկա"
    },
    "idealdom-floor": {
      name: "IdealDom հատակի համակարգ",
      description: "Հատակի ձայնամեկուսացում հարվածային և կառուցվածքային աղմուկից",
      category: "Հատակի ակուստիկա"
    },
    "idealdom-wall": {
      name: "IdealDom պատի համակարգ",
      description: "Ամբողջական պատի փաթեթ բնակարանների և գրասենյակների համար",
      category: "Ձայնամեկուսացում"
    },
    "idealdom-partition": {
      name: "IdealDom միջնորմ",
      description: "Ակուստիկ միջնորմ գրասենյակների և կոմերցիոն տարածքների համար",
      category: "Ներքին հարդարում"
    },
    "membrane-pro": {
      name: "Ակուստիկ մեմբրան Pro",
      description: "Բարձր խտության ձայնամեկուսիչ մեմբրան բազմաշերտ համակարգերի համար",
      category: "Աքսեսուարներ"
    },
    "mineral-wool": {
      name: "Ակուստիկ հանքային բամբակ",
      description: "Խիտ հանքային բամբակ պրոֆեսիոնալ ձայնամեկուսիչ շերտերի համար",
      category: "Շինարարական համակարգեր"
    },
    "drywall-acoustic": {
      name: "Ակուստիկ գիպսաստվարաթուղթ",
      description: "Հատուկ թիթեղ ավելի հանգիստ պատերի և առաստաղների համար",
      category: "Շինարարական համակարգեր"
    },
    "sealant-kit": {
      name: "Ակուստիկ հերմետիկի հավաքածու",
      description: "Հանգույցների, վարդակների և շրջանակի եզրերի հերմետիկացում",
      category: "Աքսեսուարներ"
    },
    "frame-profile": {
      name: "Մետաղական պրոֆիլներ",
      description: "Պրոֆիլներ շրջանակային ակուստիկ և միջնորմային համակարգերի համար",
      category: "Շինարարական համակարգեր"
    },
    "design-finish-panel": {
      name: "Դիզայնային հարդարման պանել",
      description: "Պրեմիում հարդարման պանելներ ակուստիկ շերտերի հետ",
      category: "Դիզայնի լուծումներ"
    },
    "commercial-system": {
      name: "Կոմերցիոն ակուստիկ փաթեթ",
      description: "Պատրաստի ակուստիկ փաթեթ գրասենյակների և խանութների համար",
      category: "Կոմերցիոն տարածքներ"
    },
    "residential-kit": {
      name: "Բնակելի «Լռություն» հավաքածու",
      description: "Պատրաստի հավաքածու ննջասենյակների և հյուրասենյակների համար",
      category: "Բնակելի"
    },
    "office-liner": {
      name: "Գրասենյակային ակուստիկ լայներ",
      description: "Կլանող պանելներ բաց գրասենյակների և հանդիպումների սենյակների համար",
      category: "Կոմերցիոն տարածքներ"
    },
    "home-envelope": {
      name: "Տան մեկուսացման համակարգ",
      description: "Ամբողջ տան մեկուսացման մոտեցում մասնավոր տների համար",
      category: "Բնակելի"
    },
    "coming-soon-pack": {
      name: "IdealDom · Շուտով",
      description: "IdealDom-ի ամբողջ տեսականին շուտով Հայաստանում",
      category: "Շուտով"
    }
  },
  categories: {
    livingRoom: "Ձայնամեկուսացում",
    bedroom: "Շինարարություն",
    dining: "Ինտերիերի համակարգեր",
    office: "Դիզայնի լուծումներ",
    decor: "Աքսեսուարներ",
    sale: "Շուտով"
  },
  sub: {
    sofas: "Պատի համակարգեր",
    coffeeTables: "Հատակի համակարգեր",
    accentChairs: "Առաստաղի համակարգեր",
    tvUnits: "Մեմբրաններ",
    beds: "Պրոֆիլներ",
    nightstands: "Թիթեղներ",
    dressers: "Հերմետիկներ",
    wardrobes: "Հավաքածուներ",
    diningTables: "Միջնորմեր",
    diningChairs: "Հարդարման պանելներ",
    sideboards: "Կոմերցիոն",
    barStools: "Աքսեսուարներ",
    desks: "Բնակարաններ",
    officeChairs: "Գրասենյակներ",
    bookshelves: "Տներ",
    storage: "Շոուրումներ",
    lighting: "IdealDom",
    rugs: "Tonus",
    mirrors: "Շերտեր",
    vases: "Խորհրդատվություն",
    clearance: "IdealDom",
    seasonalOffers: "Tonus",
    bundles: "Փաթեթներ"
  },
  filterCat: {
    modernLiving: "Ձայնամեկուսացում",
    cozyCorner: "Շինարարական համակարգեր",
    urbanNest: "Ներքին հարդարում",
    naturalForm: "Հատակի ակուստիկա",
    nordicHome: "Պատի ակուստիկա",
    pureComfort: "Առաստաղի ակուստիկա",
    timelessSpace: "Կոմերցիոն տարածքներ",
    elegantRoom: "Բնակելի",
    warmHabitat: "Դիզայնի լուծումներ",
    luxeInterior: "Շուտով",
    softShelter: "Աքսեսուարներ"
  },
  badge: {
    sale: "Զեղչ",
    new: "Նոր",
    hot: "Հիթ"
  },
  colors: {
    white: "Սպիտակ",
    green: "Մոխրագույն",
    black: "Սև",
    beige: "Բեժ",
    oak: "Բնական"
  }
} as const satisfies Messages;

export const dictionaries = { en, ru, hy } as const satisfies Record<
  "en" | "ru" | "hy",
  Messages
>;
