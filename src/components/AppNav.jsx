import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Cuntries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
