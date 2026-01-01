const NavbarDropdown = ({ label, url, children }) => {
  const dropdownUrl = !url ? "#" : url;

  return (
    <div className="navbar-item has-dropdown is-hoverable is-family-sub-title">
      <a href={dropdownUrl} className="navbar-link">{label}</a>
      <div className="navbar-dropdown">{children}</div>
    </div>
  );
};

export default NavbarDropdown;
