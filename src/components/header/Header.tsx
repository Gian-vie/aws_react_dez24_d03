import { Link, NavLink } from "react-router";

const Header = () => {
  // testes
  let temItem: boolean = true;
  let quanItem: number = 5;
  let isLogued: boolean = false;

  return (
    <header>
      <div className="flex bg-bl900 w-full h-10 text-white font-inter">
        <p className="m-auto">Get 25% OFF on your first order. Order Now</p>
      </div>
      <div className="grid grid-cols-2 items-center h-[84px] w-[1116px] px-3 border-b border-w100 mx-auto justify-self-center ">
        <div className="col-span-1 flex h-10 w-[552px] gap-[103px]">
          <Link to="/" className="flex w-[170px]">
            <div className="flex items-center gap-3 w-[170px]">
              <div className="bg-[url('./img/Logomark1.svg')] h-10 w-10 bg-no-repeat"></div>
              <p className="font-manrope font-extrabold text-[20px] text-b900 text-bl900">
                Ecommerce
              </p>
            </div>
          </Link>
          <ul className="flex relative gap-8 w-[180px] items-center font-inter ">
            <li className="font-inter text-[14px] hover:scale-110 transition-transform duration-200 easy-in-out">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-bl800 hover:text-bl500"
                    : "text-bl500 hover:text-bl800"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-inter text-[14px] hover:scale-110 transition-transform duration-200 easy-in-out">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-bl800 hover:text-bl500"
                    : "text-bl500 hover:text-bl800"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="font-inter text-[14px] hover:scale-110 transition-transform duration-200 easy-in-out">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-bl800 hover:text-bl500"
                    : "text-bl500 hover:text-bl800"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex relative items-center justify-self-end justify-between h-10 w-[74px]">
          <Link to="/carrinho" className="w-[20px]">
            <div className="bg-[url('./img/carrinho.svg')] w-[20px] h-[20px] bg-no-repeat bg-center">
              {temItem && (
                <div className="absolute w-[15px] left-[12px] top-[23px]">
                  <p className="bg-r900 w-[15px] h-[15px] rounded-full text-[10px] text-white text-center">
                    {quanItem}
                  </p>
                </div>
              )}
            </div>
          </Link>
          <Link to="/perfil" className="w-[20px]">
            {isLogued ? (
              <div></div>
            ) : (
              <div className="bg-[url('./img/userOff.svg')] w-[20px] h-[20px] bg-no-repeat bg-center"></div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
