import React from 'react';
import styles from './info.module.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';

function Info({ onClickCart }) {
    const { totalPrice } = useCart();
    return (
        <ul className={styles.info}>
            <li className={styles.basket}>
                <img src="images/cart.svg" alt='cart' />
            </li>
            <li onClick={onClickCart} className={styles.price}>
                <p >
                    <span className={styles.TotalPrice}>{totalPrice}</span>
                    <span>RUB.</span>
                </p>
            </li>
            <li className={styles.heart}>
                <Link to="/Favorites">
                    <img className='cu-p' src='images/heart.svg' alt='heart' />
                </Link>
            </li>
            <li className={styles.user}>
                <Link to="/Orders">
                    <img src='images/user.svg' alt='user' />
                </Link>
            </li>
        </ul>
    )
}

export default Info;