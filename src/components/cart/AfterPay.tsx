import ButtonAcont from "../buttons/ButtonAcont";

const AfterPay = () => {
  return (
    <div className="my-40 justify-self-center text-center w-[379px]">
      <img src="/img/group.svg" alt="Successful Order" className="mx-auto" />
      <h1 className="mt-5 mb-4 font-inter font-bold text-2xl text-bl900">Thank you for shopping</h1>
      <p className="mb-12 font-inter text-sm text-bl500">Your order has been successfully placed and is now being processed.</p>
      <ButtonAcont text="Go to my account"/>
    </div>
  );
};

export default AfterPay;
