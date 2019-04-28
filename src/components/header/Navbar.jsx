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
import './navbar.css';


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
      <div className='nav-link'>
        <Navbar color="warning" light expand="md">
          <NavbarBrand className='nav-link' href="/">WCS Synthèse</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
    <NavItem>
              <NavLink className='nav-link' to="/"> Home </NavLink> 
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='nav-link' nav caret>

             
              Integration
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem>
                  <NavLink className='nav-link' to="/integration/wildcircus"> Wild Circus </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/integration/Findtheprecious">1 - findThePrecious.com </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/integration/css">Gandalf</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/integration/bootstrap">Oeil de Sauron</NavLink>
                  </DropdownItem>
               </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ReactJs
                </DropdownToggle>
                <DropdownMenu >



                <DropdownItem>
                  <NavLink className='nav-link' to="/react/react5">Consommer une Api </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react/react4">Composant Controlé</NavLink>
                  </DropdownItem>


                          <DropdownItem>
                  <NavLink className='nav-link' to="/react/react3"> Simpsons StateOpen</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react/react31"> Simpsons Liste simple </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react/react33"> Atelier :Voyage </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react/react32">Ex. Class&fonction </NavLink>
                  </DropdownItem>
  
                  <DropdownItem>
                  <NavLink className='nav-link' to="/react/react34">Ex.  props </NavLink>
                  </DropdownItem>
             
                </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Javascript
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <NavLink className='nav-link' to="/javascript/patate"> Patate Console </NavLink>
                  </DropdownItem>
               </DropdownMenu>
              </UncontrolledDropdown>





              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Reseau
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem>
                  <NavLink className='nav-link' to="/react/react7">React Router </NavLink>
                  </DropdownItem>
                <DropdownItem>
                  <NavLink className='nav-link' to="/reseau/api/demande">Api github info </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/reseau/api/foot"> Api Foot </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='nav-link' to="/reseau/question/20"> question axios </NavLink>
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