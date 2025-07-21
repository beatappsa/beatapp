import { useState, useEffect } from 'react';
import Blogs from './Blogs';
import Sidebar from './Sidebar';

const AllNews = ({ isWide, leftSidebar, style = "4", rtl }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 7; // Number of posts per page

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
  const extractTextFromHTML = (html, maxLength = 120) => {
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

  // Function to fetch WordPress posts
  const fetchWordPressPosts = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch posts with embedded media and author info, with pagination
      const response = await fetch(
        `http://amin.local/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${page}&orderby=date&order=desc`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const wpPosts = await response.json();
      
      // Get total pages from response headers
      const totalPagesHeader = response.headers.get('x-wp-totalpages');
      const totalPostsHeader = response.headers.get('x-wp-total');
      
      if (totalPagesHeader) setTotalPages(parseInt(totalPagesHeader));
      if (totalPostsHeader) setTotalPosts(parseInt(totalPostsHeader));

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

        // Get author name
        let authorName = 'Admin';
        if (post._embedded && post._embedded.author && post._embedded.author[0]) {
          authorName = post._embedded.author[0].name;
        }

        return {
          id: post.id,
          cover: featuredImageUrl,
          type: categoryName,
          time: formatRelativeTime(post.date),
          title: post.title.rendered,
          desc: extractTextFromHTML(post.excerpt.rendered || post.content.rendered),
          userImgLetter: getAuthorInitial(authorName),
          username: authorName,
          comments: post._embedded && post._embedded.replies ? post._embedded.replies[0].length.toString() : Math.floor(Math.random() * 50 + 10).toString(),
          views: generateViewCount(),
          slug: post.slug,
          link: `/page-single-post-5?id=${post.id}` // You can customize this based on your routing
        };
      });

      setBlogs(transformedPosts);
    } catch (err) {
      console.error('Error fetching WordPress posts:', err);
      setError(err.message);
      // Set fallback data in case of error
      setBlogs([
        {
          id: 1,
          cover: "/assets/img/blog/6.png",
          type: "news",
          time: "12 Days ago",
          title: "How To Become A Python Develop Expert",
          desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone",
          userImgLetter: "a",
          username: "Admin",
          comments: "24",
          views: "774k",
          link: "/page-single-post-5"
        },
        {
          id: 2,
          cover: "/assets/img/blog/4.jpeg",
          type: "news",
          time: "12 Days ago",
          title: "VR Game, Oppoturnity & Challenge",
          desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone",
          userImgLetter: "a",
          username: "Admin",
          comments: "24",
          views: "774k",
          link: "/page-single-post-5"
        },
        {
          id: 3,
          cover: "/assets/img/blog/10.png",
          type: "tips & tricks",
          time: "12 Days ago",
          title: "6 Tips To Help You Build Your Social Media Effeciency & Better",
          desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone",
          userImgLetter: "a",
          username: "Admin",
          comments: "24",
          views: "774k",
          link: "/page-single-post-5"
        }
      ]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchWordPressPosts(page);
    // Scroll to top of the section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetch posts on component mount and when page changes
  useEffect(() => {
    fetchWordPressPosts(currentPage);
  }, [currentPage, fetchWordPressPosts]);

  // Show loading state
  if (loading) {
    return (
      <section className="all-news section-padding blog bg-transparent style-3">
        <div className="container">
          <div className={`row ${isWide ? 'justify-content-center': leftSidebar ? 'gx-5':'gx-4 gx-lg-5'}`}>
            { !isWide && leftSidebar && <Sidebar style={style} rtl={rtl} /> }
            <div className={isWide ? 'col-lg-10':'col-lg-8'}>
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading latest posts...</p>
              </div>
            </div>
            { !isWide && !leftSidebar && <Sidebar style={style} rtl={rtl} /> }
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="all-news section-padding blog bg-transparent style-3">
      <div className="container">
        {error && (
          <div className="alert alert-warning text-center mb-4">
            <p>Unable to load latest posts. Showing fallback content.</p>
            <small>Error: {error}</small>
          </div>
        )}
        
        <div className={`row ${isWide ? 'justify-content-center': leftSidebar ? 'gx-5':'gx-4 gx-lg-5'}`}>
          { !isWide && leftSidebar && <Sidebar style={style} rtl={rtl} /> }
          <Blogs 
            blogs={blogs} 
            isWide={isWide} 
            style={style} 
            rtl={rtl}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          { !isWide && !leftSidebar && <Sidebar style={style} rtl={rtl} /> }
        </div>
      </div>
    </section>
  )
}

export default AllNews