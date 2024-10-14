import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "172号卡",
  description: "172号卡官网代理系统",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="172号卡"
        description="172号卡官网代理系统"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
};

export default AboutPage;
