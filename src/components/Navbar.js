import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const menuOptions = [
    {
      text: 'Home',
    },
    // {
    //   text: 'Menu',
    // },
    {
      text: 'Login'
    },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>Daisy's Ordering App
        {/* <img src={logo} alt='' /> */}
      </div>
      <div className='navbar-links-container' >
        <Link to='/'>Home</Link>
        {/* <Link to='/Menu'>Menu</Link> */}
        <Link to='/login'>LOGIN</Link>
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