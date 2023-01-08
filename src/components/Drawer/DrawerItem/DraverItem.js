import React from 'react';
import styles from './DraverItem.module.scss'
import axios from 'axios';
import AppContext from '../../../context';

function DrawerCard({ obj, setCartItems }) {
    const { onDeleteToCart } = React.useContext(AppContext);

    React.useEffect(() => {
        axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/cart").then((res) => {
            setCartItems(res.data);
        })
    }, []);

    return (
        <div>
            <div className={styles.cart_item}>
                <div style={{ backgroundImage: `url(${obj.urlImage})` }} className={styles.cartItemImg}></div>
                <div className='mr-20'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price}  руб.</b>
                </div>
                <img onClick={() => onDeleteToCart(obj.id, "cart")} className={styles.remove_btn} src="images/btn-remove.png" alt='Remove' />
            </div>
        </div>
    );
}
export default DrawerCard;

