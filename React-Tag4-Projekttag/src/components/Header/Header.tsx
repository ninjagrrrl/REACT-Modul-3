import "./Header.css";
import logoImg from "../../assets/logo.png";
import backgroundImg from "../../assets/HeaderWithoutTextV2.png";

const Header = () => {
  return (
    <>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <header>
          <a href="#">
            <img src={logoImg} alt="Logo" />
          </a>
          <nav>
            <a href="#">About</a>
            <a href="#">How to</a>
            <a href="#">FAQS</a>
            <button>Contact Us</button>
          </nav>
        </header>

        <h1>Your awesome traffic permit consulant.</h1>
      </div>
    </>
  );
};

export default Header;
