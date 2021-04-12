import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div class="header-container">
            <Navbar />
            <HeaderMain /> 
            <BusinessInfo />
        </div>
    );
};

export default Header;