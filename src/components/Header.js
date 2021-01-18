import React, {Component} from 'react';
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
                        <a href="/person">Person</a>
                    </li>
                    <li className="navItem">
                        <a href="/rental_object">Rental object</a>
                    </li>
                    <li className="navItem">
                        <a href="/contract">Contract</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

Header.propTypes = {};

export default Header;
