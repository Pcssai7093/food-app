import styles from "./Product.module.css";
import img1 from "./f2.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function Product({ data }) {
  const history = useHistory();
  function addToCart(id) {
    // * logic to add to cart
    axios
      .post("http://localhost:3001/cart", { menuId: id })
      .then((res) => {
        history.push("/cart");
        console.log("added");
      })
      .catch((err) => {
        console.log("failed");
      });
    console.log(id);
  }

  return (
    <div className={styles.products}>
      {data &&
        data.map((data) => (
          <div className={styles.pd}>
            <div className={styles.card}>
              <img src={img1} alt="Denim Jeans" />
              <h1>{data.name}</h1>
              <p className="price">₹{data.price}</p>

              <p>
                <button
                  className={styles.btn}
                  onClick={() => {
                    addToCart(data.id);
                  }}
                >
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
