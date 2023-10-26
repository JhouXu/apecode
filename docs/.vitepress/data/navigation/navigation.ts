import { navigationItem } from "./types";

// 文件处理
// - 文件转换
// - 图像编辑
const FileConversion = "文件转换";
const ImageEditor = "图像编辑";

// 设计相关
// - 配色参考
// - 设计参考
// - 在线logo
const ColorReference = "配色参考";
const DesignReference = "设计参考";
const OnlineLogo = "在线logo";

// 素材资源
// - 图标素材
// - 插画素材
// - 字体素材
// - 图像素材
// - 视频素材
// - 图像视频素材
// - 音频素材
// - 模板插件
const IconSource = "图标素材";
const IllustrationSource = "插画素材";
const FontSource = "字体素材";
const ImgSource = "图像素材";
const VideoSource = "视频素材";
const ImgVideoSource = "图像视频素材";
const AudioSource = "音频素材";
const TemplatePlugin = "模板插件";

export const FileHandling: navigationItem[] = [
  {
    text: "Convertio",
    desc: "将您的文件转换成任意格式",
    link: "https://convertio.co/",
    icon: "https://static.convertio.co/img/apple-touch-icon-180x180-precomposed.png",
    type: FileConversion,
  },
  {
    text: "smallpdf",
    desc: "PDF 文件的所有在线操作。【收费】",
    link: "https://smallpdf.com/",
    icon: "https://s.smallpdf.com/static/2ae88642617fc2c0b873.svg",
    type: FileConversion,
  },
  {
    text: "iLovePDF",
    desc: "完全免费、易于使用、丰富的PDF处理工具",
    link: "https://www.ilovepdf.com/",
    icon: "https://www.ilovepdf.com/img/app-icon.png",
    // https://www.ilovepdf.com/img/favicons-img/favicon-32x32.png
    type: FileConversion,
  },
  {
    text: "iLoveIMG",
    desc: "可批量编辑图片的所有工具",
    link: "https://www.iloveimg.com/",
    icon: "https://www.iloveimg.com/img/favicons-img/favicon-16x16.png",
    type: FileConversion,
  },
  {
    text: "绿发票",
    desc: "电子发票PDF合并打印",
    link: "https://lvfapiao.com/",
    icon: "https://cdn.lvfapiao.com/images/fp.png",
    type: FileConversion,
  },

  {
    text: "tinypng",
    desc: "智能WebP，PNG和JPEG压缩",
    link: "https://tinypng.com/",
    icon: "https://tinypng.com/images/apple-touch-icon.png",
    type: ImageEditor,
  },
  {
    text: "recompressor",
    desc: "最优图像优化",
    link: "https://recompressor.com/",
    icon: "https://recompressor.com/modutil/assets/lib/modutil/m/favicons/recompressor/apple-touch-icon-180.png",
    type: ImageEditor,
  },
  {
    text: "bigjpg",
    desc: "AI人工智能圖片放大",
    link: "https://bigjpg.com/",
    icon: "https://bigjpg.com/static/css/touch-icon-iphone-retina.png",
    type: ImageEditor,
  },
  {
    text: "remove.bg",
    desc: "删除图像背景",
    link: "https://www.remove.bg/",
    icon: "https://www.remove.bg/favicon.ico?v=YAXaAv7pao",
    type: ImageEditor,
  },
];

