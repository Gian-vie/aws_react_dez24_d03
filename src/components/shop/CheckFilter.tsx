import { useEffect, useState } from "react";

type Category = {
  key: string;
  name: string;
  isChecked: boolean;
};

interface ISideMenu {
  handleSelectedFilters: (filter: string[]) => void;
  maxPrice: number;
  onGetPrice: (price: number) => void;
}

export function CheckFilter({
  handleSelectedFilters,
  maxPrice,
  onGetPrice,
}: ISideMenu) {
  const [price, setPrice] = useState<number>(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const categories: Category[] = [
    {
      key: "Perfume",
      name: "Perfume",
      isChecked: selectedFilters.find((filter) => filter === "Perfume")
        ? true
        : false,
    },
    {
      key: "Trousers",
      name: "Trousers",
      isChecked: selectedFilters.find((filter) => filter === "Trousers")
        ? true
        : false,
    },
    {
      key: "Shoe",
      name: "Shoe",
      isChecked: selectedFilters.find((filter) => filter === "Shoe")
        ? true
        : false,
    },
    {
      key: "Handbag",
      name: "Handbag",
      isChecked: selectedFilters.find((filter) => filter === "Handbag")
        ? true
        : false,
    },
    {
      key: "Hat",
      name: "Hat",
      isChecked: selectedFilters.find((filter) => filter === "Hat")
        ? true
        : false,
    },
    {
      key: "Thermos",
      name: "Thermos",
      isChecked: selectedFilters.find((filter) => filter === "Thermos")
        ? true
        : false,
    },
  ];

  const handleCheckboxChange = (category: Category) => {
    if (selectedFilters.includes(category.key)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== category.key)
      );
    } else {
      setSelectedFilters([...selectedFilters, category.key]);
    }
  };

  useEffect(() => {
    handleSelectedFilters(selectedFilters);
  }, [selectedFilters]);

  const handlePriceChange = (e: any) => {
    setPrice(Number(e.target.value));
    onGetPrice(price);
  };

  return (
    <div className="h-[535px] w-[248px] mt-8 pt-6 pr-3 pb-8 pl-4 border border-bl100">
      <div className="">
        <p className="font-inter font-medium text-sm text-bl900">Categoria</p>
        <div className="grid grid-cols-2 md:flex md:flex-col mt-4 mr-4 mb-10">
          {categories.map((category) => (
            <div
              key={category.key}
              className="flex items-center h-[49px] border-b border-w200 gap-2"
            >
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-bl800 border rounded-lg border-bl100 cursor-pointer flex shrink-0"
                onClick={() => handleCheckboxChange(category)}
              />
              <p className="text-bl600 font-inter font-normal text-[16px]">
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <div className="relative w-full justify-center items-center">
        <p className="font-inter font-medium text-sm text-bl900">Price</p>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={price}
            step="10"
            onChange={handlePriceChange}
            className="mt-6 mb-3 w-full appearance-none bg-bl100 h-1 rounded-lg outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-6 
          [&::-webkit-slider-thumb]:h-6 
          [&::-webkit-slider-thumb]:bg-bl900
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:border-3
          [&::-webkit-slider-thumb]:border-white" 
          />
          <div
            className="absolute text-white text-xs px-2 py-1 font-inter font-medium rounded-sm bg-bl900 w-fit"
            style={{
              left: `calc(${(price / 200) * 100}% - 25px)`
            }}
          >
            ${price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
