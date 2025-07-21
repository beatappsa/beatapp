import React from 'react'

const SimpleFooter = ({ rtl }) => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/beatappio",
      icon: "📘"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/beatappio/",
      icon: "📷"
    },
    {
      name: "Twitter/X",
      url: "https://x.com/BeatAppio",
      icon: "🐦"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/beatappio",
      icon: "💼"
    }
  ];

  if (rtl) {
    return (
      <footer className="simple-footer">
        <div className="container">
          <div className="footer-content-horizontal">
            
            {/* Left Section - Booking */}
            <div className="footer-section footer-booking">
              <a 
                href="https://beatapp.io/booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="booking-link"
              >
                <span className="arabic-text">📍 احجز الآن عبر beatapp.io/booking</span>
              </a>
            </div>
            
            {/* Center Section - Contact & Social */}
            <div className="footer-section footer-center">
              <div className="contact-details mb-3">
                <a href="mailto:info@beatapp.io" className="contact-link me-3">
                  📧 info@beatapp.io
                </a>
                <a href="tel:0500934900" className="contact-link">
                  📞 0500934900
                </a>
              </div>
              
              <div className="footer-social">
                <p className="arabic-text mb-2 text-muted small">أيقونات التواصل الاجتماعي</p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Copyright */}
            <div className="footer-section footer-copyright">
              <p className="arabic-text text-muted mb-0">
                © 2024 BeatApp<br/>
                <span className="small">جميع الحقوق محفوظة</span>
              </p>
            </div>
            
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="simple-footer">
      <div className="container">
        <div className="footer-content-horizontal">
          
          {/* Left Section - Booking */}
          <div className="footer-section footer-booking">
            <a 
              href="https://beatapp.io/booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="booking-link"
            >
              <span>📍 Book Now via beatapp.io/booking</span>
            </a>
          </div>
          
          {/* Center Section - Contact & Social */}
          <div className="footer-section footer-center">
            <div className="contact-details mb-3">
              <a href="mailto:info@beatapp.io" className="contact-link me-3">
                📧 info@beatapp.io
              </a>
              <a href="tel:0500934900" className="contact-link">
                📞 0500934900
              </a>
            </div>
            
            <div className="footer-social">
              <p className="mb-2 text-muted small">Social Media</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Copyright */}
          <div className="footer-section footer-copyright">
            <p className="text-muted mb-0">
              © 2024 BeatApp<br/>
              <span className="small">All Rights Reserved</span>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter; 