export const DesignRelated: navigationItem[] = [
  {
    text: "中国色",
    desc: "中国传统颜色",
    link: "http://zhongguose.com/",
    icon: "http://zhongguose.com/img/favicon.ico",
    type: ColorReference,
  },
  {
    text: "调色板",
    desc: "平面UI颜色",
    link: "https://flatuicolors.com/",
    icon: "https://flatuicolors.com/static/favicon.ico",
    // https://infinitypro-img.infinitynewtab.com/custom-icon/8001e97uk1b5lrookgbeomfvgvzfjn.png
    type: ColorReference,
  },
  {
    text: "Coolors",
    desc: "创建完美的调色板或从数千种美丽的配色方案中获取灵感。",
    link: "https://coolors.co/",
    icon: "https://coolors.co/assets/img/favicon.png",
    type: ColorReference,
  },
  {
    text: "ColorHunt",
    desc: "设计师和艺术家的调色板，配色灵感收集",
    link: "https://colorhunt.co/",
    icon: "https://colorhunt.co/img/colorhunt-favicon.svg",
    type: ColorReference,
  },
  {
    text: "CoolHub",
    desc: "超好看的渐变颜色",
    link: "https://webkul.github.io/coolhue/",
    icon: "https://webkul.github.io/coolhue/images/coolhue-logo.png",
    type: ColorReference,
  },
  {
    text: "BrandColors",
    desc: "世界知名品牌颜色收集网",
    link: "http://brandcolors.net/",
    icon: "http://brandcolors.net/assets/img/logo.png",
    type: ColorReference,
  },

  {
    text: "Material Design",
    desc: "Material 3是谷歌开源设计系统的最新版本。使用材料3设计和制造美观、实用的产品",
    link: "https://m3.material.io/",
    icon: "https://m3.material.io/static/assets/m3-favicon-apple-touch.png",
    type: DesignReference,
  },

  {
    text: "WorldVectorLogo",
    desc: "下载矢量徽标，你喜欢的品牌",
    link: "https://worldvectorlogo.com/",
    icon: "https://worldvectorlogo.com/static/img/favicon.ico",
    type: OnlineLogo,
  },
  {
    text: "标小智",
    desc: "免费LOGO设计模板在线制作",
    link: "https://www.logosc.cn/biaozhi/",
    icon: "https://www.logosc.cn/img/logo-icons/logosc-new.svg",
    type: OnlineLogo,
  },
];

