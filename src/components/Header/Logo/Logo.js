import React from 'react';
import style from './logo.module.scss';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className={style.headerLeft}>
            <Link to="/">
                <img width={40} height={40} src={require("../../../public/img/logo.png")} alt="Logotype" />
            </Link>

            <div className={style.hederInfo}>
                <h3>React Sneakers</h3>
                <p>Магазин лучших красовок</p>
            </div>
        </div>
    );
}

export default Logo;