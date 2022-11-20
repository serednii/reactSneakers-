import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Draver from './components/Drawer/Drawer';
// import logo from "./public/img/logo.png";
// import shea1 from "./1.jpg";
// import slider from "./slider.jpg";

import plus from "./public/img/plus.svg";
import heart_liked from "./public/img/heart-liked.svg";
// import heart_unliked from "./public/img/heart-unliked.svg";
// import btn_plus from "./public/img/btn-plus.svg";
// import btn_checked from "./public/img/btn-checked.svg";
import arrow from "./public/img/arrow.svg"



function App() {
  return <div className='wrapper'>

    <div style={{ display: 'none' }} className="overlay">
      <Draver />
    </div>



    <Header />



    <hr className='line'></hr>

    <img className='slider' src={require("./public/img/slider.jpg")} alt='slider' />

    <div className='content'>
      <div className='title-block'>
        <h1 className='title'>Все кросовки</h1>
        <div className='search-block'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" />
          </svg>
          <input placeholder='Поиск ...' />
        </div>
      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


















      </div>

    </div>
  </div >
}
// 1:38
export default App;
