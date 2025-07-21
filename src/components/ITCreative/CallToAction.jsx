import React from 'react'
import { useTranslation } from 'next-i18next';
import { scrollToForm } from '@common/scrollToForm'

const CallToAction = ({ rtl }) => {
  const { t } = useTranslation('common');

  if (rtl) {
    return (
      <section className="call-to-action section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-content">
                <div className="separator mb-5">
                  <span className="separator-line">⸻</span>
                </div>
                
                <div className="cta-main text-center">
                  <h2 className="arabic-text display-3 font-bold mb-4">
                    {t('cta.title')}
                  </h2>
                  
                  <p className="arabic-text text-xl leading-relaxed mb-5">
                    {t('cta.subtitle')}
                  </p>
                  
                  <div className="cta-actions mb-5">
                    <button 
                      onClick={scrollToForm}
                      className="btn btn-primary btn-lg cta-button mb-3"
                    >
                      <span className="arabic-text font-semibold">
                        {t('cta.button')}
                      </span>
                    </button>
                  </div>
                  
                  <div className="contact-info">
                    <div className="contact-details">
                      <a href="mailto:info@beatapp.io" className="contact-link me-4">
                        {t('cta.email')}
                      </a>
                      <a href="tel:0500934900" className="contact-link">
                        {t('cta.phone')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="call-to-action section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cta-content">
              <div className="separator mb-5">
                <span className="separator-line">⸻</span>
              </div>
              
              <div className="cta-main text-center">
                <h2 className="display-3 font-bold mb-4">
                  {t('cta.title')}
                </h2>
                
                <p className="text-xl leading-relaxed mb-5">
                  {t('cta.subtitle')}
                </p>
                
                <div className="cta-actions mb-5">
                  <button 
                    onClick={scrollToForm}
                    className="btn btn-primary btn-lg cta-button mb-3"
                  >
                    <span className="font-semibold">
                      {t('cta.button')}
                    </span>
                  </button>
                </div>
                
                <div className="contact-info">
                  <div className="contact-details">
                    <a href="mailto:info@beatapp.io" className="contact-link me-4">
                      {t('cta.email')}
                    </a>
                    <a href="tel:0500934900" className="contact-link">
                      {t('cta.phone')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction 