import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Cart() {
  const history = useHistory();
  const [data, setData] = useState(false);
  const [amount, setAmount] = useState();
  const [rendervar, setrendervar] = useState(false);
  function renderFun() {
    setrendervar(!rendervar);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3001/cart?_expand=menu")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
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
  }, [rendervar]);

  return (
    <div>
      {
        <div>
          <h1 style={{ textAlign: "center" }}>Cart Items</h1>
          <div>
            <CartItem data={data} rerender={renderFun} />
          </div>
          {amount && (
            <button
              className={styles.buton}
              onClick={() => {
                history.push("/order");
              }}
            >
              Check Out: Total ₹{amount}
            </button>
          )}
        </div>
      }
    </div>
  );
}

export default Cart;
