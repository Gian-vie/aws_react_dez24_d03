import { useEffect, useState } from "react";
import { IFormDataPayload } from "../../interface/interfaces";
import ProductDiv from "../commum/ProductDiv";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface ICard {
  filters: string[];
  onGetMaxPrice: (maxPrice: number) => void;
  price: number;
}

export function SearchFilter({ filters, onGetMaxPrice, price }: ICard) {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState<IFormDataPayload[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IFormDataPayload[]>(
    []
  );
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);
  const [jsonItens, setJsonItens] = useState<number>(0);
  const [minOfPage, setMinOfPage] = useState<number>(1);
  const [maxOfPage, setMaxOfPage] = useState<number>(9);

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
          setJsonItens(data.items);
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

    if (price > 0) {
      filtered = filtered.filter((produto: IFormDataPayload) => {
        return produto.price <= price + 10;
      });
    }

    setFilteredProducts(filtered);
  }, [input, products, price, filters]);

  const handleFilterInputChange = (value: string) => {
    setInput(value);
  };

  const HandlePrev = () => {
    if (1 < page) {
      setPage(page - 1);
      setMinOfPage(minOfPage - 9);
      if (page === maxPages) {
        setMaxOfPage(maxOfPage - (jsonItens % 9));
      } else {
        setMaxOfPage(maxOfPage - 9);
      }
    }
  };
  const HandleNext = () => {
    if (maxPages > page) {
      setPage(page + 1);
      setMinOfPage(minOfPage + 9);
      if (maxOfPage + 9 > jsonItens) {
        setMaxOfPage(maxOfPage + (jsonItens % 9));
      } else {
        setMaxOfPage(maxOfPage + 9);
      }
    }
  };

  return (
    <section className="mt-10 pb-26 px-7 w-full">
      <div className="flex ml-[29px] mb-6 w-[813px] items-end justify-end">
        <div className="h-[45px] w-[264px] py-[10px] focus:outline-none border border-bl100 rounded-md flex items-center">
          <Search color="#878A92" className="ml-[10px]" />
          <input
            className="h-[45px] w-full focus:outline-none px-[15px] text-bl300 text-sm font-inter font-medium"
            value={input}
            placeholder="Search products"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFilterInputChange(e.target.value)
            }
          />
        </div>
      </div>
      <p className="font-inter font-medium text-xs text-bl500 ml-[29px]">
        Showing {minOfPage}-{maxOfPage} of {jsonItens} results.
      </p>
      <div className="justify-center mx-auto flex flex-wrap gap-6 gap-y-8">
        {filteredProducts?.map((produto: IFormDataPayload) => (
          <ProductDiv produto={produto} />
        ))}
      </div>
      <div className="flex justify-between items-center border border-bl100 rounded-md px-2 mx-auto mt-16 mb-32 w-[152px] h-11 gap-2">
        <h3 onClick={HandlePrev} className="h-10 w-10 flex items-center justify-center"><ChevronLeft /></h3>
        <p className="w-10 h-8 bg-w100 rounded-sm flex items-center justify-center font-medium font-inter text-xs text-bl900">{page}</p>
        <h3 onClick={HandleNext} className="h-10 w-10 flex items-center justify-center"><ChevronRight /></h3>
      </div>
    </section>
  );
}
