import { Minus, Plus, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store";
import { cartSlice } from "../cartRedex";

export default function CartListItems() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="flex flex-col font-inter w-full gap-2">
      {items?.map((item) => (
        <div className="flex w-full items-center justify-between" key={item.id}>
          <img
            src={item.imageURL[0]}
            alt={item.name}
            className="w-20 h-20 bg-w100 1object-cover"
          />
          <div>
            <div className="text-xl">{item.name}</div>
            <p className="flex items-center font-inter font-medium text-xs text-bl500 ">
              Color: <div className={`w-3 h-3 rounded-full mx-2 ${item.color}`} />—
             Size: <div className="mx-2">{item.size}</div>
            </p>
          </div>
          <div className=" flex items-center gap-8">
          <span className="text-sm font-inter font-medium text-bl900">$ {item.price.toFixed(2)}</span>
          <div className="flex items-center justify-around rounded-sm border w-[107px] border-bl100">
            <button
              onClick={() =>
                dispatch(cartSlice.actions.decrementQtdItem(item.id))
              }
              className="h-10 w-10 flex justify-center items-center  cursor-pointer"
            >
              <Minus size={16} color="#5C5F6A" />
            </button>
            <span>{item.qtd}</span>
            <button
              onClick={() =>
                dispatch(cartSlice.actions.incrementQtdItem(item.id))
              }
              className="h-10 w-10 flex justify-center items-center  cursor-pointer"
            >
              <Plus size={16} color="#5C5F6A" />
            </button>
          </div>
          <button
            onClick={() =>
              dispatch(cartSlice.actions.removeItemFromCart(item.id))
            }
            className="h-10 w-10 flex justify-center items-center bg-w100 cursor-pointer rounded-sm"
          >
            <X size={18} />
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
