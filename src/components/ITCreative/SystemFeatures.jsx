import React from 'react'

const SystemFeatures = ({ rtl }) => {
  const featuresData = [
    {
      emoji: "💬",
      title: "واتساب",
      description: "بوت يرد عنك، يجمع بيانات العملاء، ويتابع تلقائيًا"
    },
    {
      emoji: "📧", 
      title: "إيميلات",
      description: "رسائل تُرسل أوتوماتيكيًا حسب ما يناسب كل عميل"
    },
    {
      emoji: "🧠",
      title: "تسلسل ذكي", 
      description: "كل عميل يمشي في funnel أو مسار خاص به إلى أن يتم تحويله"
    },
    {
      emoji: "📲",
      title: "فورمات وصفحة هبوط",
      description: "تجعل الزائر يتحول إلى عميل، بدون أن يشعر إنه في عملية بيع"
    },
    {
      emoji: "🗂️",
      title: "CRM تلقائي",
      description: "تجعل كل متفاعل يتسجل عندك بالاسم والحالة والمتابعة"
    },
    {
      emoji: "⚙️",
      title: "تنبيهات ومهام",
      description: "تصلك فقط عندما يكون العميل جاهز للشراء"
    }
  ]

  if (rtl) {
    return (
      <section className="system-features style-7 section-padding" id="system-features">
        <div className="container">
          <div className="section-head text-center style-4 mb-80">
            <div className="top-title mb-10">
              <img src="/assets/img/line_l.png" alt="" />
              <h5> النظام </h5>
              <img src="/assets/img/line_r.png" alt="" />
            </div>
            <h2 className="section-title arabic-text mb-4">
              🔌 نظام واحد… يعمل بدلاً منك
            </h2>
            <div className="mt-3 mb-5">
              <p className="text-xl leading-relaxed arabic-text text-muted">
                BeatApp يوفر عليك إدارة 6 أدوات منفصلة… ويعطيك نتائج أوضح بجهد أقل.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="arabic-text font-semibold text-dark">
                الخطوات التي تتم فعليًا
              </h4>
            </div>
          </div>
          
          <div className="system-features-grid">
            <div className="row">
                             {featuresData.map((feature, index) => (
                 <div className="col-lg-4 col-md-6 mb-4 mt-4" key={index}>
                  <div className="feature-item h-100">
                    <div className="feature-icon mb-3">
                      <span className="emoji-icon">{feature.emoji}</span>
                    </div>
                    <div className="feature-content">
                      <h5 className="arabic-text font-semibold mb-3">{feature.title}</h5>
                      <p className="text-muted arabic-text leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-60">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="cta-box bg-light rounded-3 p-4">
                  <h5 className="arabic-text font-semibold mb-3 text-dark">
                    💡 جاهز لتجربة النظام؟
                  </h5>
                  <p className="text-muted arabic-text mb-4">
                    احصل على عرض توضيحي مخصص لمشروعك واكتشف كيف يمكن لـ BeatApp أن يغير طريقة عملك
                  </p>
                  <a href="https://beatapp.io/booking" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white" target="_blank" rel="noreferrer">
                    <small> 🎯 احجز عرضك التوضيحي <i className="fas fa-long-arrow-alt-left"></i> </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="system-features style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-80">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> System </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="mb-4">
            One System… <span> Works For You </span>
          </h2>
          <div className="mt-3 mb-5">
            <p className="text-xl leading-relaxed text-muted">
              BeatApp saves you from managing 6 separate tools… and gives you clearer results with less effort.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-dark">
              Steps That Actually Happen
            </h4>
          </div>
        </div>
        
        <div className="system-features-grid">
                     <div className="row">
             <div className="col-lg-4 col-md-6 mb-4 mt-4">
               <div className="feature-item h-100">
                 <div className="feature-icon mb-3">
                   <span className="emoji-icon">💬</span>
                 </div>
                 <div className="feature-content">
                   <h5 className="font-semibold mb-3">WhatsApp</h5>
                   <p className="text-muted leading-relaxed">Bot that responds for you, collects customer data, and follows up automatically</p>
                 </div>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4 mt-4">
               <div className="feature-item h-100">
                 <div className="feature-icon mb-3">
                   <span className="emoji-icon">📧</span>
                 </div>
                 <div className="feature-content">
                   <h5 className="font-semibold mb-3">Emails</h5>
                   <p className="text-muted leading-relaxed">Messages sent automatically according to what suits each client</p>
                 </div>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4 mt-4">
               <div className="feature-item h-100">
                 <div className="feature-icon mb-3">
                   <span className="emoji-icon">🧠</span>
                 </div>
                 <div className="feature-content">
                   <h5 className="font-semibold mb-3">Smart Sequence</h5>
                   <p className="text-muted leading-relaxed">Each client follows their own funnel or path until conversion</p>
                 </div>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4 mt-4">
               <div className="feature-item h-100">
                 <div className="feature-icon mb-3">
                   <span className="emoji-icon">📲</span>
                 </div>
                 <div className="feature-content">
                   <h5 className="font-semibold mb-3">Forms & Landing Pages</h5>
                   <p className="text-muted leading-relaxed">Convert visitors to clients without feeling like they're in a sales process</p>
                 </div>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4 mt-4">
               <div className="feature-item h-100">
                 <div className="feature-icon mb-3">
                   <span className="emoji-icon">🗂️</span>
                 </div>
                 <div className="feature-content">
                   <h5 className="font-semibold mb-3">Automatic CRM</h5>
                   <p className="text-muted leading-relaxed">Every interaction gets registered with name, status, and follow-up</p>
                 </div>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4 mt-4">
               <div className="feature-item h-100">
                 <div className="feature-icon mb-3">
                   <span className="emoji-icon">⚙️</span>
                 </div>
                 <div className="feature-content">
                   <h5 className="font-semibold mb-3">Alerts & Tasks</h5>
                   <p className="text-muted leading-relaxed">You only get notified when the client is ready to buy</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
        
        <div className="text-center mt-60">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cta-box bg-light rounded-3 p-4">
                <h5 className="font-semibold mb-3 text-dark">
                  💡 Ready to try the system?
                </h5>
                <p className="text-muted mb-4">
                  Get a custom demo for your project and discover how BeatApp can change the way you work
                </p>
                <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white">
                  <small> 🎯 Book Your Demo <i className="fas fa-long-arrow-alt-right"></i> </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemFeatures 