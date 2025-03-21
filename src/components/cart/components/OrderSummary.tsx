import { Link } from "react-router";
import { useAppSelector } from "../store";

export default function OrderSummary() {
  const subtotal = useAppSelector((state) => state.cart.subTotal);
  const tax = useAppSelector((state) => state.cart.tax);

  return (
    <div className="flex flex-col border font-inter border-bl100 rounded-sm px-2 py-1 w-85 h-fit gap-1">
      <h3 className="font-semibold text-bl900 text-[16px] mb-10">
        Order Summary
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-700 font-inter">Sub Total</span>
        <span className="text-gray-800 font-inter font-semibold">
          $ {subtotal.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center  justify-between">
        <span className="text-gray-700">Frete</span>
        {subtotal > 100 ? (
          <span className="text-gray-800 font-inter font-semibold">$ Free</span>
        ) : (
          <span className="text-gray-800 font-inter font-semibold">
            $ {tax.toFixed(2)}
          </span>
        )}
      </div>
      <div className="border-b border-gray-400 w-full my-5"></div>
      <div className="flex items-center justify-between">
        <span className="text-gray-700 ">Total</span>
        <span className="text-gray-800 font-semibold">
          {subtotal > 100 ? (
            <span className="text-gray-800 font-inter font-semibold">
              $ {subtotal.toFixed(2)}
            </span>
          ) : (
            <span className="text-gray-800 font-inter font-semibold">
              $ {(subtotal + tax).toFixed(2)}
            </span>
          )}
        </span>
      </div>
      <Link to="/after-payment" className="justify-self-center mx-auto">
        <button>
          <div className="mt-8 flex items-center justify-center w-[284px] h-11 mx-auto px-6 py-3 rounded-sm gap-1.5 bg-bl900">
            <p className="text-white text-sm font-inter font-medium">
              Checkout
            </p>
          </div>
        </button>
      </Link>
    </div>
  );
}
