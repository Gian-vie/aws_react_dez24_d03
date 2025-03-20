// import { SignedIn, SignedOut } from "@clerk/clerk-react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  matchRoutes,
} from "react-router";
import Home from "./pages/Home";
import { useEffect } from "react";
import PageNotFoundPage from "./pages/404Error";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Carrinho from "./pages/Carrinho";
import Perfil from "./pages/Perfil";
import AfterPayment from "./pages/AfterPayment";
import ProdDetails from "./components/shop/ProdDetails";

const routes = [
  { path: "/" },
  { path: "/page-not-found" },
  { path: "/shop" },
  { path: "/about" },
  { path: "/perfil" },
  { path: "/carrinho" },
  { path: "/after-payment" },
  { path: "/detail" },
];

function RouteValidator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const match = matchRoutes(routes, location);
    if (!match) {
      navigate("/page-not-found", { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <div>
      <RouteValidator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/detail" element={<ProdDetails />} />
        <Route path="/after-payment" element={<AfterPayment />} />
        <Route path="/page-not-found" element={<PageNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
