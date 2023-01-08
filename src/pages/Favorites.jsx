
import React from 'react';
import TitleCards from '../components/TitleCards/TitleCards';
import Card from '../components/Card/Card';
import styles from '../pages/Favorites.module.scss'
import AppContext from '../context';
function Favorites() {
    const { favorites, searchValue } = React.useContext(AppContext);
    return (
        <div>
            <TitleCards key="titleCards" />
            <div className={styles.cards}>
                {favorites.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((e, i) => (
                    <Card key={"card" + i}
                        favorited={true}
                        {...e}
                        setIsDeleted={false}
                        showFavorite
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;