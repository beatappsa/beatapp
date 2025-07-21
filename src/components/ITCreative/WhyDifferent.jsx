import React from 'react'

const WhyDifferent = ({ rtl }) => {
  const featuresData = [
    "هو ليس مجرد أدوات… بل نظام مصمّم لخدمة هدفك",
    "تسويق يعمل نيابةً عنك وأنت تركّز على عملك", 
    "واجهة عربية سهلة – بدون مصطلحات تقنية",
    "فريق سعودي ومصري بخبرة فعلية في التسويق والتحويل",
    "مناسب للأشخاص والشركات… ومصمّم لنتائج حقيقية"
  ];

  const featuresDataEn = [
    "It's not just tools... but a system designed to serve your goal",
    "Marketing that works on your behalf while you focus on your business",
    "Easy Arabic interface - without technical jargon", 
    "Saudi and Egyptian team with real experience in marketing and conversion",
    "Suitable for individuals and companies... designed for real results"
  ];

  if (rtl) {
    return (
      <section className="why-different section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head mb-60">
                <h2 className="arabic-text display-4 font-bold mb-4">
                  🏆 لماذا "BeatApp" مختلف؟
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="features-list mb-5">
                {featuresData.map((feature, index) => (
                  <div className="feature-item mb-3" key={index}>
                    <div className="d-flex align-items-start">
                      <div className="check-icon me-3">
                        <span className="text-success">✅</span>
                      </div>
                      <p className="arabic-text text-lg leading-relaxed mb-0">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="guarantee-section">
                <div className="guarantee-content text-center">
                  <div className="separator mb-4">
                    <span className="separator-line">⸻</span>
                  </div>
                  
                  <h3 className="arabic-text font-bold mb-4">ضماننا لك:</h3>
                  
                  <div className="guarantee-text">
                    <p className="arabic-text text-lg leading-relaxed mb-3">
                      نحن لا نقدم نظامًا جاهزًا للجميع…<br/>
                      بل نبني نظامًا مخصصًا لك حسب طبيعة مشروعك.
                    </p>
                    <p className="arabic-text text-lg leading-relaxed mb-0">
                      ولو شعرت خلال أول 7 أيام إنه لا يخدمك كما توقعت،<br/>
                      نصلّح لك المسار أو نوقف الاشتراك… بدون أي التزام
                    </p>
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
    <section className="why-different section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-head mb-60">
              <h2 className="display-4 font-bold mb-4">
                🏆 Why "BeatApp" is Different?
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="features-list mb-5">
              {featuresDataEn.map((feature, index) => (
                <div className="feature-item mb-3" key={index}>
                  <div className="d-flex align-items-start">
                    <div className="check-icon me-3">
                      <span className="text-success">✅</span>
                    </div>
                    <p className="text-lg leading-relaxed mb-0">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="guarantee-section">
              <div className="guarantee-content text-center">
                <div className="separator mb-4">
                  <span className="separator-line">⸻</span>
                </div>
                
                <h3 className="font-bold mb-4">Our Guarantee to You:</h3>
                
                <div className="guarantee-text">
                  <p className="text-lg leading-relaxed mb-3">
                    We don't provide a ready-made system for everyone...<br/>
                    but we build a custom system for you according to your project nature.
                  </p>
                  <p className="text-lg leading-relaxed mb-0">
                    If you feel within the first 7 days that it doesn't serve you as expected,<br/>
                    we'll fix the path for you or stop the subscription... without any commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent; 