/** 在数组中匹配 anchorText 的项之后插入若干新项；未匹配到锚点时追加到末尾 */
export function insertAfter<T>(items: T[], anchorText: string, ...inserts: T[]): T[] {
  const idx = items.findIndex((item) => (item as { text?: string }).text === anchorText);
  if (idx === -1) return [...items, ...inserts];
  return [...items.slice(0, idx + 1), ...inserts, ...items.slice(idx + 1)];
}
