import { useState } from "react";
import Header from "../components/header/Header";
import { CheckFilter } from "../components/shop/CheckFilter";
import { SearchFilter } from "../components/shop/searchFilter";
import Footer from "../components/footer/Footer";
import BreadcrumbShop from "../components/Breadcrumb/BreadcrumbShop";

const Shop = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <section>
      <Header />
      <BreadcrumbShop caminho={"Search"} />
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
      <Footer />
    </section>
  );
};

export default Shop;
