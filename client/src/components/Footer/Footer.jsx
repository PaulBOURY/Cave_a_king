import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <Link to="/king" className="linkFooter1">
        {" "}
        Nos Kings
      </Link>
      <Link to="/contact" className="linkFooter2">
        {" "}
        Nous contacter
      </Link>
      <Link to="/aboutus" className="linkFooter3">
        {" "}
        A propos de nous
      </Link>
    </footer>
  );
}

export default Footer;
