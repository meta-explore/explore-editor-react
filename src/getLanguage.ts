const getLanguage = (lang: any) => {
  switch (typeof lang) {
    case "object":
      return lang;
    case "string":
      switch (lang) {
        case "en":
          return require("explore-editor/lib/lang/en");
        case "da":
          return require("explore-editor/lib/lang/da");
        case "de":
          return require("explore-editor/lib/lang/de");
        case "es":
          return require("explore-editor/lib/lang/es");
        case "fr":
          return require("explore-editor/lib/lang/fr");
        case "ja":
          return require("explore-editor/lib/lang/ja");
        case "ko":
          return require("explore-editor/lib/lang/ko");
        case "pt_br":
          return require("explore-editor/lib/lang/pt_br");
        case "ru":
          return require("explore-editor/lib/lang/ru");
        case "zh_cn":
          return require("explore-editor/lib/lang/zh_cn");
        default:
          return require("explore-editor/lib/lang/en");
      }
    default:
  }
  return require("explore-editor/lib/lang/en");
};

export default getLanguage;
