import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Blogs = ({ blogs, isWide, style, rtl, currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation('common');
  
  // Generate pagination items
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    items.push(1);
    
    // Calculate start and end pages
    let start = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages - 1, start + maxVisiblePages - 3);
    
    // Adjust start if end is at the limit
    if (end === totalPages - 1) {
      start = Math.max(2, end - maxVisiblePages + 3);
    }
    
    // Add ellipsis after first page if needed
    if (start > 2) {
      items.push('...');
    }
    
    // Add middle pages
    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) {
        items.push(i);
      }
    }
    
    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      items.push('...');
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(totalPages);
    }
    
    return items;
  };

  const paginationItems = generatePaginationItems();

  return (
    <div className={isWide ? 'col-lg-10':'col-lg-8'}>
      {
        blogs.map((blog, index) => (
          <div className={`card border-0 bg-transparent rounded-0 ${index !== blogs.length - 1 ? 'border-bottom brd-gray':'mb-lg-0 pb-lg-0'} pb-30 mb-30`} key={blog.id || index}>
            <div className="row">
              <div className="col-lg-5">
                <div className="img img-cover">
                  <img 
                    src={blog.cover} 
                    className="radius-7" 
                    alt={blog.title}
                    onError={(e) => {
                      // Fallback image if the WordPress image fails to load
                      e.target.src = '/assets/img/blog/s_blog.png';
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card-body p-0">
                  <small className="d-block date text">
                    <a href="#" className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`}>{ blog.type }</a>
                    <i className="bi bi-clock me-1"></i>
                    <a href="#" className="op-8">{ blog.time }</a>
                  </small>
                  <Link href={blog.link || "/page-single-post-5"}>
                    <a className="card-title mb-10" dangerouslySetInnerHTML={{ __html: blog.title }}></a>
                  </Link>
                  <p className="fs-13px color-666">{ blog.desc } [...]</p>
                  <div className="auther-comments d-flex small align-items-center justify-content-between op-9">
                    <div className="l_side d-flex align-items-center">
                      <span className={`icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${style} p-2 me-2 text-white`}>
                        { blog.userImgLetter }
                      </span>
                      <a href="#">
                        <small className="text-muted">{t('blog.by')}</small> { blog.username }
                      </a>
                    </div>
                    <div className="r-side mt-1">
                      <i className="bi bi-chat-left-text me-1"></i>
                      <a href="#">{ blog.comments }</a>
                      <i className="bi bi-eye ms-4 me-1"></i>
                      <a href="#">{ blog.views }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      {/* Dynamic Pagination */}
      {totalPages > 1 && (
        <div className={`pagination style-5 color-${style} justify-content-center mt-60`}>
          {/* Previous button */}
          {currentPage > 1 && (
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage - 1);
              }}
            >
              <span className="text"><i className="fas fa-chevron-left"></i> {t('blog.previous_page')}</span>
            </a>
          )}

          {/* Page numbers */}
          {paginationItems.map((item, index) => (
            item === '...' ? (
              <span key={`ellipsis-${index}`} className="px-2">
                <span>...</span>
              </span>
            ) : (
              <a 
                href="#"
                key={item}
                className={currentPage === item ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(item);
                }}
              >
                <span>{item}</span>
              </a>
            )
          ))}

          {/* Next button */}
          {currentPage < totalPages && (
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage + 1);
              }}
            >
              <span className="text">{t('blog.next_page')} <i className="fas fa-chevron-right"></i></span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default Blogs