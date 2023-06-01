import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const menuOptions = [
    {
      text: 'Home',
    },
    {
      text: 'Menu',
    },
    {
      text: 'Contact',
    },
    {
      text: 'User',
    },
    {
      text: 'Checkout'
    },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>Daisy's Ordering App
        {/* <img src={logo} alt='' /> */}
      </div>
      <div className='navbar-links-container' >
        <Link to='/'>Home</Link>
        <Link to='/Menu'>Menu</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user'>User</Link>
        <Link to='/checkout'>Checkout</Link>
        <button className='primary-button'>
          Order Now
        </button>
      </div>
      <div className='navbar-menu-container'>
        <bars onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  )
}

export default Navbar