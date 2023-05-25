import logo from "/logo.svg";
import logoBlue from "/logo-outline-blue.svg";
import logoPink from "/logo-outline-pink.svg";
import "./index.css";

const Logo = () => (
  <div className="logo">
    <img src={logo} />
    <img src={logoBlue} />
    <img src={logoPink} />
  </div>
);

export default Logo;
