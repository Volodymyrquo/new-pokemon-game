import React from 'react';
import s from './Header.module.css';

const Header = ({ title, descr,onClickButton }) => {
const handleOnClick =()=>{


  onClickButton && onClickButton('game')
}

  return (
    <header className={s.root}>
   
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
      <button  onClick={handleOnClick}>
        Start Game
      </button>
      </div>
    </header>
  );
};

export default Header;
