import { Link } from "react-router";

const AboutDev = () => {
  return (
    <div>
      <div className="w-full h-50 relative bg-bl900 ">
        <div className="absolute overflow-hidden bg-center bg-cover bg-[url('/img/dev/gian-dev.png')] h-45 w-45 border-4 border-white rounded-full top-[107px] right-22"></div>
      </div>
      <div className="mt-20 ml-18 w-[418px]">
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
    </div>
  );
};

export default AboutDev;
