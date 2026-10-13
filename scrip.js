/* =========================================================
   花好月圆 · 中秋佳节
========================================================= */

let currentLanguage = "zh";


/* 故宫宝贝团圆夜封面 */

const palaceCover =
  "https://n.sinaimg.cn/sinakd20251230s/600/w1920h1080/20251230/380a-bc203eaaed5827ee1d3fbfeba5985b77.jpg";


/* =========================================================
   多语言
========================================================= */

const translations = {

  zh: {
    navHome: "首页",
    navCountdown: "中秋倒数",
    navHistory: "中秋由来",
    navWhy: "为什么过中秋",
    navCustoms: "中秋做什么",
    navFood: "中秋美食",
    navVideos: "中秋影片",
    navBlessing: "中秋祝福",

    heroSmall: "MID-AUTUMN FESTIVAL",
    heroTitle: "花好月圆",
    heroSubtitle: "中秋佳节 · 共赏明月 · 共话团圆",
    heroDescription: "一轮明月，一份思念，一桌团圆饭，让我们一起认识这个温暖而美丽的传统节日。",
    heroButton: "查看中秋倒数",
    heroVideoButton: "观看中秋影片",

    countdownLabel: "中秋倒数",
    countdownTitle: "距离下一次中秋节",
    countdownText: "让我们一起等待下一轮明月，再一次和家人团聚。",
    days: "天",
    hours: "小时",
    minutes: "分钟",
    seconds: "秒",

    historyLabel: "中秋由来",
    historyTitle: "一轮明月，流传千年的节日",
    historyIntro: "中秋节的形成经历了漫长的发展，从观察月亮，到举行祭月、赏月活动，最后逐渐成为今天大家熟悉的传统节日。",
    history1Title: "古人观察月亮",
    history1Text: "古人长期观察月亮运行与季节变化，逐渐认识到月圆与时间的重要联系。",
    history2Title: "八月十五逐渐形成节日",
    history2Text: "随着祭月、赏月等活动发展，农历八月十五逐渐成为重要的节庆日子。",
    history3Title: "月圆与团圆联系在一起",
    history3Text: "圆月象征完整，也让人自然想到家人相聚，因此慢慢形成了团圆的节日意义。",
    history4Title: "传统一直传到今天",
    history4Text: "今天的中秋仍然保留赏月、吃月饼、团圆等文化习俗，并继续传给下一代。",
    historyQuote: "月亮会照亮夜空，也会把远方的家人牵挂在一起。",

    whyLabel: "为什么过中秋",
    whyTitle: "因为团圆，是中秋最重要的意义",
    whyIntro: "中秋不只是看月亮、吃月饼，更是一种把家人重新聚在一起的方式。",
    why1Title: "想念家人",
    why1Text: "不管走得多远，中秋总会让人想起家人。",
    why2Title: "感受团圆",
    why2Text: "一顿饭、一轮月亮，就能让一家人重新聚在一起。",
    why3Title: "传承文化",
    why3Text: "一代代人继续庆祝，让传统文化一直延续下去。",
    why4Title: "珍惜现在",
    why4Text: "能够和重要的人一起吃饭、聊天，本身就是最珍贵的幸福。",

    customsLabel: "中秋做什么",
    customsTitle: "从一顿饭，到一轮月",
    customsIntro: "从一顿团圆饭到一盏灯笼，这些习俗把“团圆”两个字过成了具体的一晚。",
    custom1Title: "赏月",
    custom1Text: "一起看月亮，享受安静而温暖的中秋夜。",
    custom2Title: "吃月饼",
    custom2Text: "一口月饼，一口团圆，把家的味道留在记忆里。",
    custom3Title: "团圆饭",
    custom3Text: "一家人围在一起吃饭，分享一天里的故事。",
    custom4Title: "提灯笼",
    custom4Text: "提着灯笼走一走，让夜晚多一份节日的温暖。",
    custom5Title: "赏花灯",
    custom5Text: "去看看热闹的花灯，感受传统节日的气氛。",
    custom6Title: "聊天",
    custom6Text: "和家人聊聊天，珍惜能够坐在一起的时间。",

    foodLabel: "中秋美食",
    foodTitle: "一口月饼，是一口家的味道",
    foodIntro: "不同地区有不同的月饼风味，但它们都把“团圆”藏进了味道里。",
    foodSideTitle: "不同的味道，\n都有同一个名字：\n团圆",
    foodSideText: "从传统广式月饼，到清新的冰皮月饼，\n再到一桌家常团圆饭，\n中秋总能让人记住家的味道。",
    foodTag1: "传统",
    food1Title: "广式月饼",
    food1Text: "皮薄馅丰富，莲蓉、蛋黄等口味经典。",
    foodTag2: "清新",
    food2Title: "冰皮月饼",
    food2Text: "颜色清新、口感柔软，很适合现代年轻人的中秋夜。",
    foodTag3: "搭配",
    food3Title: "月饼与茶",
    food3Text: "一块月饼配一杯茶，是很舒服的中秋味道。",
    foodTag4: "团圆",
    food4Title: "团圆家宴",
    food4Text: "一桌热腾腾的家常菜，让一家人一起好好吃一顿饭。",

    videosLabel: "中秋影片",
    videosTitle: "用影片认识不一样的中秋",
    videosIntro: "从月亮、历史、团圆、习俗到美食，一起看看中秋节背后的故事。",

    blessingLabel: "中秋祝福",
    blessingTitle: "把最好的祝福送给最重要的人",
    blessingIntro: "愿你所念的人都在身边，所盼的事都能实现。",
    newWish: "换一句祝福",
    copyWish: "复制祝福",

    footerTitle: "花好月圆 · 中秋佳节",
    footerText: "愿每一轮明月，都照亮回家的路。"
  },


  en: {
    navHome: "Home",
    navCountdown: "Countdown",
    navHistory: "Mid-Autumn Origin",
    navWhy: "Why Celebrate",
    navCustoms: "What We Do",
    navFood: "Mid-Autumn Food",
    navVideos: "Mid-Autumn Videos",
    navBlessing: "Mid-Autumn Wishes",

    heroSmall: "MID-AUTUMN FESTIVAL",
    heroTitle: "A Moonlit Reunion",
    heroSubtitle: "Mid-Autumn Festival · Moonlight · Family Reunion",
    heroDescription: "A bright moon, a feeling of home, and a dinner shared together.",
    heroButton: "View Countdown",
    heroVideoButton: "Watch Videos",

    countdownLabel: "COUNTDOWN",
    countdownTitle: "Until the Next Mid-Autumn Festival",
    countdownText: "Let us wait for the next full moon and another precious reunion.",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",

    historyLabel: "MID-AUTUMN ORIGIN",
    historyTitle: "A Festival Passed Down Through Generations",
    historyIntro: "The Mid-Autumn Festival developed through a long history of moon observation, moon worship and moon-viewing traditions.",
    history1Title: "Ancient Moon Observation",
    history1Text: "Ancient people carefully observed the moon and seasonal changes.",
    history2Title: "The 15th Day of the Eighth Month",
    history2Text: "Moon-related traditions gradually became connected with the eighth lunar month.",
    history3Title: "The Moon Became a Symbol of Reunion",
    history3Text: "The full moon came to symbolize completeness and family reunion.",
    history4Title: "The Tradition Continues Today",
    history4Text: "Mooncakes, moon-viewing and family reunions remain important parts of the festival.",
    historyQuote: "The moon connects people, even when they are far apart.",

    whyLabel: "WHY CELEBRATE",
    whyTitle: "Because Reunion Is the Heart of Mid-Autumn",
    whyIntro: "The festival is not only about the moon or mooncakes. It is about bringing people together.",
    why1Title: "Think of Family",
    why1Text: "No matter how far we go, Mid-Autumn reminds us of home.",
    why2Title: "Feel Together",
    why2Text: "A shared meal and a full moon can bring everyone closer.",
    why3Title: "Pass Down Culture",
    why3Text: "Each generation keeps the tradition alive.",
    why4Title: "Treasure the Present",
    why4Text: "Being able to eat and talk together is already a precious gift.",

    customsLabel: "WHAT WE DO",
    customsTitle: "From a Family Meal to a Full Moon",
    customsIntro: "These traditions turn the meaning of reunion into a special evening.",
    custom1Title: "Moon Viewing",
    custom1Text: "Enjoy the moon together on a peaceful festival night.",
    custom2Title: "Mooncakes",
    custom2Text: "A bite of mooncake carries the feeling of reunion.",
    custom3Title: "Family Dinner",
    custom3Text: "Sit together and share stories around the table.",
    custom4Title: "Lanterns",
    custom4Text: "Carry lanterns and enjoy the warm festive atmosphere.",
    custom5Title: "Lantern Displays",
    custom5Text: "Admire beautiful lanterns and traditional celebrations.",
    custom6Title: "Conversation",
    custom6Text: "Talk with family and treasure the time together.",

    foodLabel: "MID-AUTUMN FOOD",
    foodTitle: "A Mooncake, A Taste of Home",
    foodIntro: "Different regions have different mooncake flavors, but they all carry the meaning of reunion.",
    foodSideTitle: "Different flavors,\none beautiful meaning:\nReunion",
    foodSideText: "From traditional Cantonese mooncakes to modern snow-skin mooncakes,\nMid-Autumn always brings back the taste of home.",
    foodTag1: "Classic",
    food1Title: "Cantonese Mooncake",
    food1Text: "Thin crust with rich fillings such as lotus seed paste and salted egg yolk.",
    foodTag2: "Fresh",
    food2Title: "Snow-Skin Mooncake",
    food2Text: "Soft, colorful and especially popular among younger generations.",
    foodTag3: "Pairing",
    food3Title: "Mooncake & Tea",
    food3Text: "A mooncake with tea makes a relaxing Mid-Autumn evening.",
    foodTag4: "Reunion",
    food4Title: "Family Feast",
    food4Text: "A warm homemade dinner shared by the whole family.",

    videosLabel: "MID-AUTUMN VIDEOS",
    videosTitle: "Discover Mid-Autumn Through Videos",
    videosIntro: "Explore the moon, history, family reunion, traditions and food.",

    blessingLabel: "MID-AUTUMN WISHES",
    blessingTitle: "A Warm Wish for Someone Important",
    blessingIntro: "May the people you love be close and your hopes come true.",
    newWish: "Another Wish",
    copyWish: "Copy Wish",

    footerTitle: "A Moonlit Reunion",
    footerText: "May every full moon light your way home."
  },


  ms: {
    navHome: "Laman Utama",
    navCountdown: "Kiraan Masa",
    navHistory: "Asal Usul",
    navWhy: "Mengapa Diraikan",
    navCustoms: "Apa Yang Dilakukan",
    navFood: "Makanan Perayaan",
    navVideos: "Video Perayaan",
    navBlessing: "Ucapan Perayaan",

    heroSmall: "MID-AUTUMN FESTIVAL",
    heroTitle: "Bulan Purnama & Keluarga",
    heroSubtitle: "Perayaan Pertengahan Musim Luruh · Bulan · Keluarga",
    heroDescription: "Bulan yang terang, rasa rindu dan hidangan yang dinikmati bersama keluarga.",
    heroButton: "Lihat Kiraan Masa",
    heroVideoButton: "Tonton Video",

    countdownLabel: "KIRAAN MASA",
    countdownTitle: "Menuju Perayaan Pertengahan Musim Luruh",
    countdownText: "Menanti bulan purnama seterusnya dan masa berkumpul bersama keluarga.",
    days: "Hari",
    hours: "Jam",
    minutes: "Minit",
    seconds: "Saat",

    historyLabel: "ASAL USUL",
    historyTitle: "Perayaan yang Diwarisi Selama Berabad-abad",
    historyIntro: "Perayaan ini berkembang daripada pemerhatian bulan, penyembahan bulan dan tradisi menikmati bulan.",
    history1Title: "Memerhati Bulan",
    history1Text: "Masyarakat dahulu memerhatikan perubahan bulan dan musim.",
    history2Title: "Hari ke-15 Bulan Kelapan",
    history2Text: "Tradisi berkaitan bulan berkembang menjadi sambutan yang penting.",
    history3Title: "Bulan Sebagai Simbol Penyatuan",
    history3Text: "Bulan penuh melambangkan kesempurnaan dan pertemuan keluarga.",
    history4Title: "Tradisi Hingga Hari Ini",
    history4Text: "Kuih bulan, melihat bulan dan berkumpul bersama keluarga masih diamalkan.",
    historyQuote: "Bulan menyatukan hati walaupun kita berjauhan.",

    whyLabel: "MENGAPA DIRAIAKAN",
    whyTitle: "Kerana Penyatuan Keluarga Adalah Makna Utamanya",
    whyIntro: "Perayaan ini bukan hanya tentang bulan, tetapi tentang meluangkan masa bersama keluarga.",
    why1Title: "Mengingati Keluarga",
    why1Text: "Walau sejauh mana kita pergi, perayaan ini mengingatkan kita kepada keluarga.",
    why2Title: "Merasai Kebersamaan",
    why2Text: "Hidangan bersama dan bulan purnama mendekatkan hati.",
    why3Title: "Mewarisi Budaya",
    why3Text: "Setiap generasi meneruskan tradisi ini.",
    why4Title: "Menghargai Sekarang",
    why4Text: "Masa bersama keluarga adalah hadiah yang sangat berharga.",

    customsLabel: "APA YANG DILAKUKAN",
    customsTitle: "Daripada Hidangan Keluarga Hingga Bulan Purnama",
    customsIntro: "Tradisi ini menjadikan makna kebersamaan lebih dekat dengan kehidupan seharian.",
    custom1Title: "Melihat Bulan",
    custom1Text: "Menikmati bulan bersama pada malam perayaan.",
    custom2Title: "Kuih Bulan",
    custom2Text: "Setiap gigitan membawa rasa kebersamaan keluarga.",
    custom3Title: "Makan Bersama",
    custom3Text: "Duduk bersama dan berkongsi cerita di meja makan.",
    custom4Title: "Tanglung",
    custom4Text: "Membawa tanglung dan menikmati suasana perayaan.",
    custom5Title: "Pertunjukan Tanglung",
    custom5Text: "Melihat tanglung yang cantik dan suasana tradisional.",
    custom6Title: "Berbual",
    custom6Text: "Berbual bersama keluarga dan menghargai masa bersama.",

    foodLabel: "MAKANAN PERAYAAN",
    foodTitle: "Satu Kuih Bulan, Satu Rasa Rumah",
    foodIntro: "Setiap kawasan mempunyai rasa kuih bulan yang berbeza, tetapi semuanya membawa makna kebersamaan.",
    foodSideTitle: "Rasa yang berbeza,\nsatu makna:\nKebersamaan",
    foodSideText: "Daripada kuih bulan tradisional hingga versi moden,\nperayaan ini sentiasa mengingatkan kita kepada rasa rumah.",
    foodTag1: "Tradisional",
    food1Title: "Kuih Bulan Kantonis",
    food1Text: "Kulit nipis dengan inti seperti pes biji teratai dan kuning telur masin.",
    foodTag2: "Moden",
    food2Title: "Kuih Bulan Kulit Salji",
    food2Text: "Lembut, berwarna-warni dan digemari generasi muda.",
    foodTag3: "Padanan",
    food3Title: "Kuih Bulan & Teh",
    food3Text: "Kuih bulan bersama teh memberikan suasana perayaan yang santai.",
    foodTag4: "Keluarga",
    food4Title: "Jamuan Keluarga",
    food4Text: "Hidangan rumah yang hangat untuk dinikmati bersama keluarga.",

    videosLabel: "VIDEO PERAYAAN",
    videosTitle: "Kenali Perayaan Melalui Video",
    videosIntro: "Lihat kisah tentang bulan, sejarah, keluarga, tradisi dan makanan.",

    blessingLabel: "UCAPAN PERAYAAN",
    blessingTitle: "Ucapan Indah untuk Orang Tersayang",
    blessingIntro: "Semoga orang yang anda sayangi sentiasa dekat dan impian menjadi kenyataan.",
    newWish: "Ucapan Lain",
    copyWish: "Salin Ucapan",

    footerTitle: "Bulan Purnama & Keluarga",
    footerText: "Semoga setiap bulan purnama menerangi jalan pulang."
  }

};


