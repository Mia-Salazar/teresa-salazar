import React from 'react'
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom";
import SocialLink from '../SocialLink/SocialLink'
import './Nav.scss'

const Nav = ({menuVisible}) => {
  const { t } = useTranslation();

  return (
    <nav className={menuVisible ? 'nav open' : 'nav'}>
      <div className="nav__square"></div>
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/experiencia" label="Experience">{t('nav.experience')}</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/formacion" label="Education">{t('nav.education')}</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/charlas" label="Speech">{t('nav.speech')}</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/contacto" label="Contact">{t('nav.contact')}</Link></li>
      </ul>
      <ul className="nav__social">
        <SocialLink href="https://www.linkedin.com/in/seleccionit/" icon="linkedin-box" fill={'fill'} size="2x" />
        <SocialLink href="https://twitter.com/tsalazargr" icon="twitter" fill={'fill'} size="2x" />
        <SocialLink href="https://medium.com/@tsalazargr" icon="medium" fill={'fill'} size="2x" />
        <SocialLink href="https://github.com/TSalazargr" icon="github" fill={'fill'}  size="2x" />
      </ul>
    </nav>
  );
}

export default Nav;
