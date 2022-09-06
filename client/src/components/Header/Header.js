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
        <NavLink to="/Draw" id="draw" className="bm-item">
          Draw
        </NavLink>
        <NavLink to="/Profile" id="profile" className="bm-item">
          Profile
        </NavLink>
        <NavLink to="/Timeline" id="timeline" className="bm-item">
          Timeline
        </NavLink>
        <NavLink to="/Search" id="search" className="bm-item">Find</NavLink>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
      </Menu>
    </header>
  );
}

export default Header;
