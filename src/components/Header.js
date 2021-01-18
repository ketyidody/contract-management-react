import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="site__logo">
                    Rental pages
                </div>

                <ul className="nav">
                    <li className="navItem">
                        <Link to="/person">Person</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/rental-object">Rental object</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contract">Contract</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

Header.propTypes = {};

export default Header;
