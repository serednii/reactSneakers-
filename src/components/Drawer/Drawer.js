import React from 'react';
import axios from 'axios';

import DrawerItem from './DrawerItem/DraverItem';
import Info from '../info/Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

function Drawer({ onClose, items, opened, delay }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post("https://635d74d2ea764497f0dd237e.mockapi.io/orders", { items: cartItems });
            setOrderId(data.id);
            setIsOrderComplete(true);
            console.log('cartItems line 25');
            console.log(cartItems);
            for (let i = 0; i < cartItems.length; i++) {
                await axios.delete("https://635d74d2ea764497f0dd237e.mockapi.io/cart/" + (i + 1));
                await delay(500);
            }
            await setCartItems([]);
        } catch (error) {
            alert('Не удалось создать заказ :(');
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.draver} ${opened ? styles.draverOpend : styles.draver}`}>

            <h2 className='mb-30'>Корзина
                <img onClick={onClose} className='remove_btn' src={require("../../public/img/btn-remove.png")} alt='Remove' />
            </h2>
            <div className={styles.cart_items}>
                {
                    items.length > 0 ?
                        items.map((obj, i) => (
                            <DrawerItem key={`draverItems${i} `} items={items} obj={obj} setCartItems={setCartItems} />
                        )) :
                        <Info
                            onClose={onClose}
                            title={isOrderComplete ? "Заказ оформлений" : "Корзина пустая"}
                            description={isOrderComplete ? `Ваш заказ ${orderId} скоро будет передан курєрской доставке` : "Добавте хотя би одну пару кроссовок, чтоби сделать заказ"}
                            image={isOrderComplete ? "images/complete-order.jpg" : "images/empty-cart.jpg"}
                        />
                }
            </div>

            <ul className={styles.cartTotalBlock}>
                <li className='d-flex'>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб</b>
                </li>
                <li className='d-flex'>
                    <span>Налог 5%</span>
                    <div></div>
                    <b>{totalPrice * 0.05} руб</b>
                </li>
            </ul>

            <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ
                <img width={11} height={11} src={require('../../public/img/arrow.svg').default} alt="Arrow" />
            </button>

        </div >
    );
}

export default Drawer;

