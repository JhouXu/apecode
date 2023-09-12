import { blog } from "../data/blog/blog";
import { classify } from "../data/blog/classify";

// Define a type for the objects in the sidebarBlog array
interface SidebarCategory {
  text: string; // 分类名称
  sort: number; // 分类排序
  collapsed: boolean; // 分类是否允许折叠
  items: SidebarCategoryItem[]; // 分类中的子数据
}

interface SidebarCategoryItem {
  text: string; // 子数据文章标题
  link: string; // 子数据文章链接
  type?: string; // 子数据文章类型
  time?: string; // 子数据文章创建时间
}

// 侧边栏 - blog 分类数据获取
const sidebarBlog: SidebarCategory[] = [];

// 创建子分类
Object.entries(classify).forEach(([index, item]) => {
  const category = {
    text: item.value,
    sort: item.sort,
    collapsed: false,
    items: [],
  };

  sidebarBlog.push(category);
});

// 根据预设排序
sidebarBlog.sort((upper: SidebarCategory, under: SidebarCategory) => upper.sort - under.sort);

blog.forEach((bItem, bIndex) => {
  const findIndex = sidebarBlog.findIndex((sbb) => sbb.text === bItem.type);

  if (findIndex !== -1) {
    sidebarBlog[findIndex]["items"].push(bItem);
  }
});

export default sidebarBlog;
