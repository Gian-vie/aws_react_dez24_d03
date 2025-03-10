import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import Header from "../components/header/Header"
import { CheckFilter } from "../components/shop/CheckFilter"

const Shop = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  return (
    <section>
      <Header />
      <Breadcrumb caminho={"Search"} />
      <CheckFilter handleSelectedFilters={(filters) => setSelectedFilters(filters)} />
      
    </section>
  )
}

export default Shop
