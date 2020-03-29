import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import SocialLink from '../SocialLink/SocialLink'
import './Footer.scss'

const Footer = () => {
	const { t } = useTranslation();
  return (
    <div className="footer-container">
      <div className="footer-container__square-container">
        <span className="footer-container__square footer-container__square--back"></span>
        <span className="footer-container__square footer-container__square--front"></span>
        <p className="footer-container__title">Teresa</p>
      </div>
      <div className="footer-container__social">
        <SocialLink href="https://www.linkedin.com/in/seleccionit/" icon="linkedin-box" fill={'fill'} size="2x" color="white" />
        <SocialLink href="https://twitter.com/tsalazargr" icon="twitter" fill={'fill'} size="2x" color="white" />
        <SocialLink href="https://medium.com/@tsalazargr" icon="medium" fill={'fill'} size="2x" color="white" />
        <SocialLink href="https://github.com/TSalazargr" icon="github" fill={'fill'}  size="2x" color="white" />
      </div>
      <p className="footer-container__author">{t('footer.made')} <a href="https://www.miasalazar.com" target="_blank" rel="noreferrer noopener">Mia Salazar</a></p>
      <p className="footer-container__author">{t('footer.github')} <a href="https://github.com/Mia-Salazar/teresa-salazar" target="_blank" rel="noreferrer noopener">Github</a></p>
    </div>
  );
}

Footer.propTypes = {
  Footer: PropTypes.string.isRequired
}

export default Footer;
