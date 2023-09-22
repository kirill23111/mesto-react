import logo from "../images/header.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Место" />
    </header>
  );
}

export default Header;
