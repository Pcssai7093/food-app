import Product from "../Product/Product";
import styles from "./Order.module.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Order() {
  const [amount, setAmount] = useState();
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:3001/cart?_expand=menu")
      .then((res) => {
        // console.log(res.data);
        // setData(res.data);
        let tdata = res.data;
        let tamount = 0;
        for (let i = 0; i < tdata.length; i++) {
          tamount += tdata[i].menu.price;
        }
        setAmount(tamount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handleCheckout() {
    console.log("handle checkout");

    let cart = (await axios.get("http://localhost:3001/cart")).data;
    let s = cart.length;
    for (let i = 0; i < s; i++) {
      await axios.delete("http://localhost:3001/cart/" + cart[i].id);
    }

    // console.log(cart);
    history.push("/ordersuccuss");
  }

  return (
    <div className={styles.od}>
      <h1 style={{ textAlign: "center" }}>Check Out</h1>
      <div className={styles["row"]}>
        <div className={styles["col-75"]}>
          <div className={styles["container"]}>
            <div className="row">
              <div className={styles["col-50"]}>
                <h3>Billing Address</h3>
                <label htmlFor="fname">
                  <i className="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M. Doe"
                />
                <label htmlFor="email">
                  <i className="fa fa-envelope"></i> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <label htmlFor="adr">
                  <i className="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                />
                <label htmlFor="city">
                  <i class="fa fa-institution"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                />

                <div className={styles["row"]}>
                  <div className={styles["col-50"]}>
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="NY"
                    />
                  </div>
                  <div className={styles["col-50"]}>
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>

              <div className={styles["col-50"]}>
                <h3>Payment</h3>
                {/* <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa"></i>
                    <i className="fa fa-cc-amex"></i>
                    <i className="fa fa-cc-mastercard"></i>
                    <i className="fa fa-cc-discover"></i>
                  </div> */}
                <label htmlFor="amt">Amount</label>
                <input type="number" id="amt" name="amount" value={amount} />
                <label htmlFor="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                />
                <label htmlFor="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                />
                <label htmlFor="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                />
                <div className={styles["row"]}>
                  <div className={styles["col-50"]}>
                    <label htmlFor="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                    />
                  </div>
                  <div className={styles["col-50"]}>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                handleCheckout();
              }}
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
