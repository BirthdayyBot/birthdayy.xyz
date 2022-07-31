import Link from "next/link";

const NavbarDropdown = ({ label, url, children }) => {
  url = !url ? "#" : url;
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <Link href={url}>
        <a className="navbar-link">{label}</a>
      </Link>
      <div className="navbar-dropdown">{children}</div>
    </div>
  );
};

export default NavbarDropdown;
