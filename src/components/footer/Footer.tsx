import { Link } from "react-router";

const Footer = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <footer>
      {/* newsletter */}
      <div className="flex items-center h-[200px] max-w-[1440px] justify-center bg-w100">
        <div className="flex items-center px-3 max-w-[1116px] justify-between h-[82px]">
          <div className="h-18 max-w-[387px]">
            <h2 className="text-2xl max-w-fit font-bold font-inter text-bl900 mb-6">Join Our Newsletter
            </h2>
            <p className="text-sm max-w-fit text-bl500 font-inter">We love to surprise our subscribers with occasional gifts.</p>
          </div>
          <div className="h-[45px] max-w-[452px] gap-4 flex items-center justify-between">
            <input
              placeholder="Your email address"
              className="h-[45px] min-w-[320px] border border-bl100 focus:outline-none rounded-[6px] px-[15px] text-sm font-medium text-bl300  "
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="px-6 py-3 rounded-sm bg-bl900 font-inter font-medium text-sm text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* footer principal */}
      <div className="h-[443px]">
        <div className=" flex max-h-[364px] h-[364px] max-w-[1116px] justify-between justify-self-center">
          <div className="mt-[88px] max-w-[272px] h-[160px] ">
            <Link to="/" className="flex max-w-[170px]">
              <div className="flex mb-[22px] items-center gap-3 max-w-[170px]">
                <div className="bg-[url('./img/Logomark2.svg')] h-[44px] max-w-[44px] bg-center border-[1px] rounded-lg border-bl100 bg-no-repeat"></div>
                <p className="font-manrope font-extrabold text-[20px] text-b900 text-bl900">
                  Ecommerce
                </p>
              </div>
            </Link>
            <div className="font-inter text-sm text-bl500 max-w-[272px]">
              DevCut is a YouTube channel for practical project-based learning.
            </div>
            <div className="flex max-w-[120px] gap-6 mt-8">
              <a href="https://github.com/Gian-vie" target="_blank">
                <div className="bg-[url('./img/github.svg')] max-w-6 h-6 bg-no-repeat bg-center cursor-pointer"></div>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <div className="bg-[url('./img/instagram.svg')] max-w-6 h-6 bg-no-repeat bg-center cursor-pointer"></div>
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <div className="bg-[url('./img/youtube.svg')] max-w-6 h-6 bg-no-repeat bg-center cursor-pointer"></div>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto max-w-[560px] gap-[72px]">
            <div className="h-[172px] gap-10 max-w-[95px]">
              <p className="mb-10 font-inter max-w-[95px] font-medium text-sm text-bl300">
                SUPPORT
              </p>
              <ul className="font-inter max-w-[95px] font-medium text-sm text-bl500">
                <li className=" mb-4 max-w-[95px]">
                  <Link to="/">FAQ</Link>
                </li>
                <li className=" mb-4 max-w-[95px]">
                  <Link to="/">Terms of use</Link>
                </li>
                <li className=" max-w-[95px]">
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="h-[172px] gap-10 max-w-[95px]">
              <p className="mb-10 font-inter max-w-[95px] font-medium text-sm text-bl300 ">
                COMPANY
              </p>
              <ul className="font-inter max-w-[95px] font-medium text-sm text-bl500">
                <li className=" mb-4 max-w-[95px]">
                  <Link to="/">About us</Link>
                </li>
                <li className=" mb-4 max-w-[95px]">
                  <Link to="/">Contact</Link>
                </li>
                <li className=" max-w-[95px]">
                  <Link to="/">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="h-[172px] gap-10 max-w-[95px]">
              <p className="mb-10 font-inter max-w-[95px] font-medium text-sm text-bl300 ">
                SHOP
              </p>
              <ul className="font-inter max-w-[95px] font-medium text-sm text-bl500">
                <li className=" mb-4 max-w-[95px]">
                  <Link to="/perfil">My Account</Link>
                </li>
                <li className=" mb-4 max-w-[95px]">
                  <Link to="/">Checkout</Link>
                </li>
                <li className=" max-w-[95px]">
                  <Link to="/carrinho">Cart</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-[176px] h-[97px] mt-[79px]">
            <p className="font-inter max-w-[176px] font-medium text-sm text-bl300">
              ACCEPTED PAYMENTS
            </p>
            <div className="flex items-center mt-13 justify-between max-w-[176px]">
              <div className="h-8 w-auto bg-[url('./img/master.svg')] filter grayscale bg-no-repeat "></div>
              <div className="h-8 w-auto bg-[url('./img/amex.svg')] filter grayscale bg-no-repeat "></div>
              <div className="h-8 w-auto bg-[url('./img/visa.svg')] filter grayscale bg-no-repeat "></div>
            </div>
          </div>
        </div>
        {/* footer base */}
        <div className=" max-w-[1116px] h-[79px] flex items-center text-center justify-self-center border-t-[1px] border-w100">
          <p className="font-inter text-sm text-bl500">
            © 2023 DevCut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
