import { useEffect, useState } from 'react';
import Link from 'next/link';

const Sidebar = ({ style, rtl }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to extract text from HTML and limit length
  const extractTextFromHTML = (html, maxLength = 60) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  };

  // Function to fetch latest 3 WordPress posts for recent posts section
  const fetchRecentPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch latest 3 posts with embedded media for featured images
      const response = await fetch('http://amin.local/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date&order=desc');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const wpPosts = await response.json();

      // Transform WordPress posts to match the sidebar format
      const transformedPosts = wpPosts.map((post) => {
        // Get featured image URL
        let featuredImageUrl = '/assets/img/blog/s_blog.png'; // Default fallback image
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
          featuredImageUrl = post._embedded['wp:featuredmedia'][0].source_url;
        }

        return {
          id: post.id,
          image: featuredImageUrl,
          title: post.title.rendered,
          excerpt: extractTextFromHTML(post.excerpt.rendered || post.content.rendered),
          link: `/page-single-post-5?id=${post.id}`
        };
      });

      setRecentPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching recent posts:', err);
      setError(err.message);
      // Set fallback data in case of error
      setRecentPosts([
        {
          id: 1,
          image: "/assets/img/blog/1.jpeg",
          title: "Solutions For Big Data Issue",
          excerpt: "If there's one way that wireless technology has",
          link: "/page-single-post-5"
        },
        {
          id: 2,
          image: "/assets/img/blog/2.jpeg", 
          title: "AI With Fingerprint Technology",
          excerpt: "If there's one way that wireless technology has",
          link: "/page-single-post-5"
        },
        {
          id: 3,
          image: "/assets/img/blog/3.jpeg",
          title: "NFT Game! New Opportunity",
          excerpt: "If there's one way that wireless technology has",
          link: "/page-single-post-5"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch recent posts on component mount
  useEffect(() => {
    fetchRecentPosts();
  }, []);

  return (
    <div className="col-lg-4">
      <div className="side-blog style-5 ps-lg-5 mt-5 mt-lg-0">
        {/* Search Form */}
        <form action="contact.php" className="search-form mb-50" method="post">
          <h6 className="title mb-20 text-uppercase fw-normal">
            { rtl ? 'بحث' : 'search' }
          </h6>
          <div className="form-group position-relative">
            <input type="text" className="form-control rounded-pill" placeholder={ rtl ? "اكتب وارسل" : "Type and hit enter" } />
            <button className="search-btn border-0 bg-transparent"> <i className="fas fa-search"></i> </button>
          </div>
        </form>

        {/* Recent Posts */}
        <div className="side-recent-post mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            { rtl ? 'المنشورات الاخيرة' : 'recent post' }
          </h6>
          
          {loading ? (
            <div className="text-center py-3">
              <div className="spinner-border spinner-border-sm text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="small mt-2">Loading recent posts...</p>
            </div>
          ) : error ? (
            <div className="alert alert-warning small">
              <p>Unable to load recent posts.</p>
            </div>
          ) : (
            recentPosts.map((post, index) => (
              <Link href={post.link} key={post.id || index}>
                <a className={`post-card ${index !== recentPosts.length - 1 ? 'pb-3 mb-3 border-bottom brd-gray':''}`}>
                  <div className="img me-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      onError={(e) => {
                        // Fallback image if the WordPress image fails to load
                        e.target.src = '/assets/img/blog/s_blog.png';
                      }}
                    />
                  </div>
                  <div className="inf">
                    <h6 dangerouslySetInnerHTML={{ __html: post.title }}></h6>
                    <p>{ post.excerpt } [...]</p>
                  </div>
                </a>
              </Link>
            ))
          )}
        </div>

        {/* Social Media */}
        <div className="side-share mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            { rtl ? 'اجتماعي' : 'social' }
          </h6>
          <a href="https://x.com/BeatAppio" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/beatappio" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/beatappio/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/beatappio" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar