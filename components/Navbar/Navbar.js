import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  function handleBurgerToggle() {
    // if is active, set to false if not, set to true
    setisActive(!isActive);
  }
  //TODO: Fix dropdown beeing open automatically when burger is clicked
  return (
    <div className={style.navbar_component}>
      <nav
        className="navbar has-shadow is-primary mb-2"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            /> */}
            <h1 className="navbar-logo is-size-4 is-logo">Nikolai</h1>
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-rollout"
            onClick={handleBurgerToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbar-rollout"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <NavbarItem label="Home" url="/" />
            <NavbarItem label="NavItem" url="#" />

            <NavbarDropdown label="Dropdown">
              <NavbarItem label="Dropdown" url="#" />
              <NavbarItem label="Dropdown" url="#" />
              <NavbarItem label="Dropdown" url="#" />
            </NavbarDropdown>
          </div>

          <div className="navbar-end">
            <div className="navbar-item mr-3">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
