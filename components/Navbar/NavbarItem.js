import Link from "next/link";
const NavbarItem = ({ label, url, isButton }) => {
  // if (isButton) {
  //   return (
  //     <Link href={url}>
  //       <a className="navbar-item button is-primary">{label}</a>
  //     </Link>
  //   );
  // }
  return (
    <Link href={url} target="_blank">
      <a className="navbar-item is-family-sub-title">{label}</a>
    </Link>
  );
};

export default NavbarItem;
