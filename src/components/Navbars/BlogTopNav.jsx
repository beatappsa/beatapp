import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@components/LanguageSwitcher';

const BlogTopNav = ({ style = "7" }) => {
  const { t } = useTranslation('common');

  return (
    <div className={`top-navbar style-${style}`}>
      <div className="container">
        <div className="row justify-content-between gx-0">
          <div className="col-7">
            <div className="top_info">
              <a href="mailto:info@beatapp.io" className="me-4">
                <i className="fas fa-envelope-open me-2 color-blue7"></i>
                <span>info@beatapp.io</span>
              </a>
              <a href="tel:0500934900">
                <i className="fas fa-phone me-2 color-blue7"></i>
                <span>0500934900</span>
              </a>
            </div>
          </div>
          <div className="col-5">
            <div className="side_links d-flex justify-content-lg-end">
              <LanguageSwitcher className="ps-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTopNav; 