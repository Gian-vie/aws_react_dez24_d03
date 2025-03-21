import { Ellipsis } from "lucide-react"
import { IFormDataPayload } from "../../../interface/interfaces"

interface IDescription {
    product: IFormDataPayload
}
export function DescriptionDiv ({product}:IDescription){
    console.log("🚀 ~ DescriptionDiv ~ product:", product)
    return(
        <div className="grid grid-cols-3 gap-8 my-[176px] w-[1116px] justify-self-center">
            <div className="flex items-center h-[125px] justify-end"><p className="flex items-center gap-2.5 px-6 h-[41px] w-[241px] bg-w100 rounded-lg text-bl900 text-sm font-inter font-medium"><Ellipsis strokeWidth={1.3}/>Details</p></div>
            <div className="col-span-2 h-fit w-[727px]">
                <h1 className="font-inter font-semibold text-[16px] text-bl900 mb-6">Detail</h1>
                <p className="font-inter text-bl500 text-sm">{product.description}</p>
            </div>
        </div>
    )
}