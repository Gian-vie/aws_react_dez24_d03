import { useAppSelector } from "../store";

export default function CartCounter() {
  const count = useAppSelector((state) => state.cart.count);

  return (
    <button className="cursor-pointer relative">
      <div className="bg-[url('./img/carrinho.svg')] w-[20px] h-[20px] bg-no-repeat bg-center"></div>

      {count > 0 && (
        <span className="bg-red-600 text-white text-xs absolute rounded-full flex items-center justify-center -bottom-4 -right-4 w-5 h-5">
          {count}
        </span>
      )}
    </button>
  );
}