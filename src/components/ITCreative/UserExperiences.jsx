import React from 'react'

const UserExperiences = ({ rtl }) => {
  const testimonialsData = [
    {
      text: "أنا كنت أحسب عندي مشكلة في التسويق… اكتشفت إني بس محتاج نظام ذكي يشيل عني.",
      author: "مدرب تطوير ذات",
      location: "الرياض"
    },
    {
      text: "الواتساب يرد عني، الإيميلات شغالة، والعميل يوصلني جاهز… شكراً BeatApp!",
      author: "صانعة محتوى",
      location: "جدة"
    }
  ];

  const testimonialsDataEn = [
    {
      text: "I thought I had a marketing problem... I discovered I just needed a smart system to take care of it for me.",
      author: "Self-Development Trainer",
      location: "Riyadh"
    },
    {
      text: "WhatsApp responds for me, emails are working, and the client reaches me ready... Thank you BeatApp!",
      author: "Content Creator",
      location: "Jeddah"
    }
  ];

  if (rtl) {
    return (
      <section className="user-experiences section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head mb-60">
                <h2 className="arabic-text display-4 font-bold mb-4">
                  💬 تجارب من استخدموا BeatApp
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {testimonialsData.map((testimonial, index) => (
              <div className="col-lg-5 col-md-6 mb-4 mt-4" key={index}>
                <div className="testimonial-item h-100">
                  <div className="testimonial-content">
                    <div className="quote-icon mb-3">
                      <span className="quote-mark">"</span>
                    </div>
                    <p className="arabic-text text-lg leading-relaxed mb-4">
                      {testimonial.text}
                    </p>
                    <div className="testimonial-author">
                      <p className="arabic-text font-semibold mb-1">
                        — {testimonial.author} | {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="user-experiences section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-head mb-60">
              <h2 className="display-4 font-bold mb-4">
                💬 Experiences from BeatApp Users
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {testimonialsDataEn.map((testimonial, index) => (
            <div className="col-lg-5 col-md-6 mb-4 mt-4" key={index}>
              <div className="testimonial-item h-100">
                <div className="testimonial-content">
                  <div className="quote-icon mb-3">
                    <span className="quote-mark">"</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
                  <div className="testimonial-author">
                    <p className="font-semibold mb-1">
                      — {testimonial.author} | {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserExperiences; 