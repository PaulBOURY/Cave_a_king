import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_cave_a_king.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo de l'association" className="Logo" />
      </Link>
      <h1>Cave à King</h1>
    </header>
  );
}

export default Header;
