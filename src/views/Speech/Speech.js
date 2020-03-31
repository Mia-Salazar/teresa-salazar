import React from 'react'
import { useTranslation } from 'react-i18next'
import Masonry from 'react-masonry-css'
import Title from '../../components/Title/Title'
import MasonryItem from '../../components/MasonryItem/MasonryItem'
import cardImage from '../../assets/images/card-light.png'
import pumpkinImage from '../../assets/images/halloween-light.png'
import wantedImage from '../../assets/images/wanted-light.png'
import './Speech.scss'

const Speech = () => {
  const { t } = useTranslation();

  const breakpointColumnsObj = {
    default: 3,
    1440: 3,
    1200: 2,
    500: 1
  }; 

  var items = [
    {id: 1, name: t('article.article4.title'), text: t('article.article4.text'), alt: t('article.article1.alt'), link: "https://www.youtube.com/watch?v=Z7gQGcVtBiM/", video: 'https://www.youtube.com/embed/Z7gQGcVtBiM'},
    {id: 2, name: t('article.article2.title'), src: pumpkinImage, text: t('article.article2.text'), alt: t('article.article1.alt'), link: "https://medium.com/@tsalazargr/7-seres-de-ultratumba-que-encontrar%C3%A1s-en-una-oficina-632e25120b55", video: ''},
    {id: 3, name: t('article.article3.title'), src: wantedImage, text: t('article.article3.text'), alt: t('article.article1.alt'), link: "https://www.linkedin.com/pulse/se-busca-madre-social-los-peligros-de-la-tecnolog%C3%ADa-teresa/", video: ''},
    {id: 4, name: t('article.article1.title'), src: cardImage, text: t('article.article1.text'), alt: t('article.article1.alt'), link: "https://medium.com/@tsalazargr/el-algoritmo-de-apple-card-es-el-nuevo-test-de-inteligencia-877114351efa", video: ''},
    {id: 5, name: t('article.article5.title'), text: '', alt: t('article.article1.alt'), link: "https://www.facebook.com/85638467171/videos/318707818747458/?t=2", video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F85638467171%2Fvideos%2F318707818747458%2F&show_text=0&width=560'},
  ];

  items = items.map(function(item) {
    return <MasonryItem key={item.id} title={item.name} alt={item.alt} text={item.text} src={item.src} video={item.video !== ''} videoURL={item.video} link={item.link}/>
  });

  return (
    <section className="speech">
      <Title title={t('speech.title')} />
      <p className="text">{t('header.about')}</p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          {items}
      </Masonry>

    </section>
  );
}

export default Speech;
