import aboutData from '@data/ITCreative/about.json';
import aboutRtlData from '@data/ITCreative/about-rtl.json';

const About = ({ rtl }) => {
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
                    <h5> عن BeatApp </h5>
                  </div>
                  <h2 className="">
                    💡 ماذا سيتغير بعد <span> تعاونك معنا؟ </span>
                  </h2>
                </div>
                <div className="text mb-30">
                  إذا كنت تعاني من فوضى التسويق، وكثرة الرسائل، وتشتت الأدوات… <strong>BeatApp</strong> يجمع لك كل خطوات جذب العميل ومتابعته وتحويله في نظام واحد يشتغل عنك حتى وأنت مشغول.
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
                  <h6 className="mb-2">🛡️ ضماننا لك:</h6>
                  <p className="mb-0 text-muted">
                    نحن لا نقدم نظامًا جاهزًا للجميع… بل نبني نظامًا مخصصًا لك حسب طبيعة مشروعك. 
                    ولو شعرت خلال أول 7 أيام إنه لا يخدمك كما توقعت، نصلّح لك المسار أو نوقف الاشتراك… بدون أي التزام.
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
                  <h5> About Us </h5>
                </div>
                <h2 className="">
                  Meet With <span> A House </span> <br /> Of Creatives.
                </h2>
              </div>
              <div className="text mb-30">
                Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hash tags, nested notebooks, pinning notes.
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
            </div>
          </div>
          <div className="col-lg-7">
            <div className="img">
              <img src="/assets/img/about/about7.jpg" alt="" className="main-img" />
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