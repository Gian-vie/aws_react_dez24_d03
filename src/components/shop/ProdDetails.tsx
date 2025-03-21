import { useParams } from "react-router";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { IFormDataPayload } from "../../interface/interfaces";
import DetailsDiv from "./components/DetailsDiv";
import { DescriptionDiv } from "./components/DescriptionDiv";
import Footer from "../footer/Footer";

export function ProdDetails () {
  const [product, setProduct] = useState<IFormDataPayload>({
    name: "",
    category: "",
    description: "",
    colors: [],
    sizes: [],
    price: 0,
    inStock: false,
    reviews: 0,
    imageURL: "",
    relatedProducts:[],
  });

  const urlParams = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${urlParams.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("🚀 ~ fetchData ~ response:", response)

        if (response.ok) {
          response
            .json()
            .then((data) => {
              setProduct(data);
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
  }, []);

  return (
    <div>
      <Header />
      <DetailsDiv product={product} />
      <DescriptionDiv product={product.description} />
      <Footer />
    </div>
  );
};

export default ProdDetails;