/* =========================================================
   影片资料

   第1个：为什么我们珍惜团圆
   第2个：从月亮开始的故事
   第3个：玉兔话中秋：从遥望到探寻
   第4个：赏月、赏灯与传统习俗
   第5个：月饼里的中秋味道
   第6个：故宫宝贝团圆夜
========================================================= */

const videoData = {

  zh: [

    {
      title: "为什么我们珍惜团圆",
      description: "中秋为什么让我们特别重视团圆？通过真实的家庭故事，感受人与人之间最温暖的牵挂。",
      cover: "https://i.ytimg.com/vi/kfZRy98UN1Q/hqdefault.jpg",
      url: "https://www.youtube.com/embed/kfZRy98UN1Q?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "从月亮开始的故事",
      description: "从月亮出发，认识中秋节背后的故事，看看人们为什么一直把这一天与月亮联系在一起。",
      cover: "https://i.ytimg.com/vi/sgDjp-j-K3o/hqdefault.jpg",
      url: "https://www.youtube.com/embed/sgDjp-j-K3o?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "玉兔话中秋：从遥望到探寻",
      description: "从古人仰望月亮，到今天不断探索月球，一起看看月亮与中秋之间特别而有趣的联系。",
      cover: "https://i.ytimg.com/vi/LBb0sScTgZs/hqdefault.jpg",
      url: "https://www.youtube.com/embed/LBb0sScTgZs?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "赏月、赏灯与传统习俗",
      description: "赏月、提灯笼、看花灯，这些熟悉的中秋习俗，记录着一代又一代人的节日记忆。",
      cover: "https://i.ytimg.com/vi/zIWoFsgicuo/hqdefault.jpg",
      url: "https://www.youtube.com/embed/zIWoFsgicuo?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "月饼里的中秋味道",
      description: "从传统月饼到不同地区的特色口味，一起认识藏在月饼里的中秋文化与家的味道。",
      cover: "https://i.ytimg.com/vi/3bEGWMAbtqk/hqdefault.jpg",
      url: "https://www.youtube.com/embed/3bEGWMAbtqk?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "故宫宝贝团圆夜",
      description: "玉兔唤醒沉睡的故宫宝贝，让不同朝代的文物在月光下相聚，一起感受中秋节关于思念与团圆的美好故事。",
      cover: palaceCover,
      url: "https://v.qq.com/txp/iframe/player.html?auto=0&tiny=0&vid=m3174fushzr",
      palace: true
    }

  ],


  en: [

    {
      title: "Why We Treasure Reunion",
      description: "Why does Mid-Autumn make reunion so meaningful? Discover the warmth of family and the memories we treasure.",
      cover: "https://i.ytimg.com/vi/kfZRy98UN1Q/hqdefault.jpg",
      url: "https://www.youtube.com/embed/kfZRy98UN1Q?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "A Story That Begins With the Moon",
      description: "Start with the moon and discover why it has remained closely connected with the Mid-Autumn Festival.",
      cover: "https://i.ytimg.com/vi/sgDjp-j-K3o/hqdefault.jpg",
      url: "https://www.youtube.com/embed/sgDjp-j-K3o?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Jade Rabbit: From Looking Up to Exploring",
      description: "From ancient moon gazing to modern lunar exploration, discover the fascinating connection between the moon and Mid-Autumn.",
      cover: "https://i.ytimg.com/vi/LBb0sScTgZs/hqdefault.jpg",
      url: "https://www.youtube.com/embed/LBb0sScTgZs?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Moon Viewing, Lanterns & Traditions",
      description: "Explore the traditional customs that make the Mid-Autumn night warm and memorable.",
      cover: "https://i.ytimg.com/vi/zIWoFsgicuo/hqdefault.jpg",
      url: "https://www.youtube.com/embed/zIWoFsgicuo?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "The Taste of Mid-Autumn",
      description: "Discover mooncakes and the different flavors that carry the memories of home.",
      cover: "https://i.ytimg.com/vi/3bEGWMAbtqk/hqdefault.jpg",
      url: "https://www.youtube.com/embed/3bEGWMAbtqk?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Palace Museum Treasures Reunion Night",
      description: "A magical Mid-Autumn story in which treasured cultural artifacts come together under the moonlight.",
      cover: palaceCover,
      url: "https://v.qq.com/txp/iframe/player.html?auto=0&tiny=0&vid=m3174fushzr",
      palace: true
    }

  ],


  ms: [

    {
      title: "Mengapa Kita Menghargai Kebersamaan",
      description: "Rasai kehangatan keluarga dan kenangan yang berharga pada perayaan Pertengahan Musim Luruh.",
      cover: "https://i.ytimg.com/vi/kfZRy98UN1Q/hqdefault.jpg",
      url: "https://www.youtube.com/embed/kfZRy98UN1Q?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Kisah yang Bermula dengan Bulan",
      description: "Kenali kisah dan tradisi yang berkaitan dengan perayaan Pertengahan Musim Luruh.",
      cover: "https://i.ytimg.com/vi/sgDjp-j-K3o/hqdefault.jpg",
      url: "https://www.youtube.com/embed/sgDjp-j-K3o?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Arnab Jed: Dari Menatap ke Meneroka",
      description: "Daripada melihat bulan pada zaman dahulu hingga penerokaan bulan pada zaman moden.",
      cover: "https://i.ytimg.com/vi/LBb0sScTgZs/hqdefault.jpg",
      url: "https://www.youtube.com/embed/LBb0sScTgZs?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Melihat Bulan, Tanglung & Tradisi",
      description: "Kenali adat melihat bulan, membawa tanglung dan menikmati suasana perayaan.",
      cover: "https://i.ytimg.com/vi/zIWoFsgicuo/hqdefault.jpg",
      url: "https://www.youtube.com/embed/zIWoFsgicuo?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Rasa Perayaan Pertengahan Musim Luruh",
      description: "Kenali kuih bulan dan pelbagai rasa yang membawa kenangan tentang rumah dan keluarga.",
      cover: "https://i.ytimg.com/vi/3bEGWMAbtqk/hqdefault.jpg",
      url: "https://www.youtube.com/embed/3bEGWMAbtqk?autoplay=1&mute=0&controls=1&playsinline=1&rel=0"
    },

    {
      title: "Malam Penyatuan Khazanah Istana",
      description: "Satu kisah istimewa tentang budaya tradisional dan makna kebersamaan pada malam perayaan.",
      cover: palaceCover,
      url: "https://v.qq.com/txp/iframe/player.html?auto=0&tiny=0&vid=m3174fushzr",
      palace: true
    }

  ]

};


