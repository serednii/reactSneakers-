import React from 'react';

function Drawer() {
    return (
        <div className="draver">

            <h2 className='mb-30'>Корзина
                {/* <img className='remove_btn' src={require("./public/img/btn-remove.png")} alt='Remove' /> */}

            </h2>

            <div className='cart-items'>

                <div className='cart-item'>
                    {/* <div style={{ backgroundImage: `url(${require("./public/img/sneakers/1.jpg")})` }} className='cartItemImg'></div> */}
                    <div className='mr-20'>
                        <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999  руб.</b>
                    </div>
                    {/* <img className='remove_btn' src={require("./public/img/btn-remove.png")} alt='Remove' /> */}
                </div>






            </div>

            <ul className='cartTotalBlock'>
                <li className='d-flex'>
                    <span>Итого:</span>
                    <div></div>
                    <b>21498 руб</b>
                </li>
                <li className='d-flex'>
                    <span>Налог 5%</span>
                    <div></div>
                    <b>1074 руб</b>
                </li>
            </ul>

            <button className='greenButton'>Оформить заказ
                {/* <img width={11} height={11} src={arrow} alt="Arrow" /> */}
            </button>


        </div>
    );
}

export default Drawer;