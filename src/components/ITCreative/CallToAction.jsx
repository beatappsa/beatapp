import React from 'react'

const CallToAction = ({ rtl }) => {
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
                    📅 احجز مكالمتك المجانية الآن
                  </h2>
                  
                  <p className="arabic-text text-xl leading-relaxed mb-5">
                    🎁 جلسة مجانية 15 دقيقة نرسم لك فيها أفضل Funnel حسب طبيعة مشروعك.
                  </p>
                  
                  <div className="cta-actions mb-5">
                    <a 
                      href="https://beatapp.io/booking" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg cta-button mb-3"
                    >
                      <span className="arabic-text font-semibold">
                        📍 احجز الآن عبر beatapp.io/booking
                      </span>
                    </a>
                  </div>
                  
                  <div className="contact-info">
                    <div className="contact-details">
                      <a href="mailto:info@beatapp.io" className="contact-link me-4">
                        📧 info@beatapp.io
                      </a>
                      <a href="tel:0500934900" className="contact-link">
                        📞 0500934900
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
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
                  📅 Book Your Free Call Now
                </h2>
                
                <p className="text-xl leading-relaxed mb-5">
                  🎁 Free 15-minute session where we design the best funnel according to your project nature.
                </p>
                
                <div className="cta-actions mb-5">
                  <a 
                    href="https://beatapp.io/booking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg cta-button mb-3"
                  >
                    <span className="font-semibold">
                      📍 Book Now via beatapp.io/booking
                    </span>
                  </a>
                </div>
                
                <div className="contact-info">
                  <div className="contact-details">
                    <a href="mailto:info@beatapp.io" className="contact-link me-4">
                      📧 info@beatapp.io
                    </a>
                    <a href="tel:0500934900" className="contact-link">
                      📞 0500934900
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 