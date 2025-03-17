import { useEffect, useState } from "react";
import ProductDiv from "../commum/ProductDiv";
import { Link } from "react-router";
import { IFormDataPayload } from "../../interface/interfaces";

const BestSelling = () => {
  const [product, setProduct] = useState<IFormDataPayload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" w-[1092px] h-[568px] mb-40 justify-self-center justify-items-center">
      <div className="h-[62px]  w-[139px] mb-20">
        <Link to="/shop">
          <p className="mb-2  w-fit font-inter font-medium text-xs text-bl300 hover:text-bl600">
            Shop Now
          </p>
        </Link>
        <h2 className="font-inter  w-fit font-bold text-2xl text-bl900">
          Best Selling
        </h2>
      </div>
      <div className="flex justify-between justify-self-center w-[1092px]">
        {product.map(
          (product, index) => index < 4 && <ProductDiv produto={product} />
        )}
      </div>
    </div>
  );
};

export default BestSelling;
