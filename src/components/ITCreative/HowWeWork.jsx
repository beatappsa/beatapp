import React from 'react'

const HowWeWork = ({ rtl }) => {
  if (rtl) {
    return (
      <section className="how-we-work style-7 section-padding bg-gray1" id="workflow">
        <div className="container">
          <div className="section-head text-center style-4 mb-80">
            <div className="top-title mb-10">
              <img src="/assets/img/line_l.png" alt="" />
              <h5> عمليتنا </h5>
              <img src="/assets/img/line_r.png" alt="" />
            </div>
            <h2 className="section-title arabic-text">
              🛠️ كيف نتعاون معك؟
            </h2>
          </div>
          
          <div className="workflow-steps">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="step-card text-center h-100">
                  <div className="step-number mb-3">
                    <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                      1
                    </span>
                  </div>
                  <div className="step-content">
                    <h5 className="arabic-text font-semibold mb-3">جلسة تشخيصية</h5>
                    <p className="text-muted arabic-text">لفهم مشروعك وأهدافك</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="step-card text-center h-100">
                  <div className="step-number mb-3">
                    <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                      2
                    </span>
                  </div>
                  <div className="step-content">
                    <h5 className="arabic-text font-semibold mb-3">تصميم نظام مخصص</h5>
                    <p className="text-muted arabic-text">لمشروعك خلال 7 أيام</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="step-card text-center h-100">
                  <div className="step-number mb-3">
                    <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                      3
                    </span>
                  </div>
                  <div className="step-content">
                    <h5 className="arabic-text font-semibold mb-3">التسليم والشرح</h5>
                    <p className="text-muted arabic-text">نسلمه لك ونشرحلك كيف تستخدمه (أو نديره لك)</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="step-card text-center h-100">
                  <div className="step-number mb-3">
                    <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                      4
                    </span>
                  </div>
                  <div className="step-content">
                    <h5 className="arabic-text font-semibold mb-3">النتائج تظهر</h5>
                    <p className="text-muted arabic-text">والنظام يشتغل حتى وإنت نايم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-50">
            <a href="https://beatapp.io/booking" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white" target="_blank">
              <small> 📅 ابدأ مشروعك الآن <i className="fas fa-long-arrow-alt-left"></i> </small>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="how-we-work style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-80">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Our Process </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            How We <span> Work Together </span>
          </h2>
        </div>
        
        <div className="workflow-steps">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="step-card text-center h-100">
                <div className="step-number mb-3">
                  <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    1
                  </span>
                </div>
                <div className="step-content">
                  <h5 className="font-semibold mb-3">Discovery Session</h5>
                  <p className="text-muted">Understanding your project and goals</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="step-card text-center h-100">
                <div className="step-number mb-3">
                  <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    2
                  </span>
                </div>
                <div className="step-content">
                  <h5 className="font-semibold mb-3">Custom System Design</h5>
                  <p className="text-muted">Tailored for your project within 7 days</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="step-card text-center h-100">
                <div className="step-number mb-3">
                  <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    3
                  </span>
                </div>
                <div className="step-content">
                  <h5 className="font-semibold mb-3">Delivery & Training</h5>
                  <p className="text-muted">We deliver and explain how to use it</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="step-card text-center h-100">
                <div className="step-number mb-3">
                  <span className="number bg-blue7 text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                    4
                  </span>
                </div>
                <div className="step-content">
                  <h5 className="font-semibold mb-3">Results Appear</h5>
                  <p className="text-muted">The system works even while you sleep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-50">
          <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white">
            <small> Start Your Project <i className="fas fa-long-arrow-alt-right"></i> </small>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork 