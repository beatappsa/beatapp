import Link from 'next/link';

const Navbar = ({ navbarRef }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light style-4" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo_lgr.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-blog-app">
                <a className="nav-link">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <a href="#" className="me-4">
                <img src="/assets/img/icons/user.png" alt="" />
              </a>
              <a href="#0" className="side_menu_btn active">
                <img src="/assets/img/icons/4dots.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar