import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  function TopBar(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <Navbar {...args}>
      <NavbarBrand href="/" className='navbar-title'>way out (in the) woods music fest</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto navbar-title" navbar>

          
        <NavItem>
            <NavLink href="/faq/">FAQ</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/schedule/">Schedule</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/snapsvisor/">Snapsvisor</NavLink>
          </NavItem>
          
        </Nav>
      </Collapse>
    </Navbar>
    );
  }
  
  export default TopBar;