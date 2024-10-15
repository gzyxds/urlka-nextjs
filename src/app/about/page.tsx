import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "172号卡_手机流量卡分销管理平台",
  description: "172号卡官网代理系统",
  keywords: "172号卡官网,手机流量卡,流量卡,流量卡分销,流量卡批发,流量卡代理,流量卡分销系统,流量卡分销平台,流量卡分销管理,流量卡分销系统官网", 
  openGraph: {
    images: ["/images/logo/icon.png"],
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="172号卡分销管理平台"
        description="172号卡官网！我们提供最新的电信、移动、联通和广电流量卡及物联卡的在线申请和办理服务。加入我们的分销管理平台，成为代理合伙人，轻松管理您的流量卡业务，获取丰厚收益。"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
};

export default AboutPage;
