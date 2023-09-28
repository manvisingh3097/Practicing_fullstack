import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginStatus(false);

        }
        else {
            setLoginStatus(true);
        }
    }, [loginStatus]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginStatus(false);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" navbar navbar-expand-lg navbar-light bg-light container " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto navbar container">
                    
                        <li className="nav-item active ">
                        <Link className="nav-link" to="/">
                            All
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cat/electronics">
                           Electronics
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cat/jewelery">
                        Jewellery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cat/men's%20clothing">
                            Men's Clothing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cat/women's%20clothing">
                            Women's Clothing
                        </Link>
                    </li>
                </ul>
                </div>
                
                
            
        </nav>
    );
}

export default Navbar;
