import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import Header from "../components/header/Header"
import { CheckFilter } from "../components/shop/CheckFilter"
import { SearchFilter } from "../components/shop/searchFilter";

const Shop = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  return (
    <section>
      <Header />
      <Breadcrumb caminho={"Search"} />
      <div className="flex w-[1116px] justify-self-center">
      <CheckFilter handleSelectedFilters={(filters) => setSelectedFilters(filters)} />
      <SearchFilter filters={selectedFilters}/>
      </div>
    </section>
  )
}

export default Shop
