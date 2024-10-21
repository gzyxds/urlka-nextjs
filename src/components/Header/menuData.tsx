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
    id: 3,
    title: "联系",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "文档",
    path: "https://urlka.cn/",
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
    title: "其他",
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
        title: "联系我们",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "卡博士",
        path: "https://wap.kaboshihaoka.com/show/?agent_id=36285&name=%u5361%u535A%u4E16", 
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
        title: "代理登入",
        path: "https://haoka.lot-ml.com/plugreg.html?agentid=90925",
        newTab: false,
      },
      {
        id: 47,
        title: "注册页面",
        path: "https://haoka.lot-ml.com/plugreg.html?agentid=90925",
        newTab: false,
      },
      {
        id: 48,
        title: "官方客服",
        path: "https://syx0xk.qiyukf.com/client?k=1bba63d184c3fecce3532aacae755c47&wp=1&robotShuntSwitch=0",
        newTab: false,
      },
      {
        id: 49,
        title: "一证通查",
        path: "https://getsimnum.caict.ac.cn/",
        newTab: false,
      },
      {
        id: 50,
        title: "订单查询",
        path: "https://haokawx.lot-ml.com/Search/Index",
        newTab: false,
      },
      {
        id: 51,
        title: "加入群聊",
        path: "https://work.weixin.qq.com/wework_admin/external_room/jump_from_doc?code=roomCode_mbUiBp1sFWjy7VvS&bar_style_type=5",
        newTab: false,
      },
    ],
  },
];
// 导出菜单数据
export default menuData;
