import Link from "next/link";
const NavbarItem = ({ label, url, newTab }) => {
  return (
    <Link href={url}>
      <a
        className="navbar-item is-family-sub-title"
        target={newTab ? "_blank" : ""}
      >
        {label}
      </a>
    </Link>
  );
};

export default NavbarItem;
