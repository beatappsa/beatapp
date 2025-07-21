import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import features from '@data/ITCreative/features.json';
import featuresRtl from '@data/ITCreative/features-rtl.json';

SwiperCore.use([Autoplay]);

import "swiper/css";
import 'swiper/css/autoplay';
import { scrollToForm } from '@common/scrollToForm';

const Features = ({ rtl }) => {
  const { t } = useTranslation('common');
  const [load, setLoad] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);
  const data = rtl ? featuresRtl : features;

  useEffect(() => {
    // Add a small delay to ensure proper hydration and DOM readiness
    const timer = setTimeout(() => {
      setLoad(true);
      // Give additional time for Swiper to initialize properly
      setTimeout(() => {
        setSwiperReady(true);
      }, 200);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Always render fallback if Swiper isn't ready or if there are issues
  const renderFallbackGrid = () => (
    <div className="row">
      {
        data.map((feature, index) => (
          <div key={index} className={rtl ? "col-lg-4 col-md-6 mb-4 mt-4" : "col-lg-4 col-md-6 mb-4"}>
            <a href="#" className="features-card style-7 d-block h-100">
              <div className="icon">
                <img src={feature.image} alt="" />
              </div>
              <div className="info">
                <p className="color-999"> {t('features.step_label')} {feature.id} </p>
                <h5> {feature.title.part1} <br /> {feature.title.part2} </h5>
                <small className="text-muted">{feature.description}</small>
              </div>
            </a>
          </div>
        ))
      }
    </div>
  );

  if (rtl) {
    return (
      <section className="features style-7 section-padding" id="features">
        <div className="container">
          <div className="section-head text-center style-4 mb-40">
            <div className="top-title mb-10">
              <img src="/assets/img/line_l.png" alt="" />
              <h5> {t('features.section_title')} </h5>
              <img src="/assets/img/line_r.png" alt="" />
            </div>
            <h2 className="">
              {t('features.main_title')}
            </h2>
            <div className="mt-3">
              <p className="text-muted">{t('features.description')}</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="features-slider7">
            {/* Always show fallback for better reliability */}
            {renderFallbackGrid()}
          </div>
          <div className="btns text-center mt-10">
            <button onClick={scrollToForm} className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4 mb-4 mb-lg-0">
              <small> {t('features.book_call_btn')} <i className="fas fa-long-arrow-alt-left"></i> </small>
            </button>
            <a href="#pricing" className="btn btn-icon-circle rounded-pill bg-white fw-bold me-4">
              <small> {t('features.view_packages_btn')} <i className="fas fa-long-arrow-alt-left bg-light"></i> </small>
            </a>
          </div>
        </div>
        <img src="/assets/img/feat_circle.png" alt="" className="img-circle rotate-center" />
      </section>
    )
  }

  return (
    <section className="features style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-40">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> {t('features.section_title')} </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            {t('features.main_title')}
          </h2>
          <div className="mt-3">
            <p className="text-muted">{t('features.description')}</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="features-slider7">
          {/* Always show fallback for better reliability */}
          {renderFallbackGrid()}
        </div>
        <div className="btns text-center mt-10">
          <button onClick={scrollToForm} className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4 mb-4 mb-lg-0">
            <small> {t('features.book_call_btn')} <i className="fas fa-long-arrow-alt-right"></i> </small>
          </button>
          <a href="#pricing" className="btn btn-icon-circle rounded-pill bg-white fw-bold me-4">
            <small> {t('features.view_packages_btn')} <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
          </a>
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle rotate-center" />
    </section>
  )
}

export default Features