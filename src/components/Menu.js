import React from "react";
import "./Menu.css"
import logo from "../images_1/on-juno.png"
import {Navbar,NavDropdown,Form,Button,Nav} from 'react-bootstrap';
import Intro from './Intro';


const Menu = () => {
    return (

        <div className="main">
       
            <Navbar className="header">
                <Navbar.Brand href="#home">
      <img
        alt="hi"
        src={logo}
        width="150"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" id="navs" style={{fontSize:18,fontWeight:"bold"}}>
                        <Nav.Link href="#home" style={{color:"#E74292",paddingLeft:25}}>Home</Nav.Link>
                        <NavDropdown  title="Company" id="basic-nav-dropdown">
                            <NavDropdown.Item id="item" href="#action/1.1">About</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/1.2">Newsroom</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/1.3">Careers</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/1.4">Partners</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="Learn" id="basic-nav-dropdown">
                            <NavDropdown.Item id="item" href="#action/2.1">Blog</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/2.2">Guides</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/2.3">Help Center</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="Legal" id="basic-nav-dropdown">
                            <NavDropdown.Item id="item" href="#action/3.1" >Privacy Policy</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/3.2">Terms</NavDropdown.Item>
                            <NavDropdown.Item id="item" href="#action/3.3">Trademark</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Button size="lg" style={{fontSize:18,marginRight:25,backgroundColor:"white",
                        color:"blue",borderRadius:10,fontWeight:"bold"}}>
                        Login</Button>
                        <Button variant="primary" size="lg" style={{fontSize:18,marginRight:55,backgroundColor:"blue",
                        color:"whitesmoke",borderRadius:10,fontWeight:"bold"}}>
                        Signup</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            

            
        <Intro/>
    
        </div>
    );
};

export default Menu;
