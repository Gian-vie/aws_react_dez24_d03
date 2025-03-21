import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

interface BreadcrumbProps {
  caminho: string;
}

const BreadcrumbDetails: React.FC<BreadcrumbProps> = ({ caminho }) => {
  return (
    <div className="w-full px-[162px] flex items-center">
      <div className="flex items-center gap-1 h-[25px] w-fit">
        <Link to="/">
          <p className="font-inter font-medium text-sm text-bl500 hover:text-bl800">
            Ecommerce
          </p>
        </Link>
        <ChevronRight color="#71747E" size={20}/>
        <p className="font-inter font-medium text-sm text-bl900">{caminho}</p>
      </div>
    </div>
  );
};

export default BreadcrumbDetails;
