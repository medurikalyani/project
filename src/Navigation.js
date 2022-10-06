import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar  expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">
                Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/SearchRoom">
                SearchRoom
            </NavLink>
            {/* <NavLink className="d-inline p-2 bg-dark text-white" to="/setroomrates">
                Add-Room
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/roommanagement">
                Manage-Room
            </NavLink>  */}
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Booking">
                Booking
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Reservation">
                Reservation
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Payment">
                Payment
            </NavLink>
            
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}



export default Navigation;