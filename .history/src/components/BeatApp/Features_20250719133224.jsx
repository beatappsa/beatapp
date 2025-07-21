import featuresRTL from '@data/BeatApp/features-rtl.json';

const Features = ({ rtl }) => {
  const featuresData = featuresRTL;

  return (
    <section className="features pt-70 pb-70 style-4" data-scroll-index="1">
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small bg-white">{ rtl ? 'كل ما تحتاجه لنمو أعمالك' : 'Everything you need to grow your business' }</small>
          <h2 className="mb-70">{ rtl ? 'الميزات الرئيسية' : 'Main Features' }</h2>
        </div>
        <div className="content">
          {
            featuresData.map((feature, index) => (
              <div className="features-card" key={index}>
                <div className="icon img-contain">
                  <img src={feature.image} alt="" />
                </div>
                <h6>{ feature.title.text1 } <br /> { feature.title.text2 }</h6>
              </div>
            ))
          }
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  )
}

export default Features