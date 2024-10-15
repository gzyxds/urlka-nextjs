"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="运营商官方正品"
          paragraph="运营商直签资源，全网最高佣金！ 大流量+超低月租"
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              精选
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              省内产品集合中心
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="精选"
            price={isMonthly ? "￥0" : "￥0"}
            duration={isMonthly ? "免费申请" : "免费申请"}
            subtitle="省内产品集合中心"
          >
            <div className="mb-8">
              <img src="https://haokaapi.lot-ml.com/upload/ProductUpDateImage/20241001/7bc33c39dd8c49feb6494067b18a4dc9.jpg" alt="精选套餐" className="w-full h-auto" />
            </div>
            <OfferList text="通用流量 105G" status="active" />
            <OfferList text="定向流量 30G" status="active" />
            <OfferList text="通话时长 100分钟" status="active" />
            <OfferList text="免费申请 包邮到家" status="active" />
          </PricingBox>
          <PricingBox
            packageName="移动"
            price={isMonthly ? "￥0" : "￥0"}
            duration={isMonthly ? "免费申请" : "免费申请"}
            subtitle="移动沧蕾卡"
          >
            <div className="mb-8">
              <img src="https://haokaapi.lot-ml.com/upload/ProductUpDateImage/20241008/959b3e4d17b04e498de1f5356abc98ca.jpg" alt="精选套餐" className="w-full h-auto" />
            </div>
            <OfferList text="通用流量 50G" status="active" />
            <OfferList text="定向流量 30G" status="active" />
            <OfferList text="通话时长 0分钟" status="active" />
            <OfferList text="免费包邮到家" status="active" />
          </PricingBox>
          <PricingBox
            packageName="电信"
            price={isMonthly ? "￥0" : "￥0"}
            duration={isMonthly ? "免费申请" : "免费申请"}
            subtitle="电信梦神卡"
          >
            <div className="mb-8">
              <img src="https://haokaapi.lot-ml.com/upload/ProductUpDateImage/20240902/347fe6e0e5364bf9ab8ee212e3cb1a37.jpg" alt="精选套餐" className="w-full h-auto" />
            </div>
            <OfferList text="通用流量 0分钟" status="active" />
            <OfferList text="A50G定向流量" status="active" />
            <OfferList text="30G通话时长" status="active" />
            <OfferList text="免费申请 包邮到家" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
