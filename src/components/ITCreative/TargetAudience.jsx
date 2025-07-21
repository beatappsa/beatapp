import React from 'react'

const TargetAudience = ({ rtl }) => {
  const audienceData = [
    "المدربون والمستشارون",
    "الوكالات", 
    "البرمجيات والتقنيات",
    "المستقلون والمبدعون",
    "المعلمون ومنشئو الدورات",
    "الأعمال القائمة على الفعاليات والتجارب",
    "خبراء الصحة",
    "التجارة الإلكترونية والأعمال القائمة على المنتجات",
    "الخدمات القانونية (المحامون)",
    "المحاسبون",
    "المستشارون الماليون",
    "المهندسون المعماريون"
  ];

  const audienceDataEn = [
    "Trainers and Consultants",
    "Agencies",
    "Software and Technology",
    "Freelancers and Creators", 
    "Teachers and Course Creators",
    "Event and Experience-based Businesses",
    "Health Experts",
    "E-commerce and Product-based Businesses",
    "Legal Services (Lawyers)",
    "Accountants",
    "Financial Consultants",
    "Architects"
  ];

  if (rtl) {
    return (
      <section className="target-audience section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head mb-60">
                <h2 className="arabic-text display-4 font-bold mb-4">
                  BeatApp مناسب لمن؟
                </h2>
                <p className="arabic-text text-lg text-muted leading-relaxed">
                  باختصار، لكل من يحتاج إلى سيستم لإدارة أعماله.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {audienceData.map((audience, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-4" key={index}>
                <div className="audience-item h-100">
                  <div className="audience-content">
                    <h6 className="arabic-text font-semibold text-center">
                      {audience}
                    </h6>
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
    <section className="target-audience section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-head mb-60">
              <h2 className="display-4 font-bold mb-4">
                Who is BeatApp suitable for?
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                In short, for everyone who needs a system to manage their business.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {audienceDataEn.map((audience, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-4" key={index}>
              <div className="audience-item h-100">
                <div className="audience-content">
                  <h6 className="font-semibold text-center">
                    {audience}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience; 