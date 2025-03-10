import ProductDiv from "./components/ProductDiv";
import { Link } from "react-router";
const BestSelling = () => {
  return (
    <div className="max-w-[1092px] h-[568px] mb-40 justify-self-center justify-items-center">
      <div className="h-[62px] max-w-[139px] mb-20">
        <Link to="/shop">
            <p className="mb-2 max-w-fit font-inter font-medium text-xs text-bl300 hover:text-bl600">Shop Now</p>
        </Link>
        <h2 className="font-inter max-w-fit font-bold text-2xl text-bl900">Best Selling</h2>
      </div>
      <div className="flex justify-between justify-self-center  max-w-[1092px]">
        <ProductDiv
          product={"cover.png"}
          title={"titulo camisa"}
          stock={false}
          value={26.599}
        />
        <ProductDiv
          product={"cover.png"}
          title={"titulo camisa"}
          stock={true}
          value={26.5}
        />
        <ProductDiv
          product={"cover.png"}
          title={"titulo camisa"}
          stock={true}
          value={26.5}
        />
        <ProductDiv
          product={"cover.png"}
          title={"titulo camisa"}
          stock={true}
          value={26.5}
        />
      </div>
    </div>
  );
};

export default BestSelling;
