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
          Draw
        </a>
        <a id="about" className="bm-item" href="/Profile">
          Profile
        </a>
        <a id="timeline" className="bm-item" href="/Timeline">
          Timeline
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
      </Menu>
    </header>
  );
}

export default Header;
