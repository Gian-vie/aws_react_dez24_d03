
const AboutDev = () => {
  return (
    <div>
      <div className="w-full h-50 relative bg-bl900 ">
      <div className="absolute overflow-hidden bg-center bg-cover bg-[url('/img/dev/gian-dev.png')] h-45 w-45 border-4 border-white rounded-full top-[107px] right-[162px]"></div>
      <div className="absolute overflow-hidden bg-center bg-cover bg-[url('/img/dev/coffee.png')] h-32 w-30 top-7 left-[190px]"></div>
      </div>
      <div className="mt-20 mb-[65px] ml-[162px] w-[418px]">
        <h1 className="font-manrope font-extrabold text-2xl text-bl900">
          ArrayMart
        </h1>
        <p className="font-manrope font-medium my-6 text-sm text-bl800">
          Hey there 👋 I'm Gian! Software developer since 2024, Passionate about
          crafting user experiences and transforming ideas into polished
          products.
        </p>
        <ul className="w-[320px] mb-8 font-inter font-bold text-sm gap-4">
          <li className="mb-4">
            <p>
              For inquiries:
              <a href="/" className="font-normal underline">
                gianvieceli@gmail.com
              </a>
            </p>
          </li>
          <li className="mb-4">
            <p>
              Live Website:
              <a href="/" className="font-normal underline">
                ecommerce.com
              </a>
            </p>
          </li>
          <li className="mb-4">
            <p>
              Live Admin:
              <a href="/" className="font-normal underline">
                ecommerce-admin.anorouzi.com
              </a>
            </p>
          </li>
        </ul>
        <div className="h-[49px] w-[176px] bg-no-repeat bg-center bg-[url('/img/bmc-button.svg')]"></div>
      </div>
      <div className="h-[104px] w-full flex items-center justif-center bg-w100 border border-w200">
        <ul className="m-auto w-[392px] h-[25px] flex items-center justify-between">
          <li className="flex gap-3">
            <img src="/img/globe.svg" alt="github" />
            <a
              href="https://github.com/Gian-vie"
              className="font-manrope font-medium text-sm text-bl500 underline"
            >              
            Gian-vie
            </a>
          </li>
          <li className="flex gap-3">
            <img src="/img/linkedin.svg" alt="github" />
            <a
              href="https://www.linkedin.com/in/gian-v-354356205/"
              className="font-manrope font-medium text-sm text-bl500 underline"
            >              
            Gian V
            </a>
          </li>
          <li className="flex gap-3">
            <img src="/img/figma.svg" alt="github" />
            <a
              href="https://www.figma.com/design/5UZJJ8ov2jTbD1QEZoLtMz/Ecommerce-(Community)?node-id=1674-2029&p=f&t=A62vrceFRdkBV0MK-0"
              className="font-manrope font-medium text-sm text-bl500 underline"
            >              
            Ecommerce
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDev;
