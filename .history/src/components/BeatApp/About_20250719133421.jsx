import aboutDataRTL from '@data/BeatApp/about-rtl.json';

const About = ({ rtl }) => {
  const data = aboutDataRTL;

  return (
    <section className="about style-4">
      <div className="content frs-content" id="about" data-scroll-index="2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="img mb-30 mb-lg-0">
                <img src="/assets/img/about/ipad.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head style-4">
                  <small className="title_small">BeatApp</small>
                  <h2 className="mb-30">من نحن</h2>
                </div>
                <p className="text mb-40">
                  نحن في BeatApp نساعدك على تحقيق أهدافك التسويقية وزيادة مبيعاتك من خلال توفير حلول تقنية مبتكرة ومتكاملة. نحن نؤمن بأن التكنولوجيا هي المفتاح لنجاح أي عمل تجاري، ولهذا السبب نعمل على تطوير أدوات تساعدك على إدارة أعمالك بكفاءة وفعالية.
                </p>
                <ul>
                  {
                    data.features.map((item, index) => (
                      <li className="d-flex align-items-center mb-3" key={index}>
                        <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                          <i className={item.icon}></i>
                        </small>
                        <h6 className="fw-bold">{item.title}</h6>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/about/about_s4_lines.png" alt="" className="lines" />
        <img src="/assets/img/about/about_s4_bubble.png" alt="" className="bubble" />
      </div>
    </section>
  )
}

export default About;