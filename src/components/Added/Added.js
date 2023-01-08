// import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react';
import styles from './Added.module.scss';
import AppContext from '../../context';



function Added() {

    React.useEffect(() => {
        setChangeImage("images/sneakers/");
    }, []);


    const {
        isChangeImage,
        isChangeDescription,
        isChangePrice,
        setIsAddedCartSave,
        setChangeImage,
        setIsChangeDescription,
        setIsChangePrice,
        setIsAddedCart
    } = React.useContext(AppContext);

    console.log(!!isChangeImage)
    return (

        <div className={styles.parent}>
            <h2 className={styles.title}>Тут ви можете поміняти інформацію про товар </h2>
            <div className={styles.parentCart}>

                <div className={styles.blockImages}>
                    <p>Ввести шлях до малюнку</p>
                    <img className={styles.images} width={133} height={112} src={isChangeImage && isChangeImage} alt="Sneakers" />
                    <input type="text" value={isChangeImage} onChange={(e => setChangeImage(e.target.value))} />
                </div>

                <div className={styles.blockDescription}>
                    <h3 className={styles.cardDescription}>Ввести опис товару </h3>
                    <input type="text" value={isChangeDescription} onChange={(e) => setIsChangeDescription(e.target.value)} />
                </div>

                <div className={styles.blockPrice}>
                    <span>Ціна</span>
                    <b>Руб</b>
                    <input type="number" value={isChangePrice} onChange={(e) => setIsChangePrice(e.target.value)} />
                </div>

            </div>
            <div className={styles.blockButton} >
                <button onClick={() => setIsAddedCart(false)} >Close</button>
                <button onClick={setIsAddedCartSave} >Save</button>
            </div>
        </div>
    );
}
export default Added;

