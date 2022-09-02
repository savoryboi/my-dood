import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";

function Header() {
  var isMenuOpen = function(state) {
    return state.isOpen;
  };

  return (
    <header>
      <h1 className="title">MyDood</h1>
      <Menu right className="bm-menu">
        <a id="home" className="bm-item" href="/">
          Home
        </a>
        <a id="about" className="bm-item" href="/about">
          About
        </a>
        <a id="contact" className="bm-item" href="/contact">
          Contact
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
      </Menu>
    </header>
  );
}

export default Header;
