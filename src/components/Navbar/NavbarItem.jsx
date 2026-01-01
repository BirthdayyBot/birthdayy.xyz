import { NewTab as NewTabIcon } from "../Generic/Icon.jsx";

const NavbarItem = ({ label, url, newTab }) => {
  return (
    <a
      className="navbar-item is-family-sub-title"
      href={url}
      target={newTab ? "_blank" : ""}
    >
      {hasIcon(newTab, label)}
    </a>
  );
};

export default NavbarItem;

function hasIcon(newTab, label) {
  if (newTab) {
    return (
      <span className="icon-text">
        <span>{label}</span>
        <span className="icon">{newTab ? <NewTabIcon /> : ""}</span>
      </span>
    );
  } else {
    return <span>{label}</span>;
  }
}
