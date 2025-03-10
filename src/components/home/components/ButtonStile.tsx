interface ButtonStileProps {
    text: string;
}

const ButtonStile: React.FC<ButtonStileProps> = ({text}) => {
  return (
    <div className="flex items-center max-w-[183px] h-11 px-6 py-3 rounded-sm gap-1.5 bg-bl900">
      <p className="text-white text-sm font-inter font-medium">
        {text}
      </p>
      <div className="h-6 max-w-6 bg-[url('./img/rightWhite.svg')] bg-no-repeat bg-center"></div>
    </div>
  );
};

export default ButtonStile;
