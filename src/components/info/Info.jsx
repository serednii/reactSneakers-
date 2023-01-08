import React from 'react';
import AppContext from '../../context';
import styles from './Info.module.scss'
const Info = ({ title, image, description, onClose }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.draverItemsEmpty}>
      <img className={styles.draverItemsEmpty} width={120} height={120} src={image} alt="Arrow" />
      <h2>{title}</h2>
      <p >{description}</p>
      <button onClick={onClose} className="greenButton">
        <img className='remove_btn' src="images/arrow.svg" alt='Arrow' />
        Вернутся назад
      </button>
    </div>
  );
};

export default Info;
