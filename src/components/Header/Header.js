// import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react';
import Logo from './Logo/Logo';
import Info from './Info/Info';

function Header({ onClickCart }) {

    return (
        <header>
            <div className='headerLeft'>
                <Logo />
            </div>
            <div className='headerRight'>
                <Info onClickCart={onClickCart} />
            </div>
        </header>
    );
}
export default Header;