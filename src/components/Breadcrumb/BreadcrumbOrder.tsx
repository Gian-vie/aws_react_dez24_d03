import { Link } from "react-router";

interface BreadcrumbProps {
  caminho: string;
}

const BreadcrumbOrder: React.FC<BreadcrumbProps> = ({ caminho }) => {
  return (
    <div className="w-full h-[174px] py-[49px] px-[162px] bg-g100">
      <h1 className="h-29px mb-2 font-inter font-bold text-2xl text-bl900">
        {caminho}
      </h1>
      <div className="flex items-center gap-1 h-[25px] w-fit">
        <Link to="/">
          <p className="font-inter font-medium text-sm text-bl500 hover:text-bl800">
            Ecommerce
          </p>
        </Link>
        <div className="h-6 w-6 bg-center bg-no-repeat bg-[url('./img/rigtGray.svg')]"></div>
        <p className="font-inter font-medium text-sm text-bl900">{caminho}</p>
      </div>
    </div>
  );
};

export default BreadcrumbOrder;
