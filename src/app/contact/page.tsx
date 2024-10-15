import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "172号卡分销系统官网_手机流量卡分销管理平台",
  description: "172号卡分销系统官网_手机流量卡分销管理平台",
  // 其他元数据
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="172号卡分销系统"
        description="172号卡官网！我们提供最新的电信、移动、联通和广电流量卡及物联卡的在线申请和办理服务。加入我们的分销管理平台，成为代理合伙人，轻松管理您的流量卡业务，获取丰厚收益。"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
