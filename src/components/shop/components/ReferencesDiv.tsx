import { useEffect, useState } from "react";
import { IFormDataPayload } from "../../../interface/interfaces";
import ProductDiv from "../../commum/ProductDiv";

interface IReferences {
  product: IFormDataPayload;
}

export function ReferencesDiv({ product }: IReferences) {
  const related = product.relatedProducts;
  console.log("🚀 ~ ReferencesDiv ~ related:", related);
  const [relatedData, setRelatedData] = useState<IFormDataPayload[]>([]);
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
          let relatedData: IFormDataPayload[] = [];
          console.log("🚀 ~ fetchData ~ relatedData:", relatedData);
          response
            .json()
            .then((data) => {
              if (related) {
                for (let i = 0; i < data.length; i++) {
                  for (let y = 0; y < related.length; y++) {
                    if (data[i].id == related[y]) {
                      relatedData.push(data[i]);
                    }
                  }
                }
              }
              setRelatedData(relatedData)
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [related]);
  return (
    <div className="h-[559px] w-[1092px] justify-self-center mb-[144px]">
      <h1 className="font-inter font-bold text-b900 text-2xl">You might also like</h1>
      <p className="font-inter uppercase font-medium text-xs text-bl500 mt-2 mb-14">SIMILAR PRODUCTS</p>
      <div className="grid grid-cols-4 gap-5">
          {relatedData.map((related) => (
              <ProductDiv produto={related} />
          ))}
      </div>
    </div>
  );
}
