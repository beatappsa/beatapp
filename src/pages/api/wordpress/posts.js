export default async function handler(req, res) {
  const { method, query } = req;
  
  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Build the WordPress API URL with query parameters
    const baseUrl = 'http://amin.local/wp-json/wp/v2/posts';
    const params = new URLSearchParams();
    
    // Add common parameters
    params.append('_embed', 'true');
    
    // Add language support
    // If your WordPress has WPML or similar plugin, you can filter by language
    if (query.lang) {
      // For WPML plugin - filter by language
      // params.append('wpml_language', query.lang);
      
      // For Polylang plugin - use lang parameter
      // params.append('lang', query.lang);
      
      // Store language preference for response formatting
      params.append('meta_query', JSON.stringify([
        {
          'key': '_language',
          'value': query.lang,
          'compare': '='
        }
      ]));
    }
    
    // Add query parameters from the request
    if (query.per_page) params.append('per_page', query.per_page);
    if (query.page) params.append('page', query.page);
    if (query.tags) params.append('tags', query.tags);
    if (query.orderby) params.append('orderby', query.orderby);
    if (query.order) params.append('order', query.order);
    if (query.search) params.append('search', query.search);
    if (query.categories) params.append('categories', query.categories);
    
    const wpApiUrl = `${baseUrl}?${params.toString()}`;
    
    console.log('Fetching from WordPress API:', wpApiUrl);
    
    // Fetch from WordPress API
    const response = await fetch(wpApiUrl);
    
    if (!response.ok) {
      console.error('WordPress API error:', response.status, response.statusText);
      return res.status(response.status).json({ 
        error: 'WordPress API error',
        status: response.status,
        statusText: response.statusText
      });
    }
    
    const data = await response.json();
    
    // Get pagination info from headers
    const totalPosts = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');
    
    // Process posts for language-specific content
    const processedPosts = data.map(post => {
      // Add language information to each post
      const currentLang = query.lang || 'ar';
      
      // You can customize this based on your WordPress multilingual setup
      return {
        ...post,
        language: currentLang,
        // If you have language-specific fields in WordPress, process them here
        title: {
          ...post.title,
          rendered: post.title.rendered || post.title
        },
        excerpt: {
          ...post.excerpt,
          rendered: post.excerpt.rendered || post.excerpt
        },
        content: {
          ...post.content,
          rendered: post.content.rendered || post.content
        }
      };
    });
    
    // Return data with pagination info and language metadata
    res.status(200).json({
      posts: processedPosts,
      language: query.lang || 'ar',
      pagination: {
        total: totalPosts ? parseInt(totalPosts) : 0,
        totalPages: totalPages ? parseInt(totalPages) : 1,
        currentPage: query.page ? parseInt(query.page) : 1,
        perPage: query.per_page ? parseInt(query.per_page) : 10
      }
    });
    
  } catch (error) {
    console.error('API proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch from WordPress API',
      message: error.message 
    });
  }
} 