export function getFormatDate(date: string | number | Date) {
  return new Date(date)
    .toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
}

export function getFromNow(date: string | number | Date): string {
  const now = new Date();
  const target = new Date(date);
  const diff = now.getTime() - target.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 45) return "几秒前";
  if (seconds < 90) return "1分钟前";
  if (minutes < 45) return `${minutes}分钟前`;
  if (minutes < 90) return "1小时前";
  if (hours < 22) return `${hours}小时前`;
  if (hours < 36) return "1天前";
  if (days < 26) return `${days}天前`;
  if (days < 46) return "1个月前";
  if (months < 11) return `${months}个月前`;
  if (months < 18) return "1年前";
  return `${years}年前`;
}

/**
 * 获取当前时刻的时间戳
 * @return {String} 时间戳
 */
export function getTimestamp() {
  return new Date().getTime();
}

/**
 * 将时间戳转换为用户自定义的时间格式
 * @param {Number} timestamp 时间戳
 * @param {String} rule 时间格式
 * @returns {String}
 */
export function timestampToFormatTime(timestamp, rule = "yyyy-MM-dd HH:mm:ss") {
  const D = new Date(timestamp);
  const timeObj = {};
  const rules = rule.match(/\w+/g);
  let ft = rule;

  timeObj["yyyy"] = D.getFullYear();
  timeObj["MM"] = D.getMonth() + 1;
  timeObj["dd"] = D.getDate();
  timeObj["HH"] = D.getHours();
  timeObj["mm"] = D.getMinutes();
  timeObj["ss"] = D.getSeconds();
  timeObj["ms"] = D.getMilliseconds();

  rules?.map((f) => {
    let ff = f.length === 1 ? `${f}${f}` : f;
    ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff]));
  });

  return ft;
}

/**
 * 根据时间字段名，自动判断是否需要填充零
 * @param {String} field 时间字段名
 * @param {String} value 预处理值
 * @returns {String|Number}
 */
export function fillingZero(field, value) {
  switch (field) {
    case "MM":
    case "dd":
    case "HH":
    case "mm":
    case "ss":
      return value < 10 ? `0${+value}` : value;
    case "M":
    case "d":
    case "H":
    case "m":
    case "s":
      return +value;
    default:
      return value;
  }
}
