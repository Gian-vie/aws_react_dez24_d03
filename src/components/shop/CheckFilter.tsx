import { useEffect, useState } from "react";

type Category = {
    key: string;
    name: string;
    isChecked: boolean;
  };
  
  interface ISideMenu {
    handleSelectedFilters: (filter: string[]) => void
  }
  
  export function CheckFilter({handleSelectedFilters}: ISideMenu) {
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
    ]

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
        handleSelectedFilters(selectedFilters)
      },[selectedFilters])

  return (
    <div className="h-[535px] w-[248px] pt-6 pr-3 pb-8 pl-4 border border-bl100">
        <div className="">
            <p className="font-inter font-medium text-sm text-bl900">Categoria</p>
        <div className="grid grid-cols-2 md:flex md:flex-col mt-4 mr-4 mb-10">
            {categories.map((category) => (
              <div key={category.key} className="flex items-center h-[49px] border-b border-w200 gap-2">
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
        </div>
    </div>
  )
}

