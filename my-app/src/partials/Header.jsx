import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Blog</Link>
                        <Link to="/about">About</Link>
                        <Link to="/support">Support</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;