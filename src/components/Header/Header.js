import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import foto from '../../assets/images/foto.jpg'
import Nav from '../Nav/Nav'
import './Header.scss'

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

	const { t } = useTranslation();
  return (
		<header className="header">
      <div className="header__img-frame">
        <img className="header__img" src={foto} alt={t('header.img')} />
      </div>
      <h1 className="header__title">Teresa Salazar</h1>
      <p className="header__subtitle">García-Rosales</p>
      <button className={menuVisible ? 'header__hamburguer open' : 'header__hamburguer'} onClick={toggleMenu}>
        <span className="header__hamburguer-item jedi"></span>
        <span className="header__hamburguer-item second"></span>
        <span className="header__hamburguer-item third"></span>
        <span className="header__hamburguer-item fourth"></span>
        <span className="header__hamburguer-item fifth"></span>
        <span className="header__hamburguer-item sith"></span>
      </button>
      <Nav menuVisible={menuVisible} />
		</header>
  );
}

export default Header;