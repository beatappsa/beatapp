import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const BlogSlider = ({ style = "4", rtl }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to format relative time
  const formatRelativeTime = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffTime = Math.abs(now - postDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  // Function to extract text from HTML and limit length
  const extractTextFromHTML = (html, maxLength = 150) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  };

  // Function to fetch WordPress posts
  const fetchWordPressPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch posts with embedded media for featured images
      const response = await fetch('http://amin.local/wp-json/wp/v2/posts?_embed&per_page=6&orderby=date&order=desc');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const wpPosts = await response.json();

      // Transform WordPress posts to match the component's expected format
      const transformedPosts = wpPosts.map((post) => {
        // Get featured image URL
        let featuredImageUrl = '/assets/img/blog/s_blog.png'; // Default fallback image
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
          featuredImageUrl = post._embedded['wp:featuredmedia'][0].source_url;
        }

        // Get category name (default to 'News')
        let categoryName = 'News';
        if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0][0]) {
          categoryName = post._embedded['wp:term'][0][0].name;
        }

        return {
          id: post.id,
          image: featuredImageUrl,
          type: categoryName,
          time: formatRelativeTime(post.date),
          title: post.title.rendered,
          desc: extractTextFromHTML(post.excerpt.rendered || post.content.rendered),
          slug: post.slug,
          link: `/page-single-post-5?id=${post.id}` // You can customize this based on your routing
        };
      });

      setPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching WordPress posts:', err);
      setError(err.message);
      // Set fallback data in case of error
      setPosts([
        {
          id: 1,
          image: "/assets/img/blog/s_blog.png",
          type: "News",
          time: "3 Days ago",
          title: "Solutions For Big Data Issue, Expert Perspective",
          desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected",
          link: "/page-single-post-5"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchWordPressPosts();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="blog-slider pt-50 pb-50 style-1">
        <div className="container">
          <div className={`section-head text-center mb-60 style-${style}`}>
            <h2 className="mb-20">{ rtl ? 'أخر' : 'Our' } <span>{ rtl ? 'الأخبار' : 'Journal' }</span></h2>
            <div className="text color-666">{ rtl ? 'احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء' : 'Get the latest articles from our journal, writing, discuss and share' }</div>
          </div>
          <div className="blog-details-slider">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading latest posts...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-slider pt-50 pb-50 style-1">
      <div className="container">
        <div className={`section-head text-center mb-60 style-${style}`}>
          <h2 className="mb-20">{ rtl ? 'أخر' : 'Our' } <span>{ rtl ? 'الأخبار' : 'Journal' }</span></h2>
          <div className="text color-666">{ rtl ? 'احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء' : 'Get the latest articles from our journal, writing, discuss and share' }</div>
        </div>
        
        {error && (
          <div className="alert alert-warning text-center mb-4">
            <p>Unable to load latest posts. Showing fallback content.</p>
            <small>Error: {error}</small>
          </div>
        )}

        <div className="blog-details-slider">
          <Swiper
            className="swiper-container"
            slidesPerView={1}
            spaceBetween={0}
            effect="fade"
            speed={1000}
            pagination={{
              el: ".blog-details-slider .swiper-pagination",
              clickable: "true"
            }}
            navigation={{
              nextEl: '.blog-details-slider .swiper-button-next',
              prevEl: '.blog-details-slider .swiper-button-prev'
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000
            }}
            loop={posts.length > 1}
          >
            {
              posts.map((slide, index) => (
                <SwiperSlide key={slide.id || index}>
                  <div className="content-card">
                    <div className="img overlay">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        onError={(e) => {
                          // Fallback image if the WordPress image fails to load
                          e.target.src = '/assets/img/blog/s_blog.png';
                        }}
                      />
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="cont">
                            <small className="date small mb-20"> 
                              <a href="#" className="text-uppercase border-end brd-gray pe-3 me-3">{ slide.type }</a>
                              <i className="far fa-clock me-2"></i>{ rtl ? 'موعد النشر' : 'Posted on' } <a href="#">{ slide.time }</a> 
                            </small>
                            <h2 className="title">
                              <Link href={slide.link || (rtl ? "/rtl-page-single-post" : "/page-single-post-5")}>
                                <a dangerouslySetInnerHTML={{ __html: slide.title }}></a>
                              </Link>
                            </h2>
                            <p className="fs-13px mt-10 text-light text-info">
                              { slide.desc } [...]
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  )
}

export default BlogSlider