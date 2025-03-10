import ButtonShop from "../buttons/ButtonShop";

const MiddleBanner = () => {
  return (
    <div className="overflow-hidden relative h-[304px] w-full bg-gradient-to-r from-w100 to-white border-y pt-[54px] px-[174px] border-w100">
      <h2 className="font-inter font-bold text-2xl mb-6 text-bl900">
        Browse Our Fashion Paradise!
      </h2>
      <p className="font-inter text-sm mb-8 text-bl500 w-[462px]">
        Step into a world of style and explore our diverse collection of
        clothing categories.
      </p>
      <ButtonShop text={"Start Browsing"} />
        <div className="absolute top-[-21px] right-[213px] bg-center bg-[url('./img/sweter.svg')] h-[311px]  w-[255px]"></div>
    </div>
  );
};

export default MiddleBanner;
