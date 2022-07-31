import Link from "next/link";
const NavbarItem = ({ label, url }) => {
  return (
    <Link href={url}>
      <a className="navbar-item">{label}</a>
    </Link>
  );
};

export default NavbarItem;
