import { NavLink } from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';
import './Header.css';

function Header() {
  var isMenuOpen = function(state) {
    return state.isOpen;
  };
   
    return (
      <div>
        <div id="outer-container">
          <Menu right onStateChange={ isMenuOpen } pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >

          <main id="page-wrap">
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
          </main>
          </Menu>
        </div>
      </div>
    );
}


export default Header;