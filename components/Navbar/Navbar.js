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
        className="navbar is-primary is-spaced is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            /> */}
              <h1 className="navbar-logo is-logo">BIRTHDAYY</h1>
            </a>
          </Link>

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
            <NavbarItem label="Docs" url="https://docs.birthdayy.xyz/" />
            <NavbarItem label="Vote" url="/vote" />
            <NavbarItem label="Premium" url="/premium" />

            <NavbarDropdown label="Commands">
              <NavbarItem
                label="General"
                url="https://docs.birthdayy.xyz/commands/general"
              />
              <NavbarItem
                label="Birthday"
                url="https://docs.birthdayy.xyz/commands/birthday"
              />
              <NavbarItem
                label="Config"
                url="https://docs.birthdayy.xyz/commands/config"
              />
            </NavbarDropdown>
          </div>

          <div className="navbar-end">
            <div className="navbar-item mr-3">
              <div className="buttons are-medium">
                <Link href="/discord">
                  <a
                    className={`button is-primary is-rounded  ${
                      isActive ? "is-fullwidth is-outlined" : ""
                    }`}
                  >
                    <strong>Support Discord</strong>
                  </a>
                </Link>

                <Link href="/invite">
                  <a
                    className={`button is-rounded is-strong ${
                      isActive
                        ? "is-primary is-fullwidth"
                        : "is-white is-outlined"
                    }`}
                  >
                    Invite
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