export const MaterialResources: navigationItem[] = [
  {
    text: "iconfont",
    desc: "阿里巴巴图标库",
    link: "https://www.iconfont.cn/",
    icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
    type: IconSource,
  },
  {
    text: "iconfont",
    desc: "阿里巴巴图标库",
    link: "https://fontawesome.dashgame.com/",
    icon: "https://fa5.dashgame.com/favicon.ico",
    type: IconSource,
  },

  {
    text: "Undraw",
    desc: "一个扁平风格插画图库",
    link: "https://undraw.co/illustrations",
    icon: "https://undraw.co/apple-touch-icon.png",
    type: IllustrationSource,
  },
  {
    text: "iradesign",
    desc: "一款渐变风格的矢量插画素材网站",
    link: "https://iradesign.io/",
    icon: "https://iradesign.io/assets/img/favicon.svg",
    type: IllustrationSource,
  },
  {
    text: "manypixels",
    desc: "2500 多张免版税插图，为您的设计增光添彩",
    link: "https://www.manypixels.co/gallery/",
    icon: "https://assets-global.website-files.com/63a9cb71c629474d4ae334b9/63ac68e5916d9b5c5a24a999_Favicon%201.png",
    type: IllustrationSource,
  },

  {
    text: "以方·iFonts",
    desc: "用有趣的字做设计",
    link: "https://ifonts.com/",
    icon: "https://pic.51ifonts.com/images/common/logo4.3.png",
    type: FontSource,
  },
  {
    text: "字由",
    desc: "千款免费字体，轻松一键换字，尽在字由客户端，超百万设计师正在使用",
    link: "https://www.hellofont.cn/",
    icon: "https://resource.hellofont.cn/nav/logo.svg",
    type: FontSource,
  },
  {
    text: "Fontspace",
    desc: "100,000+ 免费字体。免费下载法律许可的字体，非常适合您的设计项目。",
    link: "https://www.fontspace.com/",
    icon: "https://www.fontspace.com/images/fontspace-icon-circle-512.png",
    type: FontSource,
  },
  {
    text: "100font",
    desc: '一个专门收集整理"免费商用字体"的网站',
    link: "https://www.100font.com/",
    icon: "https://www.100font.com/view/img/favicon.ico",
    type: FontSource,
  },
  {
    text: "字体天下",
    desc: "海量字体免费高速下载",
    link: "http://www.fonts.net.cn",
    icon: "",
    type: FontSource,
  },
  {
    text: "自由字体",
    desc: "最新免费商用字体大全",
    link: "https://ziyouziti.com/index-index-all.html",
    icon: "https://ziyouziti.com/favicon.png",
    type: FontSource,
  },

  {
    text: "isorepublic",
    desc: "成千上万的免费高分辨率库存CC0照片和视频",
    link: "https://isorepublic.com/",
    icon: "https://isorepublic.com/wp-content/themes/isorepublic-v4.0/assets/img/logos/iso-logo-small.svg",
    type: ImgVideoSource,
  },
  {
    text: "Pexels",
    desc: "創作者分享的最佳免費圖庫相片，以及免權利金的影像和影片",
    link: "https://www.pexels.com/",
    icon: "https://www.pexels.com/assets/static/images/meta/favicon.ico",
    type: ImgVideoSource,
  },

  {
    text: "Pixabay",
    desc: "免费正版高清图片素材库",
    link: "https://pixabay.com/",
    icon: "https://pixabay.com/apple-touch-icon.png",
    type: ImgSource,
  },
  {
    text: "Splitshire",
    desc: "Beautiful & exclusive free stock photos.",
    link: "https://www.splitshire.com",
    icon: "",
    type: ImgSource,
  },
  {
    text: "movie-screencaps",
    desc: "专门收集电影影视剧截图的网站,方便我们后期调色做参考",
    link: "https://movie-screencaps.com/",
    icon: "",
    type: ImgSource,
  },
  {
    text: "Burst",
    desc: "下载令人惊叹的照片供网站和商业使用",
    link: "https://burst.shopify.com/",
    icon: "https://cdn.shopify.com/shopifycloud/stock_photos/assets/global/favicon-ab7018e1fe708a49edcfecce3166032fbeeb1fd7ba4a078c366de344d32ee193.png",
    type: ImgSource,
  },
  {
    text: "skitterphoto",
    desc: "一个查找、显示和共享公共域照片的地方",
    link: "https://skitterphoto.com/",
    icon: "https://skitterphoto.com/favicon.png",
    type: ImgSource,
  },
  {
    text: "foodiesfeed",
    desc: "这个网站所有的图片都和美食相关",
    link: "https://www.foodiesfeed.com/",
    icon: "https://www.foodiesfeed.com/wp-content/themes/foodiesfeed2022/src/img/ff.svg",
    type: ImgSource,
  },
  {
    text: "Unsplash",
    desc: "互联网的视觉来源，由世界各地的创造者提供动力",
    link: "https://unsplash.com",
    icon: "https://unsplash.com/apple-touch-icon.png",
    type: ImgSource,
  },
  {
    text: "Life of pix",
    desc: "免费高分辨率摄影",
    link: "https://www.lifeofpix.com",
    icon: "https://www.lifeofpix.com/wp-content/themes/lifeofpix_v2/img/lop-logo-noir.svg",
    type: ImgSource,
  },
  {
    text: "stocksnap",
    desc: "美丽的免费库存照片",
    link: "https://stocksnap.io/",
    icon: "https://stocksnap.io/img/favicon.png",
    type: ImgSource,
  },

  {
    text: "Pexels",
    desc: "Pexels社区共享的最佳免费视频。",
    link: "https://www.pexels.com/videos",
    icon: "https://www.pexels.com/assets/static/images/meta/pexels-icon.png",
    type: VideoSource,
  },
  {
    text: "Life of Vids",
    desc: "Free Videos, Clips & Loops",
    link: "https://www.lifeofvids.com/",
    icon: "https://www.lifeofvids.com/favicon.ico",
    type: VideoSource,
  },
  {
    text: "Videezy",
    desc: "免费高清库存镜头和4K视频，无pro标志则为免费",
    link: "https://www.videezy.com/",
    icon: "https://www.videezy.com/apple-touch-icon-precomposed.png",
    type: VideoSource,
  },
  {
    text: "Mixkit",
    desc: "为您的下一个视频项目提供免费资产",
    link: "https://mixkit.co",
    icon: "https://assets.mixkit.co/build/mixkit-logo--black-a90b84b6ac6ad0fbd410b16466b4cb252d399b5caaf03603f36c52ffc648455c.svg",
    type: VideoSource,
  },
  {
    text: "Vidlery",
    desc: "艺术无处不在，免费动画视频背景",
    link: "http://vidlery.com/",
    icon: "https://www.vidlery.com/wp-content/uploads/2023/07/Vidlery-Logo-200x80.png",
    type: VideoSource,
  },
  {
    text: "Coverr",
    desc: "美丽的免费库存视频镜头",
    link: "https://coverr.co/",
    icon: "https://coverr.co/favicon-32x32.png",
    type: VideoSource,
  },
  {
    text: "Mazwai",
    desc: "手工采摘的库存视频镜头",
    link: "http://mazwai.com",
    icon: "https://mazwai.com/assets/images/favicon-32x32.png",
    type: VideoSource,
  },
  {
    text: "Ignite Motion",
    desc: "自由运动背景",
    link: "https://www.ignitemotion.com",
    icon: "https://www.ignitemotion.com/wp-content/uploads/2018/05/logo-Ignitemotion-free-video-backgrounds.png",
    type: VideoSource,
  },
  {
    text: "Vidsplay",
    desc: "Download Free Stock Video Footage",
    link: "https://www.vidsplay.com/",
    icon: "https://www.vidsplay.com/wp-content/uploads/2019/10/vidsplay-logo-without-text-300x300.png",
    type: VideoSource,
  },

  {
    text: "Youtube Audio Library",
    desc: "Youtube创作者平台",
    link: "https://studio.youtube.com/channel/UCpUDC4OkmFCGv8BFVKHOh_w/music",
    icon: "https://www.gstatic.com/youtube/img/creator/favicon/favicon_144.png",
    type: AudioSource,
  },
  {
    text: "创作工作室",
    desc: "Facebook创作者平台",
    link: "https://business.facebook.com/creatorstudio/?tab=ct_sound_collection&collection_id=all_pages",
    icon: "https://business.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/app-creator-studio_filled_24_geo-icon-info.png",
    type: AudioSource,
  },
  {
    text: "SoundCloud",
    desc: "",
    link: "https://soundcloud.com/discover",
    icon: "https://a-v2.sndcdn.com/assets/images/sc-icons/ios-a62dfc8fe7.png",
    type: AudioSource,
  },
  {
    text: "SoundJay",
    desc: "",
    link: "https://www.soundjay.com/",
    icon: "https://www.soundjay.com/graphics/thumbnail.jpg",
    type: AudioSource,
  },
  {
    text: "BBC Sound Effects",
    desc: "",
    link: "http://bbcsfx.acropolis.org.uk/",
    icon: "https://sound-effects.bbcrewind.co.uk/favicon.ico",
    type: AudioSource,
  },
  {
    text: "Free PD",
    desc: "",
    link: "https://freepd.com/",
    icon: "https://freepd.com/favicon-32x32.png",
    type: AudioSource,
  },
  {
    text: "Freesound（情绪状态和风格检索）",
    desc: "",
    link: "https://freesound.org/",
    icon: "https://freesound.org/apple-touch-icon.png",
    type: AudioSource,
  },
  {
    text: "Audiolibrary",
    desc: "",
    link: "https://www.audiolibrary.com.co",
    icon: "https://cdn.audiolibrary.com.co/themes/ytalc/assets/img/artists/tvari.jpg?56247834125",
    type: AudioSource,
  },
  {
    text: "Free Stock Music",
    desc: "",
    link: "https://www.free-stock-music.com/",
    icon: "https://www.free-stock-music.com/thumbnails/free-music-thumbnail.jpg",
    type: AudioSource,
  },

  {
    text: "书生CG资源站",
    desc: "",
    link: "https://c4dsky.com/",
    icon: "https://c4dsky.com/wp-content/uploads/2019/08/c4dsky.com-icon.png",
    type: TemplatePlugin,
  },
  {
    text: "大众脸",
    desc: "",
    link: "https://www.lookae.com/",
    icon: "https://www.lookae.com/wp-content/uploads/2019/03/home-logo.png",
    type: TemplatePlugin,
  },
  {
    text: "VIDEEZY",
    desc: "Free After Effects Templates",
    link: "https://www.videezy.com/after-effects-templates",
    icon: "https://www.videezy.com/apple-touch-icon-precomposed.png",
    type: TemplatePlugin,
  },
  {
    text: "ayatoweb",
    desc: "日本的一个免费网站",
    link: "http://www.ayatoweb.com/",
    icon: "http://www.ayatoweb.com/images/base_title1.gif",
    type: TemplatePlugin,
  },
];
