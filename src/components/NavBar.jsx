import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    // Logic goes here

    return (
        <>
        <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#0c29e8', padding: '15px' }}>
                <div className="container">
                    <Link to='/' className="navbar-brand mr-4" href="#" style={{ fontSize: '1.5em' }}>Router.com</Link>
                    <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggle" style={{ color: 'white' }}>
                        <div className="navbar-nav ms-auto" style={{ textAlign: 'right' }}>
                            <div className="nav-item">
                                <Link to='/' className="mr-4 nav-link" href="#">HOME</Link>
                            </div>
                            <div className="nav-item">
                                <Link to='/profile' className="mr-4 nav-link" href="#">PROFILE</Link>
                            </div>
                            <div className="nav-item">
                                <Link to='/settings' className="mr-4 nav-link" href="#">SETTINGS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <br />
            <br />
        </header>
        </>
    )
}

export default NavBar