/* =========================================================
   祝福语
========================================================= */

const blessings = {

  zh: [
    "月圆人团圆，愿所有美好都在这个中秋如期而至。",
    "愿你的中秋有月、有家、有爱，也有最温柔的笑容。",
    "月满中秋，愿你和家人平安相伴，幸福常在。",
    "愿这一轮明月，照亮你回家的路，也照亮未来的方向。",
    "中秋快乐，愿你所念的人都在身边。",
    "愿家人常在，朋友常伴，生活有甜，日子有光。",
    "愿每一个中秋，都有值得珍藏的团圆回忆。",
    "月圆、家圆、人圆，愿你一切都圆满。",
    "愿你在这个中秋收获温暖，也收获满满幸福。",
    "祝你中秋快乐，愿所有愿望都慢慢实现。",
    "愿你抬头见月，低头有家，心里有爱。",
    "愿家灯常亮，家人常笑，幸福常伴。",
    "月光温柔，愿你的生活也温柔而明亮。",
    "中秋团圆夜，愿一家人健康平安。",
    "愿所有离家的人，都能早日回到温暖的家。",
    "愿你有月饼可吃，有家人可见，有幸福可享。",
    "愿每一次相聚，都值得被记住。",
    "愿你的中秋夜，有笑声，也有温暖。",
    "祝你月圆人安，心想事成。",
    "愿生活像月亮一样，圆满明亮。",
    "愿所有美好的事情，都在这个中秋发生。",
    "愿你和最爱的人，一起看最美的月亮。",
    "中秋快乐，愿你每天都有小小的幸福。",
    "愿家人平安，事业顺利，心中常有月光。",
    "愿你的生活甜甜的，像一口好吃的月饼。",
    "月圆是景，团圆是情，愿你幸福常伴。",
    "愿你在忙碌的生活里，也能记得抬头看看月亮。",
    "愿中秋的月光带走疲惫，留下温暖。",
    "愿你心中有光，脚下有路，身边有人陪。",
    "愿这一年所有的辛苦，都换来值得的收获。",
    "愿你所爱的人健康平安。",
    "愿远方的家人都能收到你的思念。",
    "愿团圆不只是一顿饭，而是一生的陪伴。",
    "愿每一个平凡的日子，都藏着小小的幸福。",
    "祝福你和家人平平安安、健健康康。",
    "愿你眼里有星光，心里有月亮。",
    "愿你的家永远是最温暖的地方。",
    "愿中秋的月光替你送去最深的思念。",
    "愿你一路顺利，日日开心。",
    "愿所有等待，都有好的结果。",
    "愿所有思念，都有人回应。",
    "愿所有努力，都不会被辜负。",
    "愿你有一个温暖、快乐、难忘的中秋。",
    "愿幸福围绕着你，快乐陪伴着你。",
    "愿你的家人永远健康，愿你的生活越来越好。",
    "愿月亮见证你的幸福，也见证你的成长。",
    "中秋快乐，愿未来的每一天都值得期待。",
    "愿家和万事兴，愿平安常相随。",
    "愿你的笑容，比今晚的月亮更明亮。",
    "愿这个中秋，让你感受到家的温度。"
  ],

  en: [
    "May your Mid-Autumn Festival be filled with love and reunion.",
    "May the full moon bring peace and happiness to your family.",
    "Wishing you a warm and joyful Mid-Autumn Festival.",
    "May you always have a place called home.",
    "May the moonlight brighten your way home.",
    "Wishing you health, peace and happiness.",
    "May your family be safe and your heart be full.",
    "May every reunion become a beautiful memory.",
    "May your life be bright like the full moon.",
    "May happiness stay close to you.",
    "Wishing you a sweet and peaceful festival.",
    "May every family member be safe and healthy.",
    "May love always surround your home.",
    "May your wishes come true this Mid-Autumn.",
    "May tonight's moon bring you comfort.",
    "Wishing you warmth, joy and togetherness.",
    "May your home always be filled with laughter.",
    "May every journey lead you back home.",
    "Happy Mid-Autumn Festival to you and your family.",
    "May every moonlit night remind you of the people you love."
  ],

  ms: [
    "Semoga perayaan ini dipenuhi kasih dan kebersamaan.",
    "Semoga bulan purnama membawa kebahagiaan kepada keluarga anda.",
    "Selamat menyambut perayaan dengan penuh kegembiraan.",
    "Semoga keluarga sentiasa sihat, selamat dan bahagia.",
    "Semoga cahaya bulan menerangi perjalanan pulang anda.",
    "Semoga setiap pertemuan menjadi kenangan indah.",
    "Semoga rumah anda sentiasa dipenuhi senyuman.",
    "Semoga semua impian anda menjadi kenyataan.",
    "Semoga hidup anda cerah seperti bulan purnama.",
    "Semoga kasih sayang sentiasa bersama keluarga anda.",
    "Semoga malam ini membawa ketenangan dan kehangatan.",
    "Semoga anda menikmati masa indah bersama keluarga.",
    "Semoga kesihatan dan kebahagiaan sentiasa mengiringi anda.",
    "Semoga cahaya bulan membawa harapan baharu.",
    "Semoga setiap perjalanan membawa anda pulang dengan selamat.",
    "Selamat menyambut perayaan untuk anda dan keluarga.",
    "Semoga keluarga sentiasa bersatu dan bahagia.",
    "Semoga rumah anda sentiasa penuh dengan kasih sayang.",
    "Semoga hari-hari anda dipenuhi kebahagiaan.",
    "Semoga perayaan ini meninggalkan kenangan yang indah."
  ]

};


