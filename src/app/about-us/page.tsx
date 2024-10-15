import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "关于我们 - 172号卡分销系统官网",
  description: "了解172号卡分销系统的发展历程、企业文化和团队介绍。我们致力于为合作伙伴提供优质的流量卡分销解决方案。",
  keywords: "172号卡,关于我们,公司介绍,企业文化,团队介绍,流量卡分销",
  openGraph: {
    images: [
      {
        images: ["/images/logo/icon.png"],  // 
        width: 800,
        height: 600,
        alt: "172号卡分销系统",
      },
    ],
  },
};

const AboutUs = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于我们"
        description="了解172号卡分销系统的发展历程、企业文化和团队介绍"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  我们的故事
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  172号卡分销系统成立于2020年，是一家专注于流量卡分销的创新型科技公司。我们致力于为合作伙伴提供全面的流量卡分销解决方案，包括电信、移动、联通和广电的各类流量卡产品。
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  通过不断创新和优化，我们的平台已经成为行业内领先的流量卡分销管理系统，为数千家代理商提供了便捷、高效的业务管理工具。
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative z-10 my-4 mx-auto max-w-[500px] lg:mr-0">
                <img
                  src="/images/blog/blog-01.jpg"
                  alt="关于我们"
                  className="mx-auto max-w-full rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl text-center">
              我们的优势
            </h2>
            <div className="flex flex-wrap -mx-4">
              {[
                { title: "专业团队", description: "拥有多年行业经验的精英团队" },
                { title: "技术创新", description: "持续优化的分销管理系统" },
                { title: "优质产品", description: "覆盖全网的流量卡产品线" },
                { title: "贴心服务", description: "24小时专业客户支持" },
                { title: "灵活定价", description: "根据市场需求调整的灵活定价策略" },
                { title: "数据分析", description: "提供深入的销售数据分析和洞察" },
                { title: "合作共赢", description: "与合作伙伴建立长期互利的关系" },
                { title: "快速响应", description: "迅速应对市场变化和客户需求" }
              ].map((item, index) => (
                <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-8 rounded-md bg-white p-10 shadow-one dark:bg-dark">
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default AboutUs;
