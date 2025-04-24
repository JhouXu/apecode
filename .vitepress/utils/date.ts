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
