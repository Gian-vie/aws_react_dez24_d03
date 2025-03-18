import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import Cart from "../components/cart/Cart"
import Header from "../components/header/Header"

const Carrinho = () => {
  return (
    <div>
      <Header />
      <Breadcrumb caminho={"Cart"}/>
      <Cart />
    </div>
  )
}

export default Carrinho
