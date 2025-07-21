import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const PopularPosts = ({ style = "4", rtl }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get current language
  const currentLanguage = router.locale || 'ar';

  // Function to format relative time with language support
  const formatRelativeTime = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffTime = Math.abs(now - postDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (currentLanguage === 'ar') {
      if (diffDays === 1) return 'منذ يوم واحد';
      if (diffDays < 7) return `منذ ${diffDays} أيام`;
      if (diffDays < 30) return `منذ ${Math.ceil(diffDays / 7)} أسابيع`;
      return `منذ ${Math.ceil(diffDays / 30)} أشهر`;
    } else {
      if (diffDays === 1) return '1 day ago';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
      return `${Math.ceil(diffDays / 30)} months ago`;
    }
  };

  // Function to extract text from HTML and limit length
  const extractTextFromHTML = (html, maxLength = 100) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  };

  // Function to get author first letter
  const getAuthorInitial = (authorName) => {
    return authorName ? authorName.charAt(0).toLowerCase() : 'a';
  };

  // Function to generate random view count (since WordPress doesn't provide this by default)
  const generateViewCount = () => {
    const randomNum = Math.floor(Math.random() * 999) + 1;
    return `${randomNum}k`;
  };

  // Function to fetch WordPress posts with "popular" tag
  const fetchPopularPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch posts with "popular" tag (ID: 469), embedded media, and author info
      const response = await fetch(`/api/wordpress/posts?tags=469&per_page=3&orderby=date&order=desc&lang=${currentLanguage}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const wpPosts = data.posts;

      // Transform WordPress posts to match the component's expected format
      const transformedPosts = wpPosts.map((post) => {
        // Get featured image URL
        let featuredImageUrl = '/assets/img/blog/s_blog.png'; // Default fallback image
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
          featuredImageUrl = post._embedded['wp:featuredmedia'][0].source_url;
        }

        // Get category name with language support
        let categoryName = currentLanguage === 'ar' ? 'غير مصنف' : 'UNCATEGORIZED';
        if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0][0]) {
          categoryName = post._embedded['wp:term'][0][0].name;
        }

        // Get author name with language support
        let authorName = currentLanguage === 'ar' ? 'مدير الموقع' : 'Admin';
        if (post._embedded && post._embedded.author && post._embedded.author[0]) {
          authorName = post._embedded.author[0].name;
        }

        return {
          id: post.id,
          image: featuredImageUrl,
          type: categoryName,
          time: formatRelativeTime(post.date),
          title: post.title.rendered,
          desc: extractTextFromHTML(post.excerpt.rendered || post.content.rendered),
          userImgLetter: getAuthorInitial(authorName),
          username: authorName,
          views: generateViewCount(),
          slug: post.slug,
          link: `/page-single-post-5?id=${post.id}`,
          language: currentLanguage
        };
      });

      setPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching popular posts:', err);
      setError(err.message);
      
      // Set fallback data in case of error (language-aware)
      const fallbackTitle = currentLanguage === 'ar' 
        ? 'كيف تصبح خبيراً في تطوير Python' 
        : 'How To Become A Python Develop Expert';
      
      const fallbackDesc = currentLanguage === 'ar'
        ? 'إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا، فهي أن الجميع'
        : 'If there\'s one way that wireless technology has changed the way we work, it\'s that will everyone';

      setPosts([
        {
          id: 1,
          image: "/assets/img/blog/6.png",
          type: currentLanguage === 'ar' ? 'أخبار' : 'news',
          time: currentLanguage === 'ar' ? 'منذ 12 يوماً' : '12 Days ago',
          title: fallbackTitle,
          desc: fallbackDesc,
          userImgLetter: "a",
          username: currentLanguage === 'ar' ? 'مدير الموقع' : 'Admin',
          views: currentLanguage === 'ar' ? '774ك' : '774k',
          link: "/page-single-post-5",
          language: currentLanguage
        }
      ]);
    } finally {
      setLoading(false);
    }
  }, [currentLanguage]); // Add currentLanguage to dependencies

  // Fetch posts on component mount
  useEffect(() => {
    fetchPopularPosts();
  }, [fetchPopularPosts]); // Add fetchPopularPosts to dependencies

  // Show loading state
  if (loading) {
    return (
      <section className="popular-posts pt-50 pb-100 border-bottom brd-gray">
        <div className="container">
          <h5 className="post-sc-title text-center text-uppercase mb-70">{ rtl ? 'أخبار شائعة' : 'Popular Posts' }</h5>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading popular posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="popular-posts pt-50 pb-100 border-bottom brd-gray">
      <div className="container">
        <h5 className="post-sc-title text-center text-uppercase mb-70">{t('blog.popular_posts')}</h5>
        
        {error && (
          <div className="alert alert-warning text-center mb-4">
            <p>{t('blog.error')}</p>
            <small>Error: {error}</small>
          </div>
        )}

        <div className="row gx-5">
          {
            posts.map((post, index) => (
              <div className={`col-lg-4 ${index !== posts.length - 1 ? 'border-end brd-gray':''}`} key={post.id || index}>
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img 
                      src={post.image} 
                      className="card-img-top" 
                      alt={post.title}
                      onError={(e) => {
                        // Fallback image if the WordPress image fails to load
                        e.target.src = '/assets/img/blog/s_blog.png';
                      }}
                    />
                  </div>
                  <div className="card-body px-0">
                    <small className="d-block date mt-10 fs-10px fw-bold">
                      <a href="#" className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style}`}>{ post.type }</a>
                      <i className="bi bi-clock me-1"></i>
                      <a href="#" className="op-8">{t('blog.posted_on')} { post.time }</a>
                    </small>
                    <h5 className="fw-bold mt-10 title">
                      <Link href={post.link || "/page-single-post-5"}> 
                        <a dangerouslySetInnerHTML={{ __html: post.title }}></a>
                      </Link>
                    </h5>
                    <p className="small mt-2 op-8 fs-10px">{ post.desc } [...]
                    </p>
                    <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                      <div className="l_side d-flex align-items-center">
                        <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                          { post.userImgLetter }
                        </span>
                        <a href="#" className="mt-1">
                          {t('blog.by')} { post.username }
                        </a>
                      </div>
                      <div className="r-side mt-1">
                        <i className="bi bi-chat-left-text me-1"></i>
                        <a href="#">{ post.comments }</a>
                        <i className="bi bi-eye ms-4 me-1"></i>
                        <a href="#">{ post.views }</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PopularPosts