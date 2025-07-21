import { useTranslation } from 'next-i18next';
import services from '@data/ITCreative/services.json';
import servicesRtl from '@data/ITCreative/services-rtl.json';

const Services = ({ rtl }) => {
  const { t } = useTranslation('common');
  const data = rtl ? servicesRtl : services;
  
  if (rtl) {
    return (
      <section className="services style-7 pt-100" id="services">
        <div className="container">
          <div className="section-head text-center style-4 mb-50">
            <div className="top-title mb-10">
              <img src="/assets/img/line_l.png" alt="" />
              <h5> {t('services.section_title')} </h5>
              <img src="/assets/img/line_r.png" alt="" />
            </div>
            <h2 className="">
              {t('services.main_title')}
            </h2>
            <div className="mt-3">
              <p className="text-muted">{t('services.description')}</p>
            </div>
          </div>
          <div className="services-content pb-100">
            <div className="row">
              {
                data.map((service, index) => (
                  <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                    <div className="service-item-style7 h-100">
                      <div className="img">
                        <img src={service.image} alt={service.title} />
                        <span className="icon">
                          <i className={service.icon}></i>
                        </span>
                      </div>
                      <div className="info">
                        <h6>{ service.title }</h6>
                        <p className="text">{ service.description }</p>
                        <a href="#contact" className="text-decoration-none"> 
                          <i className="fal fa-long-arrow-left"></i> {t('services.learn_more')} <i className="fal fa-long-arrow-left"></i> 
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="services style-7 pt-100" id="services">
      <div className="container">
        <div className="section-head text-center style-4 mb-50">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> {t('services.section_title')} </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            {t('services.main_title')}
          </h2>
          <div className="mt-3">
            <p className="text-muted">{t('services.description')}</p>
          </div>
        </div>
        <div className="services-content pb-100">
          <div className="row">
            {
              data.map((service, index) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                  <div className="service-item-style7 h-100">
                    <div className="img">
                      <img src={service.image} alt={service.title} />
                      <span className="icon">
                        <i className={service.icon}></i>
                      </span>
                    </div>
                    <div className="info">
                      <h6>{ service.title }</h6>
                      <p className="text">{ service.description }</p>
                      <a href="#contact" className="text-decoration-none"> 
                        <i className="fal fa-long-arrow-right"></i> {t('services.learn_more')} <i className="fal fa-long-arrow-right"></i> 
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services