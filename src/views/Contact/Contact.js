import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <Title title={t('contact.title')} />
      <p className="text">{t('header.about')}</p>
      <h2 className="leading-text">{t('contact.form')}</h2>
      <form className="contact__form" action="https://formspree.io/t.salazargr@gmail.com" method="POST">
        <Input label={t('contact.name')} id="name" type="text" name="name" />
        <Input label={t('contact.mail')} id="mail" type="email" name="_replyto" required />
        <label className="contact__textarea-container" for="message">
        {t('contact.message')}
          <textarea className="contact__textarea" name="message" id="message"></textarea>
        </label>
        <Button type="submit" text={t('contact.cta')} />
    </form>
    </section>
  );
}

export default Contact;
