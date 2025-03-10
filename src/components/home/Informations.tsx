import InformationDiv from "./components/InformationDiv";
import truckIcon from "../../img/truck.svg"


const Informations = () => {
  return (
    <div className="flex mt-[88px] max-w-[1092px] h-[266px] justify-between justify-self-center">
      <InformationDiv
        logo={"../../img/truck.svg"}
        title={"Free Shipping"}
        paragraph={
          "Upgrade your style today and get FREE shipping on all orders! Don't miss out."
        }
      />
      <InformationDiv
        logo={truckIcon}
        title={"Satisfaction Guarantee"}
        paragraph={
          "Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
        }
      />
      <InformationDiv
        logo={truckIcon}
        title={"Secure Payment"}
        paragraph={
          "Your security is our priority. Your payments are secure with us."
        }
      />
    </div>
  );
};

export default Informations;
