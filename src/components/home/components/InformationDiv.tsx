interface InformationDivProps {
  logo: string;
  title: string;
  paragraph: string;
}

const InformationDiv: React.FC<InformationDivProps> = ({
  logo,
  title,
  paragraph,
}) => {
  return (
    <div className=" w-[328px] h-[218px] pt-4">
      <div
        className="h-12  w-12 rounded-full bg-w100 mb-6 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <h2 className="font-inter  w-[272px] font-semibold text-[16px] mb-3 text-bl800">
        {title}
      </h2>
      <p className="font-inter  w-[272px] text-sm text-bl500">{paragraph}</p>
    </div>
  );
};

export default InformationDiv;
