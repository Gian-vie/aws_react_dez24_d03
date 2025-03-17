import { useEffect, useState } from "react";
import ProductDiv from "../commum/ProductDiv";
import { IFormDataPayload } from "../../interface/interfaces";

const Offer = () => {
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
    <div className="w-[1116px] h-[497px] mb-[176px] justify-self-center justify-items-center">
      <p className="px-4 py-1.5 mb-12 rounded-full border border-bl100  w-fit font-inter font-medium text-xs text-bl900">
        On Offer
      </p>
      <div className="flex justify-between justify-self-center w-[1092px]">
      {product.map(
          (product, index) => (index > 4 && index < 9) && <ProductDiv produto={product} />
        )}
      </div>
    </div>
  );
};

export default Offer;
