import React from 'react';
import logo from '../logo.svg';

const Navbar = ({ totalItems }) => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} className="App-logo" alt="logo" />
                Cart Total
                <span className='badge badge-pill badge-secondary m-2'>
                    {totalItems}
                </span>
            </a>

        </nav>
    );
}

export default Navbar;
