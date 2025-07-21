import { useTranslation } from 'next-i18next';
import aboutData from '@data/ITCreative/about.json';
import aboutRtlData from '@data/ITCreative/about-rtl.json';

const About = ({ rtl }) => {
  const { t } = useTranslation('common');
  const data = rtl ? aboutRtlData : aboutData;
  
  if (rtl) {
    return (
      <section className="about style-7" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head style-4 mb-40">
                  <div className="top-title mb-10">
                    <img src="/assets/img/line_l.png" alt="" />
                    <h5> {t('about.section_title')} </h5>
                  </div>
                  <h2 className="">
                    {t('about.main_title')}
                  </h2>
                </div>
                <div className="text mb-30">
                  {t('about.description')}
                </div>
                <ul>
                  {
                    data.map((item, index) => (
                      <li className="d-flex mb-20" key={index}>
                        <i className="fas fa-check-circle color-blue7 me-2 mt-2"></i>
                        <div className="text"> <strong className="color-000"> { item.title }: </strong> { item.content } </div>
                      </li>
                    ))
                  }
                </ul>
                <div className="mt-4 p-3 bg-light rounded">
                  <h6 className="mb-2">{t('about.guarantee_title')}</h6>
                  <p className="mb-0 text-muted">
                    {t('about.guarantee_text')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img">
                <img src="/assets/img/about/about7.jpg" alt="BeatApp Marketing Automation" className="main-img" />
                <img src="/assets/img/about/about7_chart.png" alt="" className="img-chart slide_up_down" />
                <span className="circle scale_up_down"></span>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/about/about_s4_wave.png" alt="" className="top-wave" />
        <img src="/assets/img/about/about_s4_wave.png" alt="" className="bottom-wave" />
        <img src="/assets/img/about/about7_lines.png" alt="" className="bg-lines" />
      </section>
    )
  }

  return (
    <section className="about style-7">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4 mb-40">
                <div className="top-title mb-10">
                  <img src="/assets/img/line_l.png" alt="" />
                  <h5> {t('about.section_title')} </h5>
                </div>
                <h2 className="">
                  {t('about.main_title')}
                </h2>
              </div>
              <div className="text mb-30">
                {t('about.description')}
              </div>
              <ul>
                {
                  data.map((item, index) => (
                    <li className="d-flex mb-20" key={index}>
                      <i className="fas fa-check-circle color-blue7 me-2 mt-2"></i>
                      <div className="text"> <strong className="color-000"> { item.title }: </strong> { item.content } </div>
                    </li>
                  ))
                }
              </ul>
              <div className="mt-4 p-3 bg-light rounded">
                <h6 className="mb-2">{t('about.guarantee_title')}</h6>
                <p className="mb-0 text-muted">
                  {t('about.guarantee_text')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="img">
              <img src="/assets/img/about/about7.jpg" alt="BeatApp Marketing Automation" className="main-img" />
              <img src="/assets/img/about/about7_chart.png" alt="" className="img-chart slide_up_down" />
              <span className="circle scale_up_down"></span>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about_s4_wave.png" alt="" className="top-wave" />
      <img src="/assets/img/about/about_s4_wave.png" alt="" className="bottom-wave" />
      <img src="/assets/img/about/about7_lines.png" alt="" className="bg-lines" />
    </section>
  )
}

export default About