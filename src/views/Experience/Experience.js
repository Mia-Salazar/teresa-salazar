import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import './Experience.scss'

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience">
      <Title title={t('education.title')} />
      <p className="text">{t('education.subtitle')}</p>
      <div>

      </div>
      <div>
        <ExperienceItem>

        </ExperienceItem>
        <ExperienceItem>

        </ExperienceItem>
        <ExperienceItem >

        </ExperienceItem>
      </div>
    </section>
  );
}

export default Experience;
