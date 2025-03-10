interface IProductsProps {
  product: string;
  title: string;
  stock: boolean;
  value: number;
}

const ProductDiv: React.FC<IProductsProps> = ({
  product,
  title,
  stock,
  value,
}) => {
  return (
    <div className=" w-64 h-[434px] px-2 py-4">
      <div className="flex items-center justify-items-center overflow-hidden  w-60 h-[312px] bg-w100 rounded-sm">
        <img 
          src={`../../../img/${product}`}
          alt="produto"
        />
      </div>
      <div className="mt-[25px] h-[65px]  w-60">
        <h2 className="font-inter mb-3.5 font-medium text-sm text-bl900  w-fit">
          {title}
        </h2>
        <div className="flex gap-4 items-center  w-60">
          <p className="px-4 py-1.5 rounded-full border border-bl100  w-fit font-inter font-medium text-xs text-bl900">
            {stock ? "IN STOCK" : "OUT STOCK"}
          </p>
          <p className=" w-fit font-inter text-sm text-bl600">
            ${value.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDiv;
