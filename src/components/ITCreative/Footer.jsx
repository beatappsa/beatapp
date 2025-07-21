import { useTranslation } from 'next-i18next';
import { scrollToForm } from '@common/scrollToForm';

const Footer = ({ rtl, noWave }) => {
  const { t } = useTranslation('common');

  if (rtl) {
    return (
      <footer className="style-7 arabic-footer">
        <div className="container">
          <div className="content section-padding">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="info-logo text-center">
                  <a href="https://beatapp.io" className="logo d-inline-block mb-4" target="_blank" rel="noreferrer">
                    <img src="/assets/img/logos/beat logo master .png" alt="BeatApp" style={{maxHeight: '45px'}} />
                  </a>
                  
                  <div className="main-cta mb-5">
                    <h4 className="text-primary mb-3">{t('footer.cta_title')}</h4>
                    <p className="text mb-4">{t('footer.cta_subtitle')}</p>
                    
                    <div className="booking-section mb-4">
                      <button 
                        onClick={scrollToForm}
                        className="booking-btn btn btn-primary rounded-pill px-4 py-3 mb-3"
                      >
                        {t('footer.book_now')}
                      </button>
                    </div>
                    
                    <div className="contact-info mb-4">
                      <p className="mb-2">
                        <a href="mailto:info@beatapp.io" className="text-decoration-none me-3">
                          📧 info@beatapp.io
                        </a>
                        <a href="tel:0500934900" className="text-decoration-none">
                          📞 0500934900
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="social-section">
                    <p className="fw-bold mb-3">{t('footer.social_title')}</p>
                    <div className="social-links">
                      <a href="https://www.facebook.com/beatappio" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/beatappio/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://x.com/BeatAppio" target="_blank" rel="noopener noreferrer" title="Twitter/X">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/beatappio" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot bg-white p-3 rounded-pill text-center">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
        {!noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave" />}
      </footer>
    )
  }

  // English version - simplified to match RTL version
  return (
    <footer className="style-7">
      <div className="container">
        <div className="content section-padding">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="info-logo text-center">
                <a href="https://beatapp.io" className="logo d-inline-block mb-4" target="_blank" rel="noreferrer">
                  <img src="/assets/img/logos/beat logo master .png" alt="BeatApp" style={{maxHeight: '45px'}} />
                </a>
                
                <div className="main-cta mb-5">
                  <h4 className="text-primary mb-3">{t('footer.cta_title')}</h4>
                  <p className="text mb-4">{t('footer.cta_subtitle')}</p>
                  
                  <div className="booking-section mb-4">
                    <button 
                      onClick={scrollToForm}
                      className="booking-btn btn btn-primary rounded-pill px-4 py-3 mb-3"
                    >
                      {t('footer.book_now')}
                    </button>
                  </div>
                  
                  <div className="contact-info mb-4">
                    <p className="mb-2">
                      <a href="mailto:info@beatapp.io" className="text-decoration-none me-3">
                        📧 info@beatapp.io
                      </a>
                      <a href="tel:0500934900" className="text-decoration-none">
                        📞 0500934900
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="social-section">
                  <p className="fw-bold mb-3">{t('footer.social_title')}</p>
                  <div className="social-links">
                    <a href="https://www.facebook.com/beatappio" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/beatappio/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://x.com/BeatAppio" target="_blank" rel="noopener noreferrer" title="Twitter/X">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/beatappio" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot bg-white p-3 rounded-pill text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
      {!noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave" />}
    </footer>
  )
}

export default Footer