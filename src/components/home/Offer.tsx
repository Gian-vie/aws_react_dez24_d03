import ProductDiv from "../commum/ProductDiv";

const Offer = () => {
  return (
    <div className="w-[1116px] h-[497px] mb-[176px] justify-self-center justify-items-center">
      <p className="px-4 py-1.5 mb-12 rounded-full border border-bl100  w-fit font-inter font-medium text-xs text-bl900">
        On Offer
      </p>
      <div className="flex justify-between justify-self-center w-[1092px]">
        <ProductDiv
          imageURL={"/public/img/cover.png"}
          title={"titulo camisa"}
          stock={false}
          value={26.599}
        />
        <ProductDiv
          imageURL={"/public/img/cover.png"}
          title={"titulo camisa"}
          stock={true}
          value={26.5}
        />
        <ProductDiv
          imageURL={"/public/img/cover.png"}
          title={"titulo camisa"}
          stock={false}
          value={26.599}
        />
        <ProductDiv
          imageURL={"/public/img/cover.png"}
          title={"titulo camisa"}
          stock={true}
          value={26.5}
        />
      </div>
    </div>
  );
};

export default Offer;