/* =========================================================
   页面元素
========================================================= */

const videoGrid = document.getElementById("videoGrid");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const videoClose = document.getElementById("videoClose");
const videoModalOverlay = document.getElementById("videoModalOverlay");

const blessingText = document.getElementById("blessingText");
const newWishBtn = document.getElementById("newWishBtn");
const copyWishBtn = document.getElementById("copyWishBtn");

const backTop = document.getElementById("backTop");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navPanel = document.getElementById("navPanel");


/* =========================================================
   更新语言
========================================================= */

function updateLanguageText() {

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");
    const translation = translations[currentLanguage]?.[key];

    if (translation !== undefined) {
      element.textContent = translation;
    }

  });

}


/* =========================================================
   创建备用封面
========================================================= */

function createFallbackCover(video) {

  if (video.palace) {

    return `
      <div class="video-cover-fallback palace-fallback">
        <span class="video-fallback-label">MID-AUTUMN SPECIAL</span>
        <strong class="video-fallback-title">故宫宝贝<br>团圆夜</strong>
        <span class="video-fallback-subtitle">月光之下 · 国宝团圆</span>
      </div>
    `;

  }

  return `
    <div class="video-cover-fallback">
      <span class="video-fallback-label">MID-AUTUMN FESTIVAL</span>
      <strong class="video-fallback-title">${video.title}</strong>
      <span class="video-fallback-subtitle">中秋佳节 · 共话团圆</span>
    </div>
  `;

}


