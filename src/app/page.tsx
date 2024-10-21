import AboutSectionOne from "@/components/About/page";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "172号卡分销系统官网_手机流量卡分销管理平台",  // 网站标题
  keywords: "172号卡官网,手机流量卡,流量卡,流量卡分销,流量卡批发,流量卡代理,流量卡分销系统,流量卡分销平台,流量卡分销管理,流量卡分销系统官网",  // 网站关键词
  description: "172号卡官网！我们提供最新的电信、移动、联通和广电流量卡及物联卡的在线申请和办理服务。加入我们的分销管理平台，成为代理合伙人，轻松管理您的流量卡业务，获取丰厚收益。",  // 网站描述
  openGraph: {
    images: ["/images/logo/icon.png"],  // 网站图片
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp /> 
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
     
      <Contact />
    </>
  );
}
