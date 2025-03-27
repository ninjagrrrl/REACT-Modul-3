//  mit sfc erstelle ich eine react-function
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <h2>JS.</h2>
      <nav>
        <a href="#">projects</a>
        <a href="">skills</a>
        <a href="">contact</a>
        <a href="#">
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
