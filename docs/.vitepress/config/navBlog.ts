import sidebarBlog from "./sidebarBlog";

interface NavCategory {
  text: string;
  link: string;
}

const navBlog: NavCategory[] = [];

sidebarBlog.map(({ text, items }) => {
  const category = {
    text: text,
    link: items[0]["link"],
  };

  navBlog.push(category);
});

export default navBlog;