/* =========================================================
   渲染视频卡片

   每张卡片都保留：
   影片封面
   影片标题
   影片介绍

   如果图片加载失败，会自动显示备用封面。
========================================================= */

function renderVideos() {

  if (!videoGrid) return;

  videoGrid.innerHTML = "";

  const list = videoData[currentLanguage] || videoData.zh;

  list.forEach((video, index) => {

    const card = document.createElement("article");
    card.className = "video-card";

    card.innerHTML = `
      <div class="video-cover">

        <img
          src="${video.cover}"
          alt="${video.title}"
          loading="lazy"
          referrerpolicy="no-referrer"
        >

        ${createFallbackCover(video)}

        <button
          class="video-play"
          type="button"
          aria-label="播放影片"
          data-video-index="${index}"
        >
          <span class="play-triangle"></span>
        </button>

      </div>

      <div class="video-info">

        <span class="video-index">
          ${(index + 1).toString().padStart(2, "0")}
        </span>

        <h3>${video.title}</h3>

        <p class="video-description">${video.description}</p>

      </div>
    `;

    const coverImage = card.querySelector(".video-cover > img");
    const fallbackCover = card.querySelector(".video-cover-fallback");

    coverImage.addEventListener("error", () => {
      coverImage.style.display = "none";
      fallbackCover.classList.add("show");
    });

    videoGrid.appendChild(card);

  });


  document.querySelectorAll(".video-play").forEach(button => {

    button.addEventListener("click", () => {

      const index = Number(
        button.getAttribute("data-video-index")
      );

      const video = list[index];

      if (!video) return;

      openVideo(video);

    });

  });

}


