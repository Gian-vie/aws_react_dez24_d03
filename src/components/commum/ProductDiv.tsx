import { Link } from "react-router";

interface IProductsProps {
  produto: {
    id: string;
    productId: string;
    name: string;
    category: string;
    description: string;
    colors: string[];
    sizes: string[];
    price: number;
    inStock: boolean;
    reviews: number;
    imageURL: string;
  };
}

const ProductDiv: React.FC<IProductsProps> = ({ produto }) => {
  return (
    <div className=" w-64 h-[434px] px-2 py-4">
      <div className="flex items-center justify-items-center overflow-hidden w-60 h-[312px] bg-w100 rounded-sm">
        <Link to="/detail">
          <img src={produto.imageURL[0]} alt="produto" />
        </Link>
      </div>
      <div className="mt-[25px] h-[65px]  w-60">
        <h2 className="font-inter mb-3.5 font-medium text-sm text-bl900  w-fit">
          {produto.name}
        </h2>
        <div className="flex gap-4 items-center  w-60">
          <p className="px-4 py-1.5 rounded-full border border-bl100  w-fit font-inter font-medium text-xs text-bl900">
            {produto.inStock ? "IN STOCK" : "OUT STOCK"}
          </p>
          <p className=" w-fit font-inter text-sm text-bl600">
            ${produto.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDiv;
