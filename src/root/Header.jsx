import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { HashLink as Link } from 'react-router-hash-link';
import { LOGO, MENU_LINKS, WEBSITE_NAME } from '../data/General';
import { ConnectButton } from '../web3/components/index'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className='navbar'>
      <Navbar.Brand as={Link} to="/">
        <img src={LOGO} alt={WEBSITE_NAME} className="header-logo-image ml-30" />
        {/* {WEBSITE_NAME} */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'center', width: '100%'}}>
        <Nav className="mr-auto nav-bg" style={{justifyContent: 'space-between', width: '50%'}}>
          {MENU_LINKS.map(ml => (
            <Nav.Link href='#' as={Link} to={ml.to}><h5>{ml.name}</h5></Nav.Link>
          ))}
        </Nav>
        <Nav>
        <div className='nav-bg' style={{display: 'block', margin: 'auto'}}>
        <ConnectButton />
        </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;