/* =========================================================
   打开影片
========================================================= */

function openVideo(video) {

  if (!videoModal || !videoFrame) return;

  videoFrame.onload = null;
  videoFrame.src = video.url;

  videoModal.classList.add("show");
  document.body.style.overflow = "hidden";

  videoFrame.setAttribute(
    "allow",
    "autoplay; encrypted-media; fullscreen; picture-in-picture"
  );

}


/* =========================================================
   关闭影片
========================================================= */

function closeVideo() {

  if (!videoModal || !videoFrame) return;

  videoModal.classList.remove("show");
  videoFrame.src = "";
  videoFrame.onload = null;

  document.body.style.overflow = "";

}


/* =========================================================
   祝福语
========================================================= */

let currentBlessingIndex = -1;

function showNewWish() {

  const list = blessings[currentLanguage] || blessings.zh;

  if (!list.length || !blessingText) return;

  let index = Math.floor(Math.random() * list.length);

  if (list.length > 1) {
    while (index === currentBlessingIndex) {
      index = Math.floor(Math.random() * list.length);
    }
  }

  currentBlessingIndex = index;
  blessingText.textContent = list[index];

}


/* =========================================================
   复制祝福语
========================================================= */

async function copyBlessing() {

  if (!blessingText || !copyWishBtn) return;

  const text = blessingText.textContent.trim();

  try {

    await navigator.clipboard.writeText(text);

    const originalText = translations[currentLanguage].copyWish;

    copyWishBtn.textContent =
      currentLanguage === "zh"
        ? "已复制"
        : currentLanguage === "en"
          ? "Copied"
          : "Disalin";

    setTimeout(() => {
      copyWishBtn.textContent = originalText;
    }, 1500);

  } catch (error) {

    window.prompt("请复制下面的祝福文字：", text);

  }

}


