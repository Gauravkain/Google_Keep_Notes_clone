import React from 'react';
import logo from './Images/logo.jpg';


const Header = () => {
    return (
        <>
            <div className='header'>           
                <img src={logo} alt="logo" className="img" />
                <h1> Gaurav keep Notes</h1>
            </div>
        </>
    )
}

export default Header;