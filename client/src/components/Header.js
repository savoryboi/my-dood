import { NavLink } from 'react-router-dom'

function Header() {
  return (
      <header>
        <h3>MyDood! </h3>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/profile'>My Profile</NavLink>
          <NavLink to='/'>Logout</NavLink>
        </nav>

      </header>
  )
}

export default Header;