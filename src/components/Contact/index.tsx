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
                <div className="flex flex-wrap justify-center">
                  <div className="flex flex-col items-center justify-center m-4">
                    <img src="/images/about/wx.png" alt="微信二维码" className="w-full max-w-[200px] h-auto rounded-sm shadow-three dark:shadow-none mb-4" />
                    <p className="mb-4">微信二维码</p>
                  </div>
                  <div className="flex flex-col items-center justify-center m-4">
                    <img src="/images/hero/qfwl.png" alt="公众号二维码" className="w-full max-w-[200px] h-auto rounded-sm shadow-three dark:shadow-none mb-4" />
                    <p>公众号二维码</p>
                  </div>
                </div>
                {/* <div className="mt-4 flex flex-row items-center justify-center">
                  <a href="https://haoka.lot-ml.com/plugregper.html?agentid=90925" target="_blank" rel="noopener noreferrer" className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark mr-4">
                   立即注册
                  </a>
                  <a href="https://haoka.lot-ml.com/" target="_blank" rel="noopener noreferrer" className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    免费领卡
                  </a>
                </div> */}
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
