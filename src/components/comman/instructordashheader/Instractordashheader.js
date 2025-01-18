import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
function Instractordashheader() {
    const location = useLocation();

    const navLinks = [
        { name: "Dashboard", url: "/Dashbordins" },
        { name: "My Classes", url: "/MyClassesins" },
        { name: "Message Requests", url: "/MessageRequests" },
        { name: "Chat", url: "/Chat" },
        { name: "Booking Overview", url: "/BookingOverview" },
        { name: "Earnings Report", url: "/EarningsReport" },
        { name: "Reviews", url: "/Reviews" },
        { name: "Create Class", url: "/CreateClass" },
    ];

    return (
        <div>
            <div style={{ padding: "0px", backgroundColor: "black", marginTop: "94px", position: "fixed", width: "100%", zIndex: "1000" }}>
                <Navbar bg="dark" data-bs-theme="dark" className='navebar1'>
                    <Navbar.Collapse id="basic-navbar-nav" className='dashhead2'>
                        <Nav className="me-auto padding-head">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.url}
                                    className={`nav-link mx-2 ${location.pathname === link.url ? "active" : ""}`}
                                    style={{ color: "white" }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Instractordashheader