import React from 'react'
import { useTranslation } from 'next-i18next';
import { scrollToForm } from '@common/scrollToForm'

const Header = ({ rtl }) => {
  const { t } = useTranslation('common');

  if (rtl) {
    return (
      <header className="style-7">
        <div className="content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="info mt-5 mt-lg-0">
                  <div className="section-head style-4">
                    <div className="top-title">
                      <img src="/assets/img/line_l.png" alt="" />
                      <h5> {t('header.brand_name')} </h5>
                    </div>
                  </div>
                  <h1 className="hero-title arabic-text">
                    {t('header.hero_title')}
                  </h1>
                  <div className="mb-4">
                    <p className="text-xl leading-relaxed arabic-text">
                      <strong>{t('header.brand_name')}</strong> {t('header.hero_description')}
                    </p>
                  </div>
                  <div className="d-flex flex-wrap">
                    <button 
                      onClick={scrollToForm} 
                      className="btn hero-cta-btn rounded-pill fw-bold text-white me-4 px-4 py-3"
                    >
                      <span className="cta-text">
                        {t('header.cta_button')}
                        <i className="fas fa-arrow-left ms-2"></i>
                      </span>
                    </button>
                    <div className="inf mt-3 mt-lg-0">
                      <p className="color-999"> {t('header.contact_label')} </p>
                      <a href="tel:0500934900" className="fw-bold"> {t('header.phone_number')} </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img mt-4 mt-lg-0">
                  <img src="/assets/img/header/head_img7.png" alt="BeatApp Marketing Automation" />
                  <img src="/assets/img/header/head7_rock.png" alt="" className="rock7 slide_up_down" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <img src="/assets/img/header/head7_bg.png" alt="" className="head7_bg slide_up_down" />
      </header>
    )
  }

  return (
    <header className="style-7">
      <div className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info mt-5 mt-lg-0">
                <div className="section-head style-4">
                  <div className="top-title">
                    <img src="/assets/img/line_l.png" alt="" />
                    <h5> {t('header.brand_name')} </h5>
                  </div>
                </div>
                <h1>
                  {t('header.hero_title')}
                </h1>
                <div className="mb-4">
                  <p className="text-xl leading-relaxed">
                    <strong>{t('header.brand_name')}</strong> {t('header.hero_description')}
                  </p>
                </div>
                <div className="d-flex flex-wrap">
                  <button 
                    onClick={scrollToForm} 
                    className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4"
                  >
                    <small> {t('header.cta_button')} <i className="fas fa-long-arrow-alt-right"></i> </small>
                  </button>
                  <div className="inf mt-3 mt-lg-0">
                    <p className="color-999"> {t('header.contact_label')} </p>
                    <a href="tel:0500934900" className="fw-bold"> {t('header.phone_number')} </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0">
                <img src="/assets/img/header/head_img7.png" alt="BeatApp Marketing Automation" />
                <img src="/assets/img/header/head7_rock.png" alt="" className="rock7 slide_up_down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head7_bg.png" alt="" className="head7_bg slide_up_down" />
    </header>
  )
}

export default Header;