import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";
import Order from "./Components/Order/Order";
import OrderSuccuss from "./Components/OrderSuccuss/OrderSuccuss";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <marquee
              behavior="slide"
              direction=""
              style={{
                color: "white",
                fontSize: "20px",
                backgroundColor: "orange",
                fontStyle: "italic",
              }}
            >
              Add product to cart to proceed through order
            </marquee>
            <Products />
            {/* <Product />
            <Product /> */}
          </Route>

          <Route exact path="/order">
            <Navbar />
            <Order />
          </Route>

          <Route exact path="/ordersuccuss">
            <Navbar />
            <OrderSuccuss />
          </Route>

          <Route exact path="/orders">
            <Navbar />
          </Route>
          <Route exact path="/cart">
            <Navbar />
            <marquee
              behavior="slide"
              direction=""
              style={{
                color: "white",
                fontSize: "20px",
                backgroundColor: "orange",
                fontStyle: "italic",
              }}
            >
              Click on the checkout to proceed through payment
            </marquee>
            <Cart />
          </Route>
          <Route exact path="/temp">
            <Navbar />
            {/* <Cart /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
