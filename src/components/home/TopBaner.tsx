import ButtonShop from "../buttons/ButtonShop";
const TopBaner = () => {
  return (
    <div className="h-[440px] overflow-hidden relative w-full bg-w100 px-[180px] py-[136px]">
      <div className=" w-fit">
        <h1 className="font-inter  w-fit font-semibold text-[32px] text-bl800 tracking-tight">
          Fresh Arrivals Online
        </h1>
        <p className="font-inter  w-fit text-sm mt-3 mb-12 text-bl600">
          Discover Our Newest Collection Today.
        </p>
        <ButtonShop text={"View Collection"} />
      </div>
      <div className="absolute top-[89px] right-[178px] bg-w200 h-[340px]  w-[340px] rounded-full"></div>
      <div className="absolute top-[92.32px] right-[472px] bg-[url('./img/Burst-pucker.svg')] h-[38px]  w-[38px] rounded-full"></div>
      <div className="absolute top-[66px] right-[174px] bg-center bg-cover bg-[url('./img/HeroImage.png')] h-[382px]  w-[255px]"></div>
    </div>
  );
};

export default TopBaner;
