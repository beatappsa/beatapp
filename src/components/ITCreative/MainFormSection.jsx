import React from 'react';

const MainFormSection = ({ rtl }) => {
  return (
    <section id="main-form" className="main-form-section section-padding bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-head text-center mb-60">
              <div className="top-title mb-10">
                <img src="/assets/img/line_l.png" alt="" />
                <h5 className="text-primary">
                  {rtl ? "احجز الآن" : "Book Now"}
                </h5>
                <img src="/assets/img/line_r.png" alt="" />
              </div>
              <h2 className="fw-bold">
                {rtl ? (
                  <>
                    <span className="text-primary">📅 احجز مكالمتك المجانية</span> الآن
                  </>
                ) : (
                  <>
                    <span className="text-primary">📅 Book Your Free</span> Consultation Now
                  </>
                )}
              </h2>
              <p className="text-muted mt-3">
                {rtl 
                  ? "🎁 جلسة مجانية 15 دقيقة نرسم لك فيها أفضل Funnel حسب طبيعة مشروعك"
                  : "🎁 Free 15-minute session where we design the best Funnel for your business"
                }
              </p>
              
              {/* Contact Information */}
              <div className="contact-info mt-4">
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                  <a href="mailto:info@beatapp.io" className="contact-link text-decoration-none">
                    <i className="fas fa-envelope text-primary me-2"></i>
                    <span>info@beatapp.io</span>
                  </a>
                  <span className="text-muted">|</span>
                  <a href="tel:0500934900" className="contact-link text-decoration-none">
                    <i className="fas fa-phone text-primary me-2"></i>
                    <span>0500934900</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="form-container bg-white rounded-lg shadow-lg p-4">
              <div className="form-wrapper" style={{ minHeight: '592px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/4SdywNF9Ialxauvu2v5t"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px',
                    minHeight: '592px'
                  }}
                  id="inline-4SdywNF9Ialxauvu2v5t" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Marketing Form - Claim Offer"
                  data-height="592"
                  data-layout-iframe-id="inline-4SdywNF9Ialxauvu2v5t"
                  data-form-id="4SdywNF9Ialxauvu2v5t"
                  title="Marketing Form - Claim Offer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="trust-indicators text-center">
              <div className="row align-items-center">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="trust-item">
                    <i className="fas fa-shield-alt text-success fs-4 mb-2"></i>
                    <p className="small text-muted mb-0">
                      {rtl ? "آمن ومحمي 100%" : "100% Secure & Protected"}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="trust-item">
                    <i className="fas fa-clock text-primary fs-4 mb-2"></i>
                    <p className="small text-muted mb-0">
                      {rtl ? "رد خلال 24 ساعة" : "Response within 24 hours"}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="trust-item">
                    <i className="fas fa-gift text-warning fs-4 mb-2"></i>
                    <p className="small text-muted mb-0">
                      {rtl ? "استشارة مجانية تماماً" : "Completely Free Consultation"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Load the form embed script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
    </section>
  );
};

export default MainFormSection; 