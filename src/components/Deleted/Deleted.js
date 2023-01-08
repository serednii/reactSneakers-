import React from 'react';
import styles from './Deleted.module.scss';
import AppContext from '../../context';
function Deleted({ obj }) {
    const { onDeleteToCart, setIsDeleted } = React.useContext(AppContext);
    return (
        <div className={styles.deleted}>
            <div className={styles.fon}>
            </div>
            <div className={styles.parent}>
                <h2 className={styles.title}>Ви дійсно хочете видалити цей товар </h2>
                <div className={styles.parentCart}>
                    <img className={styles.images} width={133} height={112} src={obj.urlImage} alt="Sneakers" />
                    <h3 className={styles.cardDescription}>{obj.title}</h3>
                    <div className={styles.cardBotton}>
                        <div className={styles.cardPrice}>
                            <span >Ціна</span>
                            <b>{obj.price}<span>Руб</span></b>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => {
                        onDeleteToCart(obj.id, 'sneakers');
                        setIsDeleted(undefined);
                    }
                    }>Так</button>
                    <button onClick={() => setIsDeleted(false)}>Ні</button>

                </div>
            </div>

        </div>

    );
}
export default Deleted;