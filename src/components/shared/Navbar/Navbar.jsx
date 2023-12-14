// import { Container } from 'postcss';
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';

const Navbar = () => {
    return (
        <div className='p-10 shadow-lg'>
            {/* <Container> */}
                <div className='flex flex-row justify-between'>
                    <Logo></Logo>
                    <Search></Search>
                    <MenuDropdown></MenuDropdown>
                </div>
            {/* </Container> */}
        </div>

    );
};

export default Navbar;