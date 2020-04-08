import React from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload';
import Title from '../../components/Title/Title'
import TimelineItem from '../../components/TimelineItem/TimelineItem'
import './Education.scss'

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="education">
      <Title title={t('education.title')} />
      <p className="text">{t('education.subtitle')}</p>
      <div className="education__timeline-container">
        <p className="education__year">1989</p>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.five.title')} subtitle={t('education.five.subtitle')} year={t('education.five.year')} direction="left"/>
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.four.title')} subtitle={t('education.four.subtitle')} year={t('education.four.year')} moreInfo moreText={t('education.four.more')} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.two.title')} subtitle={t('education.two.subtitle')} year={t('education.two.year')} direction="left"/>
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.three.title')} subtitle={t('education.three.subtitle')} year={t('education.three.year')}/>
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.one.title')} subtitle={t('education.one.subtitle')} year={t('education.one.year')} direction="left" moreInfo moreText={t('education.one.more')} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.seven.title')} subtitle={t('education.seven.subtitle')} year={t('education.seven.year')} moreInfo  moreText={t('education.seven.more')} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <TimelineItem title={t('education.six.title')} subtitle={t('education.six.subtitle')} year={t('education.six.year')} direction="left" moreInfo moreText={t('education.six.more')} />
        </LazyLoad>
        <p className="education__year  education__year--last">{t('education.now')}</p>
      </div>
    </section>
  );
}

export default Education;
