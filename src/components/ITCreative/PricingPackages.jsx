import React from 'react'

const PricingPackages = ({ rtl }) => {
  const packagesData = [
    {
      name: "Starter",
      price: "699 ريال / شهر",
      description: "لبداية بسيطة وسريعة",
      popular: false
    },
    {
      name: "Pro Funnel", 
      price: "1,499 ريال / شهر",
      description: "لمن يبيع دورات أو خدمات استشارية",
      popular: true
    },
    {
      name: "Full System",
      price: "2,999 ريال / شهر", 
      description: "للبراندات الشخصية والشركات الجادة",
      popular: false
    },
    {
      name: "VIP Branding",
      price: "بالطلب",
      description: "محتوى + Funnel + إدارة تسويق كاملة",
      popular: false
    }
  ];

  if (rtl) {
    return (
      <section className="pricing-packages section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-head mb-60">
                <h2 className="arabic-text display-4 font-bold mb-4">
                  💼 باقات الاشتراك
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="pricing-table">
                <div className="table-responsive">
                  <table className="table table-borderless pricing-table-content">
                    <thead>
                      <tr>
                        <th className="arabic-text font-semibold">الباقة</th>
                        <th className="arabic-text font-semibold">السعر</th>
                        <th className="arabic-text font-semibold">الأنسب لـ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packagesData.map((pkg, index) => (
                        <tr key={index} className={pkg.popular ? 'popular-package' : ''}>
                          <td className="package-name">
                            <span className="font-semibold">{pkg.name}</span>
                            {pkg.popular && <span className="popular-badge">الأكثر شعبية</span>}
                          </td>
                          <td className="package-price arabic-text font-semibold">
                            {pkg.price}
                          </td>
                          <td className="package-description arabic-text">
                            {pkg.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="pricing-footer mt-5 text-center">
                <p className="arabic-text text-lg leading-relaxed">
                  🛡️ جميع الباقات تشمل دعم فني وتشغيلي – نكون معك بعد التسليم مثل أول يوم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pricing-packages section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-head mb-60">
              <h2 className="display-4 font-bold mb-4">
                💼 Subscription Packages
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="pricing-table">
              <div className="table-responsive">
                <table className="table table-borderless pricing-table-content">
                  <thead>
                    <tr>
                      <th className="font-semibold">Package</th>
                      <th className="font-semibold">Price</th>
                      <th className="font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="package-name">
                        <span className="font-semibold">Starter</span>
                      </td>
                      <td className="package-price font-semibold">
                        699 SAR / month
                      </td>
                      <td className="package-description">
                        Simple and quick start
                      </td>
                    </tr>
                    <tr className="popular-package">
                      <td className="package-name">
                        <span className="font-semibold">Pro Funnel</span>
                        <span className="popular-badge">Most Popular</span>
                      </td>
                      <td className="package-price font-semibold">
                        1,499 SAR / month
                      </td>
                      <td className="package-description">
                        For those selling courses or consulting services
                      </td>
                    </tr>
                    <tr>
                      <td className="package-name">
                        <span className="font-semibold">Full System</span>
                      </td>
                      <td className="package-price font-semibold">
                        2,999 SAR / month
                      </td>
                      <td className="package-description">
                        For personal brands and serious companies
                      </td>
                    </tr>
                    <tr>
                      <td className="package-name">
                        <span className="font-semibold">VIP Branding</span>
                      </td>
                      <td className="package-price font-semibold">
                        On Request
                      </td>
                      <td className="package-description">
                        Content + Funnel + Complete marketing management
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="pricing-footer mt-5 text-center">
              <p className="text-lg leading-relaxed">
                🛡️ All packages include technical and operational support – we're with you after delivery just like day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages; 