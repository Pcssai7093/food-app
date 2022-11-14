import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={path == "/" && styles.active}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/cart" className={path == "/cart" && styles.active}>
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
