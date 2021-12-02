import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../easybank-landing-page-master/images/logo.svg'
//import { Navbar, Nav, Container } from 'react-bootstrap';
//import '../App.css';

const Navigation = () => {
    const styles = {
        marginLeft: 100,
        marginRight: 100
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={styles}>
                <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <div className="nav-link">
                        <NavLink className="links" to="/" activeClassName="active" exact>Home</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                        <NavLink className="links" to="/about" activeClassName="active">About</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                        <NavLink className="links" to="/contact" activeClassName="active">Contact</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                        <NavLink className="links" to="/blog" activeClassName="active">Blog</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                        <NavLink className="links" to="/careers" activeClassName="active">Careers</NavLink>
                        </div>
                    </li>
                </ul>
                <button style={ {backgroundImage: 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))'} } className=" request-access rounded-pill px-3 py-2 border-0 text-white">
                    Request invite
                </button>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navigation;