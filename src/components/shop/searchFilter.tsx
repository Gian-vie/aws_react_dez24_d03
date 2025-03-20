import { useEffect, useState } from "react";
import { IFormDataPayload } from "../../interface/interfaces";
import ProductDiv from "../commum/ProductDiv";

interface ICard {
  filters: string[];
  onGetMaxPrice: (maxPrice: number) => void;
  price: number
}

export function SearchFilter({ filters, onGetMaxPrice, price }: ICard) {
  console.log("🚀 ~ SearchFilter ~ price:", price)
  const [input, setInput] = useState("");
  const [products, setProducts] = useState<IFormDataPayload[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IFormDataPayload[]>(
    []
  );
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products?_page=${page}&_per_page=9`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setProducts(data.data);
          setFilteredProducts(data.data);
          setMaxPages(data.pages);
          let maxPrice = 0;
          for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].price > maxPrice) {
              maxPrice = data.data[i].price;
            }
          }
          onGetMaxPrice(maxPrice + 10);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    let filtered = products;
    console.log("🚀 ~ useEffect ~ filtered:", filtered)

    if (input) {
      filtered.filter((produto) =>
        produto.name.toLowerCase().includes(input.toLowerCase())
      );
      filtered = products.filter((produto: IFormDataPayload) => {
        return produto.name.toLowerCase().includes(input.toLowerCase());
      });
    }

    if (filters.length > 0) {
      filtered = filtered.filter((produto: IFormDataPayload) => {
        return filters.includes(produto.category);
      });
    }

    if (price > 0){
      filtered = filtered.filter((produto: IFormDataPayload) => {
        return produto.price <= price + 10
      });
    }

    setFilteredProducts(filtered);
  }, [input, products, price , filters]);

  const handleFilterInputChange = (value: string) => {
    setInput(value);
  };

  const HandlePrev = () => {
    if (1 < page) {
      setPage(page - 1);
    }
  };
  const HandleNext = () => {
    if (maxPages > page) {
      setPage(page + 1);
    }
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
      <p>
        page {page} de {maxPages}
      </p>
      <div className="justify-center mx-auto flex flex-wrap gap-6 gap-y-8">
        {filteredProducts?.map((produto: IFormDataPayload) => (
          <ProductDiv produto={produto} />
        ))}
      </div>
      <button onClick={HandlePrev}>prev</button>
      <p>{page}</p>
      <button onClick={HandleNext}>next</button>
    </section>
  );
}
