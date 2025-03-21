import { useCallback, useState } from "react";
import { useAppDispatch } from "../../cart/store";
import { CartItem, IFormDataPayload } from "../../../interface/interfaces";
import { cartSlice } from "../../cart/cartRedex";
import { Minus, Plus } from "lucide-react";

interface IAddProd {
  product: IFormDataPayload;
}

export default function AddProduct({ product }: IAddProd) {
  const dispatch = useAppDispatch();

  const [productId, setProductId] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [qtd, setQtd] = useState<number>(1);
  const [empty, setEmpty] = useState<boolean>(false);

  const getCartItemInfo = useCallback(() => {
    if (!product) return;

    const cartItem: CartItem = {
      id: Math.random().toString(36).substring(2),
      productId,
      name: product!.name,
      imageURL: product!.imageURL,
      price: product!.price,
      qtd,
      color,
      size,
    };

    return cartItem;
  }, [productId, qtd, color, size]);

  const handleMinus = () => {
    if (qtd > 1) {
      setQtd(qtd - 1);
    }
  };
  const handlePlus = () => {
    setQtd(qtd + 1);
  };

  return (
    <div>
      <div className="w-[152px] h-19 mt-8">
        <p className="font-inter uppercase font-medium text-xs text-bl500">
          Available Colors
        </p>
        <div className="flex gap-2.5">
          {product.colors.map((col) => (
            <button
              key={col}
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                color === col ? "border-bl900" : "border-transparent"
              }`}
              onClick={() => setColor(col)}
            >
              <div className={`w-6 h-6 rounded-full ${col}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="w-[152px] h-19 mt-4">
        <p className="font-inter uppercase font-medium text-xs text-bl500">
          Select Size
        </p>
        <div className="flex gap-2.5">
          {product.sizes.map((element) => (
            <button
              key={element}
              className={`w-10 h-10 rounded-sm border-2 flex items-center justify-center ${
                size == element ? "border-bl900" : "border-bl100"
              }`}
              onClick={() => setSize(element)}
            >
              <div className="font-inter uppercase font-medium text-xs text-bl500">
                {element}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-[152px] mb-10 h-19 mt-8">
        <p className="font-inter uppercase font-medium text-xs text-bl500">
          Quantity
        </p>
        <div className="mt-2.5 flex items-center justify-between gap-8 px-4 h-11 border rounded-sm border-bl100">
          <button
            onClick={handleMinus}
            className="h-5 w-5 flex justify-center items-center cursor-pointer"
          >
            <Minus size={20} color="#5C5F6A" />
          </button>
          <p className="font-inter uppercase font-medium text-xs text-bl500">
            {qtd}
          </p>
          <button
            onClick={handlePlus}
            className="h-5 w-5 flex justify-center items-center  cursor-pointer"
          >
            <Plus size={20} color="#5C5F6A" />
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          if (color != "" && size != "") {
            setEmpty(false);
            const cartItem = getCartItemInfo();
            if (cartItem) {
              setProductId("");
              setColor("");
              setSize("");
              setQtd(1);
              dispatch(cartSlice.actions.addItemToCart(cartItem));
            }
          } else {
            setEmpty(true);
          }
        }}
        type="button"
      >
        <div className="flex items-center justify-center w-[284px] h-11 mx-auto px-6 py-3 rounded-sm gap-1.5 bg-bl900">
          <p className="text-white text-sm font-inter font-medium">
            Add to cart
          </p>
        </div>
        <p
          className={`text-red-600 rounded-b-2xl transition-color duration-200 ${
            empty ? "bg-red-200 " : "bg-white text-white"
          }`}
        >
          Please select size and color
        </p>
      </button>

      <div className="uppercase text-bl500 text-xs font-inter font-medium">
        — Free shipping on orders $100+
      </div>
    </div>
  );
}
