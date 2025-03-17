import { useEffect, useState } from "react";
import { IFormDataPayload } from "../../interface/interfaces";
import ProductDiv from "../commum/ProductDiv";

interface ICard {
    filters: string[];
  }

export function SearchFilter({filters}: ICard) {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState<IFormDataPayload[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IFormDataPayload[]>([]);
    const [page, setPage] = useState<Number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
          setFilteredProducts(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (input) {
      filtered.filter((produto) => produto.name.toLowerCase().includes(input.toLowerCase()));
      filtered = products.filter((produto: IFormDataPayload) => {
        return produto.name.toLowerCase().includes(input.toLowerCase());
      });
    }

    if (filters.length > 0) {
      filtered = filtered.filter((produto: IFormDataPayload) => {
        return filters.includes(produto.category);
      });
    }

    setFilteredProducts(filtered);
  }, [input, products, filters]);


  const handleFilterInputChange = (value: string) => {
    setInput(value);
  };

  return (
    <section className="mt-10 pb-26 px-7 w-full">
        <input
          className=""
          value={input}
          placeholder="search by name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFilterInputChange(e.target.value)
          }
        />

      <div className="justify-center mx-auto flex flex-wrap gap-6 gap-y-8">
        {filteredProducts.map((produto: IFormDataPayload) => (
          <ProductDiv produto={produto} />
        ))}
      </div>
    </section>
  );
}
