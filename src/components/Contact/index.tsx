import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl text-center">
                微信二维码
              </h2>
              <p className="mb-12 text-base font-medium text-body-color text-center">
                扫描二维码，直接与我们联系。
              </p>
              <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <img src="/images/about/gzh.png" alt="微信二维码" className="w-1/2 rounded-sm shadow-three dark:shadow-none mx-4 mb-4" style={{ width: '200px', height: '200px' }} />
                    <p className="mb-4">微信二维码</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/images/about/gzh.png" alt="公众号二维码" className="w-1/2 rounded-sm shadow-three dark:shadow-none mx-4 mb-4" style={{ width: '200px', height: '200px' }} />
                    <p>公众号二维码</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-row items-center justify-center">
                  <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark mr-4">
                    提交工单
                  </button>
                  <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    联系我们
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
