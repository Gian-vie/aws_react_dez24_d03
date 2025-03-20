import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Header from "../components/header/Header";
import { CheckFilter } from "../components/shop/CheckFilter";
import { SearchFilter } from "../components/shop/searchFilter";

const Shop = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <section>
      <Header />
      <Breadcrumb caminho={"Search"} />
      <div className="flex w-[1116px] justify-self-center">
        <CheckFilter
          maxPrice={maxPrice}
          handleSelectedFilters={(filters) => setSelectedFilters(filters)}
          onGetPrice={(price: number) => setPrice(price)}
        />
        <SearchFilter
          price={price}
          onGetMaxPrice={(maxPrice: number) => setMaxPrice(maxPrice)}
          filters={selectedFilters}
        />
      </div>
    </section>
  );
};

export default Shop;
