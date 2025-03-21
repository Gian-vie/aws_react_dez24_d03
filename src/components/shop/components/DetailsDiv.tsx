import { IFormDataPayload } from "../../../interface/interfaces";
import BreadcrumbDetails from "../../Breadcrumb/BreadcrumbDetails";
import { Share2, Star } from "lucide-react";
import AddProduct from "./AddProduct";
import { ImagensDiv } from "./ImagensDiv";

interface IDetails {
  product: IFormDataPayload;
}

export function DetailsDiv({ product }: IDetails) {
  return (
    <div>
      <div className="justify-center mc-4">
        <BreadcrumbDetails caminho={product.name} />
      </div>
      <div className="mx-auto flex items-center justify-between h-[574px] w-[1092px]">
        <div className="w-[534px] h-full bg-w100">
            <ImagensDiv product={product.imageURL}/>
        </div>
        <div className="w-[434px] h-[562px]">
          <div className="flex w-full justify-between my-3">
            <div className="font-bold font-inter text-2xl text-bl900">
              {product.name}
            </div>
            <div>
              <Share2 color="#5C5F6A" />
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="rounded-full flex items-center gap-2 w-fit h-7 bg-w100 px-4 py-0.5">
              <Star color="#5C5F6A" size={18} />
              <p className="font-inter font-medium text-xs text-bl500 ">
                {product.reviews} — {product.reviews * 10} Reviews{" "}
              </p>
            </div>
            <div className="rounded-full flex items-center px-4 w-fit h-7 border border-bl100 font-inter font-medium text-xs text-bl500">
              {product.inStock ? "IN STOCK" : "OUT STOCK"}
            </div>
          </div>
          <div className="font-inter font-semibold text-lg text-bl900 mt-6">${(product.price).toFixed(2)}</div>
          {product.inStock && <AddProduct key={product.id} product={product} />}
        </div>
      </div>
    </div>
  );
}

export default DetailsDiv;
