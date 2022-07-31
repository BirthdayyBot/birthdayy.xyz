import Link from "next/link";
const NavbarItem = ({ label, url }) => {
  return (
    <div className="navbar_item_component">
      <Link href={url}>
        <a className="navbar-item">{label}</a>
      </Link>
    </div>
  );
};

export default NavbarItem;
