import { Menu } from "@/types/menu";

// 定义菜单数据
const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    path: "/",
    newTab: true,
  },
  {
    id: 2,
    title: "加盟",
    path: "/about",
    newTab: true,
  },
  
  {
    id: 3,
    title: "联系",
    path: "/contact",
    newTab: true,
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
    newTab: true,
  },
  {
    id: 7,
    title: "代理加盟",
    path: "https://haoka.lot-ml.com/plugreg.html?agentid=90925",
    newTab: true,
  },
  {
    id: 42,
    title: "登入系统",
    path: "https://haoka.lot-ml.com/login.html",
    newTab: true,
  },
  {
    id: 4,
    title: "更多",
    newTab: true,
    // 定义子菜单
    submenu: [
      

      {
        id: 46,
        title: "免费领卡",
        path: "https://172.lot-ml.com/ProductEn/Index/1a654e0b341cadd2",
        newTab: true,
      },
      {
        id: 47,
        title: "使用指南",
        path: "https://urlka.cn/172/guide.html",
        newTab: true,
      },
      {
        id: 48,
        title: "官方客服",
        path: "https://syx0xk.qiyukf.com/client?k=1bba63d184c3fecce3532aacae755c47&wp=1&robotShuntSwitch=0",
        newTab: true,
      },
      {
        id: 49,
        title: "一证通查",
        path: "https://getsimnum.caict.ac.cn/",
        newTab: true,
      },
      {
        id: 50,
        title: "订单查询",
        path: "https://haokawx.lot-ml.com/Search/Index",
        newTab: true,
      },
      {
        id: 43,
        title: "卡博士",
        path: "https://wap.kaboshihaoka.com/show/?agent_id=36285&name=%u5361%u535A%u4E16", 
        newTab: true,
      },
      {
        id: 51,
        title: "加入社群",
        path: "https://work.weixin.qq.com/wework_admin/external_room/jump_from_doc?code=roomCode_mbUiBp1sFWjy7VvS&bar_style_type=5",
        newTab: true,
      },
    ],
  },
];
// 导出菜单数据
export default menuData;
