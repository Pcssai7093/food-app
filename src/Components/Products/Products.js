import Product from "../Product/Product";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Products() {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/menus")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Food Menu</h1>
      <div>
        <Product data={data} />
        {/* <Product /> */}
      </div>
    </div>
  );
}

export default Products;
