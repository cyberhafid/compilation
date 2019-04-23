import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav color="warning" light expand="md" navbar>
    <NavItem>
              <NavLink  className='nav-link' to="/"> Home </NavLink> 
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Quete React
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <NavLink className='nav-link' to="/Quete"> Quete </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react3"> React 3 </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react31"> Simpsons Quote </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react32"> Class ou fonction </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react33"> Voyage </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react34"> props </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 reseaux axios
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <NavLink className='nav-link' to="/reseau"> question axios </NavLink>
                  </DropdownItem>
               </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Outils divers
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <NavLink className='nav-link' to="/divers"> Sky gif </NavLink>
                  </DropdownItem>
               </DropdownMenu>
              </UncontrolledDropdown>



              <NavItem>
        <NavLink className='nav-link' to="/contact"> Contact </NavLink>
              </NavItem>


            </Nav>
          </Collapse>
        </Navbar>
















      </div>
    );
  }
}