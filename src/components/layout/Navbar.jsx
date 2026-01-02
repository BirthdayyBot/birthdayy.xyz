import { useState } from "react";
import NavbarItem from "./NavbarItem.jsx";
import NavbarDropdown from "./NavbarDropdown.jsx";
import style from "../../styles/navbar.module.scss";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  function handleBurgerToggle() {
    setisActive(!isActive);
  }

  return (
    <div className={style.navbar_component}>
      <nav
        className="navbar is-primary is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <h1 className="navbar-logo is-logo">BIRTHDAYY</h1>
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
            <NavbarItem label="Docs" url="https://docs.birthdayy.xyz/" newTab />
            <NavbarItem label="Vote" url="/vote" />
            <NavbarItem label="Premium" url="/premium" newTab />
            <NavbarItem label="Status" url="/status" newTab />
            <NavbarDropdown label="My Commands">
              <NavbarItem
                label="General"
                url="https://docs.birthdayy.xyz/commands/general"
                newTab
              />
              <NavbarItem
                label="Birthday"
                url="https://docs.birthdayy.xyz/commands/birthday"
                newTab
              />
              <NavbarItem
                label="Config"
                url="https://docs.birthdayy.xyz/commands/config"
                newTab
              />
            </NavbarDropdown>
          </div>

          <div className="navbar-end">
            <div className="navbar-item mr-3">
              <div className="buttons are-medium">
                <a
                  href="/discord"
                  className={`button is-primary is-rounded is-strong ${
                    isActive ? "is-fullwidth is-outlined" : ""
                  }`}
                  target="_blank"
                >
                  Discord
                </a>

                <a
                  href="/invite"
                  className={`button is-rounded is-strong ${
                    isActive
                      ? "is-primary is-fullwidth"
                      : "is-white is-outlined"
                  }`}
                  target="_blank"
                >
                  Invite
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
