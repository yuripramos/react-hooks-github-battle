import React, { useContext } from "react";
import { themeContext } from "../../contexts/theme";
import ActiveLink from "../ActiveLink";

const Nav = ({ toggleTheme }) => {
  const theme = useContext(themeContext);
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li className="nav-link">
          <ActiveLink href="/" exact activeClassName="active-link">
            <a className="link-href">Popular</a>
          </ActiveLink>
        </li>
        <li className="nav-link">
          <ActiveLink href="/battle" activeClassName="active-link">
            <a className="link-href">Battle</a>
          </ActiveLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className="btn-clear"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? "🔦" : "💡"}
      </button>
    </nav>
  );
};

export default React.memo(Nav);
