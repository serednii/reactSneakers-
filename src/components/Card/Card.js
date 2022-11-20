import React from 'react';

function Card() {
    return (
        <div className="card">
            <img width={133} height={112} src={require("../../public/img/sneakers/2.jpg")} alt="Sneakers" />
            <h5 className="cardeDscription">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBotton">
                <div className="cardPrice">
                    <span >Ціна</span>
                    <b>190999 <span>Руб</span></b>
                </div>2:12
                <button className='button'>
                    {/* <img width={11} height={11} src={plus} alt=""></img> */}
                </button>
            </div>
        </div>
    );
}

export default Card;
