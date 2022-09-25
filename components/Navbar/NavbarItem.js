import Link from "next/link";
import { NewTab as NewTabIcon } from "../Generic/Icon";
const NavbarItem = ({ label, url, newTab }) => {
  return (
    <Link href={url}>
      <a
        className="navbar-item is-family-sub-title"
        target={newTab ? "_blank" : ""}
      >
        {hasIcon(newTab, label)}
      </a>
    </Link>
  );
};

export default NavbarItem;

function hasIcon(newTab, label) {
  if (newTab) {
    return (
      <span className="icon-text">
        <span className="icon">{newTab ? <NewTabIcon /> : ""}</span>
        <span>{label}</span>
      </span>
    );
  } else {
    return <span>{label}</span>;
  }
}
