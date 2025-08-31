import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Homesection } from "./Components/Home";
import { ShowProducts } from "./Components/ShowProducts";
import { ProductsProvider } from "./Context/ProductContext";
import { Mensection } from "./Pages/Mensection";
import { Womensection } from "./Pages/Womensection";
import { Productdetails } from "./Pages/Productdetails";
import { Whislist } from "./Pages/Whislist";
import { CartPage } from "./Pages/Mycart";

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <Header />
        <Routes>
        
          <Route
            path="/"
            element={
              <>
                <Homesection />
                <ShowProducts />
              </>
            }
          />

        <Route path="/products/:id" element={<Productdetails/>}/>
          <Route path="/men/category/:category" element={<Mensection />} />
          <Route path="/women/category/:category" element={<Womensection/>}/>
        <Route path="/mywishlist" element={<Whislist/>}/>
        <Route path="/mycart" element={<CartPage/>}/>
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
