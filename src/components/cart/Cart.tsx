import Footer from "../footer/Footer";
import CartListItems from "./components/CartListItems";
import OrderSummary from "./components/OrderSummary";
import SearchCEP from "./components/SearchCEP";

function Cart() {
  return (
    <div>
      <div className="w-270 h-screen mx-auto p-10 flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[16px] font-inter font-semibold text-bl900 border-b border-b-w200 py-4 w-full">
            Your cart
          </h2>
          <div className="flex gap-20">
            <CartListItems />
            <div className="flex flex-col gap-2">
              <SearchCEP />
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
