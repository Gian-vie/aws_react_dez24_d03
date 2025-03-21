import { Ellipsis } from "lucide-react"

interface IDescription {
    product: string
}
export function DescriptionDiv ({product}:IDescription){
    return(
        <div className="grid grid-cols-3 mt-[176px] w-[1116px]">
            <div className="flex items-center justify-center px-6 h-[41px] w-[241px] bg-w100 rounded-lg"><p className="flex gap-2.5 text-bl900 text-sm font-inter font-medium"><Ellipsis strokeWidth={1.3}/>Details</p></div>
            <div className="col-span-2 flex items-center justify-center">ad</div>
        </div>
    )
}