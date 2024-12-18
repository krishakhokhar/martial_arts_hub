import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import './Dashbordhed.css'

const Dashbordhed = () => {

    const navLinks = [
        { name: "Dashboard", url: "/Dashbord" },
        { name: "My Messages", url: "/MyMessages" },
        { name: "My Classes", url: "/MyClasses" },
        { name: "My Invoices", url: "/MyInvoices" },
        { name: "Raise Dispute", url: "/RaiseDispute" },
    ];
    const myclasspath = [
        "/Ongoingclass",
        "/CompletedClasses"
    ]
    const disputes=[
        "/ClosedDisputes"
    ]
    const location = useLocation();

    return (

        <div style={{ padding: "0px", backgroundColor: "black", marginTop: "94px", position: "fixed", width: "100%", zIndex: "1000" }}>
            <Navbar bg="dark" data-bs-theme="dark" className='navebar1'>
                <Navbar.Collapse id="basic-navbar-nav" className='dashhead2'>
                    <Nav className="me-auto padding-head"  >
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.url}
                                // className={`nav-link ${location.pathname === link.url ? 'active' : ''}`}
                                className={`nav-link mx-2 ${location.pathname === link.url ||
                                        (link.url === "/MyClasses" && myclasspath.includes(location.pathname))||
                                        (link.url === "/RaiseDispute" && disputes.includes(location.pathname))
                                        ? "active"
                                        : ""
                                    }`}
                                style={{ color: "white" }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div>



    )
}

export default Dashbordhed