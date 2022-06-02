import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname={classes.active} to="/uniformes">Uniformes</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink activeclassname={classes.active} to="/balones">Balones</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
