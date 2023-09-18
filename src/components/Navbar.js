import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const menuOptions = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Login',
      link: '/login',
    },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>Daisy's Ordering App</div>
      <div className='navbar-links-container'>
        {menuOptions.map((option) => (
          <Link key={option.text} to={option.link}>
            {option.text}
          </Link>
        ))}
        <button className='primary-button'>Order Now</button>
      </div>
      <div className='navbar-menu-container'>
        <bars onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  );
}

export default Navbar;