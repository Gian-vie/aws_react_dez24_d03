import BreadcrumbOrder from "../components/Breadcrumb/BreadcrumbOrder"
import AfterPay from "../components/cart/AfterPay"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const AfterPayment = () => {
  return (
    <div>
        <Header />
        <BreadcrumbOrder caminho="Successful Order" />
        <AfterPay />
        <Footer />
    </div>
  )
}

export default AfterPayment
