import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IImageDiv {
  product: string;
}

export function ImagensDiv({ product }: IImageDiv) {
  const [img, setImg] = useState(0);


  const HandlePrev = () => {
    if (0 < img) {
      setImg(img - 1);
    }
  };
  const HandleNext = () => {
    if (img < product.length - 1) {
        setImg(img + 1);
      }
  };

  return (
    <div className=" h-[574px] w-[534px]">
        <div className="h-[534px] max-h-[534px] max-w-[534px] flex items-center justify-center">
      <img src={`${product[img]}`} alt="product image" className="w-fit h-fit max-h-[534px] max-w-[534px]" />
        </div>
      <div className=" h-10 flex justify-self-end items-center w-full">
        <h3
          onClick={HandlePrev}
          className="h-10 w-[33%] flex items-center justify-center"
        >
          <ChevronLeft color="#5C5F6A"/>
        </h3>
        <p className="w-[33%] h-8 bg-w200 rounded-full flex items-center justify-center font-medium font-inter text-sm text-bl900">
          {img + 1} / {product.length}
        </p>
        <h3
          onClick={HandleNext}
          className="h-10 w-[33%] flex items-center justify-center"
        >
          <ChevronRight color="#5C5F6A"/>
        </h3>
      </div>
    </div>
  );
}