/* =========================================================
   中秋倒数
========================================================= */

const countdownTarget =
  new Date("2027-09-15T00:00:00+08:00").getTime();

function updateCountdown() {

  const now = Date.now();
  let difference = countdownTarget - now;

  if (difference < 0) {
    difference = 0;
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(difference / day);
  const hours = Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / 1000);

  document.getElementById("days").textContent =
    String(days);

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}


/* =========================================================
   切换语言
========================================================= */

function setLanguage(language) {

  if (!translations[language]) {
    language = "zh";
  }

  currentLanguage = language;

  document.body.classList.remove(
    "lang-zh",
    "lang-en",
    "lang-ms"
  );

  document.body.classList.add(`lang-${language}`);

  document.documentElement.lang =
    language === "zh"
      ? "zh-CN"
      : language === "en"
        ? "en"
        : "ms";

  updateLanguageText();
  renderVideos();
  showNewWish();

  document.querySelectorAll(".lang-btn").forEach(button => {

    button.classList.toggle(
      "active",
      button.getAttribute("data-lang") === language
    );

  });

}


/* =========================================================
   手机菜单
========================================================= */

function closeMobileMenu() {

  if (navPanel) {
    navPanel.classList.remove("show");
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  }

}

if (mobileMenuBtn && navPanel) {

  mobileMenuBtn.addEventListener("click", () => {

    const isOpen = navPanel.classList.toggle("show");

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

}

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});


/* =========================================================
   语言按钮
========================================================= */

document.querySelectorAll(".lang-btn").forEach(button => {

  button.addEventListener("click", () => {

    const language = button.getAttribute("data-lang");

    setLanguage(language);

  });

});


/* =========================================================
   影片关闭
========================================================= */

if (videoClose) {
  videoClose.addEventListener("click", closeVideo);
}

if (videoModalOverlay) {
  videoModalOverlay.addEventListener("click", closeVideo);
}

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeVideo();
  }

});


/* =========================================================
   祝福按钮
========================================================= */

if (newWishBtn) {
  newWishBtn.addEventListener("click", showNewWish);
}

if (copyWishBtn) {
  copyWishBtn.addEventListener("click", copyBlessing);
}


/* =========================================================
   返回顶部
========================================================= */

window.addEventListener("scroll", () => {

  if (!backTop) return;

  if (window.scrollY > 450) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }

});

if (backTop) {

  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   导航平滑滚动
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.offsetHeight : 0;

    const topPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      15;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   初始化
========================================================= */

function init() {

  setLanguage("zh");
  updateCountdown();

  setInterval(updateCountdown, 1000);

}

document.addEventListener("DOMContentLoaded", init);