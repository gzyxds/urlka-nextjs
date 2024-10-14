// 导入Blog类型定义
import { Blog } from "@/types/blog";

// 定义博客数据数组
const blogData: Blog[] = [
  {
    id: 1,
    title: "产品发货时效查询",
    paragraph:
      "产品发货时效查询。",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "平面设计师",
    },
    tags: ["创意"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "后台结算规则",
    paragraph:
      "后台结算规则。",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "内容作者",
    },
    tags: ["计算机"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "号卡行业专业术语",
    paragraph:
      "号卡行业专业术语",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "平面设计师",
    },
    tags: ["设计"],
    publishDate: "2025",
  },
];

// 导出博客数据
export default blogData;
