import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"
import AppContext from '../../context';
function Card(
    {
        title,
        id,
        parentId,
        price,
        urlImage,
        favorited,
        added,
        showEdit,
        showFavorite,
        showDeleted
    }
) {
    const { isEditCart, funSetIsEditCart, isLoading, onAddToFavorite, onAddToCart, setIsDeleted } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [isAdded, setIIsAdded] = React.useState(false);
    const obj = { id, parentId, title, urlImage, price };
    setTimeout(() => setIsFavorite(favorited), 5);
    setTimeout(() => setIIsAdded(added), 5);
    return (
        <div className={styles.card}>
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={600}
                    height={400}
                    viewBox="0 0 600 400"
                    backgroundColor="#e9e2e2"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="-1" rx="10" ry="10" width="150" height="90" />
                    <rect x="2" y="134" rx="3" ry="3" width="93" height="15" />
                    <rect x="5" y="174" rx="8" ry="8" width="80" height="24" />
                    <rect x="118" y="165" rx="8" ry="8" width="32" height="32" />
                </ContentLoader>) : (
                <>
                    <div className={styles.favorite} onClick={() => onAddToFavorite(obj)}>
                        {showFavorite && <img src={isFavorite ? 'images/liked.svg' : 'images/unliked.svg'} />}
                    </div>
                    {showEdit && <div className={styles.edit} onClick={() => funSetIsEditCart(obj)}>
                        <img src='images/edit.svg' />
                    </div>}
                    {showDeleted && <div className={styles.deleted} onClick={() => !isEditCart && setIsDeleted(obj)}>
                        <img src='images/delete.svg' />
                    </div>}

                    <img className={styles.images} width={133} height={112} src={urlImage} alt="Sneakers" />
                    <h5 className={styles.cardDescription}>{title}</h5>
                    <div className={styles.cardBotton}>
                        <div className={styles.cardPrice}>
                            <span >Ціна</span>
                            <b>{price} <span>Руб</span></b>
                        </div>
                        {onAddToCart &&
                            <img
                                className={styles.plus}
                                onClick={() => onAddToCart(obj)}
                                width={11} height={11}
                                // src={isItemAdded(title, price, urlImage, parentId) ? "images/btn-checked.svg" : "images/plus.svg"}
                                src={isAdded ? "images/btn-checked.svg" : "images/plus.svg"}
                                alt="plus"
                            >
                            </img>}
                    </div>
                    <div>ID  {id}</div>
                    <div>PARENTID  {parentId}</div>

                </>
            )}
        </div>
    );
}

export default Card;
