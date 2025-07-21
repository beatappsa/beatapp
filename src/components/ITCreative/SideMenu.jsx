import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const SideMenu = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const toggleSideMenu = (e) => {
    e.preventDefault();
    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.remove('show');
    side_overlay && side_overlay.classList.remove('show');
  }

  const getLocalizedPath = (path) => {
    if (router.locale === 'ar') {
      return path;
    }
    return `/${router.locale}${path}`;
  }

  return (
    <>
      <div className="side_menu style-7" id="side_menu">
        <a href="#0" className="side_menu_cls" onClick={toggleSideMenu}>
          <img src="/assets/img/icons/4dots.png" alt="" />
        </a>
        <div className="content">
          <div className="logo">
            <Link href="/">
              <a className="w-100">
                <img src="/assets/img/logos/beat logo master .png" alt="BeatApp" style={{maxHeight: '35px'}} />
              </a>
            </Link>
          </div>
          <div className="pages_links">
            <ul>
              <li>
                <Link href={getLocalizedPath('/')}>
                  <a className="active">{t('nav.home')}</a>
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/page-blog-app')}>
                  <a>{t('nav.blog')}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="side_foot">
            <h5> {t('nav.contact')} </h5>
            <div className="row">
              <div className="col-lg-6">
                <a href="tel:0500934900"> <i className="fal fa-phone-alt me-2"></i> {t('header.phone_number')} </a>
              </div>
              <div className="col-lg-6">
                <a href="mailto:info@beatapp.io"> <i className="fal fa-envelope me-2 mt-4 mt-lg-0"></i> {t('cta.email')} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_overlay"></div>
    </>
  )
}

export default SideMenu