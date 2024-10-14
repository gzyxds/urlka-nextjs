import { Menu } from "@/types/menu";

// 定义菜单数据
const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "加盟",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "博客",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "支持",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "AI创作",
    path: "https://comnew.cn/",
    newTab: true,
  },
  {
    id: 6,
    title: "关于我们",
    path: "/about-us",
    newTab: false,
  },
  {
    id: 4,
    title: "页面",
    newTab: false,
    // 定义子菜单
    submenu: [
      {
        id: 41,
        title: "代理加盟",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "联系页面",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "博客网格页面",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "博客边栏页面",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "博客详情页面",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "登录页面",
        path: "https://haoka.lot-ml.com/plugreg.html?agentid=90925",
        newTab: false,
      },
      {
        id: 47,
        title: "注册页面",
        path: "https://haoka.lot-ml.com/plugreg.html?agentid=90925", 
        path: "/signup", // 注册页面路径
        newTab: false,
      },
      {
        id: 48,
        title: "错误页面",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
// 导出菜单数据
export default menuData;
