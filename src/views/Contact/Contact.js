import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <Title title={t('home.title')} />
    </section>
  );
}

export default Contact;
