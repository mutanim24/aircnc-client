// import { Container } from 'postcss';
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';
import Container from '../Container/Container';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow py-4'>
            <Container>
                <div className='flex flex-row justify-between'>
                    <Logo></Logo>
                    <Search></Search>
                    <MenuDropdown></MenuDropdown>
                </div>
            </Container>
        </div>

    );
};

export default Navbar;