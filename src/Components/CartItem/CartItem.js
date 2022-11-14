import styles from "./CartItem.module.css";
import img1 from "./f2.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function CartItem({ data, rerender }) {
  const history = useHistory();
  function removeFromCart(id) {
    // * logic to remove from cart
    axios
      .delete("http://localhost:3001/cart/" + id)
      .then((res) => {
        rerender();
        console.log("deleted");
      })
      .catch((err) => {
        console.log("failed");
      });
    console.log(id);
  }
  return (
    <div className={styles.cartItems}>
      {data &&
        data.map((data) => (
          <div className={styles.pd}>
            <div className={styles.card}>
              <img src={img1} alt="Denim Jeans" />
              <h1>{data.menu.name}</h1>
              <p className="price">₹{data.menu.price}</p>

              <p>
                <button
                  className={styles.btn}
                  onClick={() => {
                    removeFromCart(data.id);
                  }}
                >
                  Remove
                </button>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CartItem;
