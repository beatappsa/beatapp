import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Sidebar = ({ style, rtl }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get current language
  const currentLanguage = router.locale || 'ar';

  // Function to extract text from HTML and limit length
  const extractTextFromHTML = (html, maxLength = 60) => {
    if (typeof window !== 'undefined') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const text = tempDiv.textContent || tempDiv.innerText || '';
      return text.length > maxLength ? text.substring(0, maxLength) : text;
    }
    return 'Loading content...';
  };

  // Function to fetch latest 3 WordPress posts for recent posts section
  const fetchRecentPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch latest 3 posts with embedded media for featured images
      const response = await fetch(`/api/wordpress/posts?per_page=3&orderby=date&order=desc&lang=${currentLanguage}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const wpPosts = data.posts;

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
          link: `/page-single-post-5?id=${post.id}`,
          language: currentLanguage
        };
      });

      setRecentPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching recent posts:', err);
      setError(err.message);
      // Set fallback data with language support
      const fallbackPosts = currentLanguage === 'ar' ? [
        {
          id: 1,
          image: "/assets/img/blog/s_blog.png",
          title: "مقال تجريبي 01",
          excerpt: "وصف المقال التجريبي الأول...",
          link: "/page-single-post-5"
        }
      ] : [
        {
          id: 1,
          image: "/assets/img/blog/s_blog.png", 
          title: "Sample Article 01",
          excerpt: "Sample article description...",
          link: "/page-single-post-5"
        }
      ];
      setRecentPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  }, [currentLanguage]); // Add currentLanguage to dependencies

  // Fetch recent posts on component mount
  useEffect(() => {
    fetchRecentPosts();
  }, [fetchRecentPosts]); // Add fetchRecentPosts to dependencies

  return (
    <div className="col-lg-4">
      <div className="blog-sidebar">
        <div className="sidebar-search mb-40">
          <form className="form-subscribe" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-12">
                <div className="form-group position-relative">
                  <input type="text" className="form-control border-0" placeholder={t('blog.search')} />
                  <button className="btn-search border-0 bg-transparent position-absolute">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="sidebar-recent-posts mb-40">
          <h6 className="sidebar-title">{t('blog.recent_posts')}</h6>
          {loading && <p className="text-muted">{t('blog.loading')}</p>}
          {error && <p className="text-danger">{t('blog.error')}: {error}</p>}
          
          {!loading && !error && recentPosts.map((post, index) => (
            <div className="recent-post-item" key={post.id || index}>
              <div className="img">
                <Link href={post.link}>
                  <a>
                    <img src={post.image} alt={post.title} />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <Link href={post.link}>
                  <a>
                    <h6>{post.title}</h6>
                  </a>
                </Link>
                <p className="text-muted">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-social">
          <h6 className="sidebar-title">{t('footer.social_title')}</h6>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar