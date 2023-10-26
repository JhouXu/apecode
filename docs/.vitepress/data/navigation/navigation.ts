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
];
