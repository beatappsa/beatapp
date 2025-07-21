import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = ({ rtl }) => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="style-4" data-scroll-index="0">
      <div className="content">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6">
              <div className="info">
                <small className="mb-50 title_small">{ rtl ? 'BeatApp - ضاعف عملائك' : 'BeatApp - Double Your Customers' }</small>
                <h1 className="mb-30">{ rtl ? 'هل تريد مضاعفة عملائك…' : 'Want to double your customers...' } <span>{ rtl ? 'دون إضاعة وقتك في التسويق؟' : 'without wasting your time on marketing?' }</span></h1>
                <p className="text">{ rtl ? 'يجمع لك كل خطوات جذب العميل ومتابعته وتحويله في نظام واحد يشتغل عنك حتى وأنت مشغول.' : 'BeatApp brings you all the steps of attracting, following up and converting the client in one system that works for you even while you are busy.' }</p>
                <div className="d-flex align-items-center mt-50">
                  <a href="#" rel="noreferrer" className="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
                    <small>{ rtl ? 'احجز مكالمتك المجانية الآن' : 'Book your free call now' }</small>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/header/header_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/header/header_4_bubble.png" alt="" className="bubble" />
      </div>
      <img src="/assets/img/header/header_4_wave.png" alt="" className="wave" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header