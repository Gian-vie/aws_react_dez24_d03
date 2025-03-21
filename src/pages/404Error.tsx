import ButtonShop from "../components/buttons/ButtonShop";
import Header from "../components/header/Header";

const PageNotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="font-inter text-bl900"><p className="mt-20 text-9xl text-center">404</p>
      <p className="text-center text-xl">Check out our other amazing products!</p>
      </div>
      <div className="mt-20 justify-self-center">

      <ButtonShop text="Return to shop" />
      </div>

    </div>
  );
};

export default PageNotFoundPage;
