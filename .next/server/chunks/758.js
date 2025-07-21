"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 8851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_AllNews)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Blog/AllNews/Blogs.jsx


const Blogs = ({ blogs , isWide , style , rtl , currentPage , totalPages , onPageChange  })=>{
    // Generate pagination items
    const generatePaginationItems = ()=>{
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
            items.push("...");
        }
        // Add middle pages
        for(let i = start; i <= end; i++){
            if (i > 1 && i < totalPages) {
                items.push(i);
            }
        }
        // Add ellipsis before last page if needed
        if (end < totalPages - 1) {
            items.push("...");
        }
        // Always show last page if there's more than one page
        if (totalPages > 1) {
            items.push(totalPages);
        }
        return items;
    };
    const paginationItems = generatePaginationItems();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: isWide ? "col-lg-10" : "col-lg-8",
        children: [
            blogs.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `card border-0 bg-transparent rounded-0 ${index !== blogs.length - 1 ? "border-bottom brd-gray" : "mb-lg-0 pb-lg-0"} pb-30 mb-30`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img img-cover",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: blog.cover,
                                        className: "radius-7",
                                        alt: blog.title,
                                        onError: (e)=>{
                                            // Fallback image if the WordPress image fails to load
                                            e.target.src = "/assets/img/blog/s_blog.png";
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body p-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            className: "d-block date text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`,
                                                    children: blog.type
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-clock me-1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "op-8",
                                                    children: blog.time
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: blog.link || (rtl ? "/rtl-page-single-post" : "/page-single-post-5"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "card-title mb-10",
                                                dangerouslySetInnerHTML: {
                                                    __html: blog.title
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "fs-13px color-666",
                                            children: [
                                                blog.desc,
                                                " [...]"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "auther-comments d-flex small align-items-center justify-content-between op-9",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "l_side d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${style} p-2 me-2 text-white`,
                                                            children: blog.userImgLetter
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    className: "text-muted",
                                                                    children: rtl ? "بواسطة" : "By"
                                                                }),
                                                                " ",
                                                                blog.username
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "r-side mt-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bi bi-chat-left-text me-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: blog.comments
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bi bi-eye ms-4 me-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: blog.views
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }, blog.id || index)),
            totalPages > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `pagination style-5 color-${style} justify-content-center mt-60`,
                children: [
                    currentPage > 1 && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        onClick: (e)=>{
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-chevron-left"
                                }),
                                " ",
                                rtl ? "السابق" : "prev"
                            ]
                        })
                    }),
                    paginationItems.map((item, index)=>item === "..." ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "px-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "..."
                            })
                        }, `ellipsis-${index}`) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: currentPage === item ? "active" : "",
                            onClick: (e)=>{
                                e.preventDefault();
                                onPageChange(item);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: item
                            })
                        }, item)),
                    currentPage < totalPages && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        onClick: (e)=>{
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text",
                            children: [
                                rtl ? "التالي" : "next",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AllNews_Blogs = (Blogs);

;// CONCATENATED MODULE: ./src/components/Blog/AllNews/Sidebar.jsx



const Sidebar = ({ style , rtl  })=>{
    const { 0: recentPosts , 1: setRecentPosts  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(null);
    // Function to extract text from HTML and limit length
    const extractTextFromHTML = (html, maxLength = 60)=>{
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const text = tempDiv.textContent || tempDiv.innerText || "";
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    };
    // Function to fetch latest 3 WordPress posts for recent posts section
    const fetchRecentPosts = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Fetch latest 3 posts with embedded media for featured images
            const response = await fetch("http://amin.local/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date&order=desc");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const wpPosts = await response.json();
            // Transform WordPress posts to match the sidebar format
            const transformedPosts = wpPosts.map((post)=>{
                // Get featured image URL
                let featuredImageUrl = "/assets/img/blog/s_blog.png"; // Default fallback image
                if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]) {
                    featuredImageUrl = post._embedded["wp:featuredmedia"][0].source_url;
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
            console.error("Error fetching recent posts:", err);
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
        } finally{
            setLoading(false);
        }
    };
    // Fetch recent posts on component mount
    (0,external_react_.useEffect)(()=>{
        fetchRecentPosts();
    }, [
        fetchRecentPosts
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "side-blog style-5 ps-lg-5 mt-5 mt-lg-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    action: "contact.php",
                    className: "search-form mb-50",
                    method: "post",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "بحث" : "search"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group position-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control rounded-pill",
                                    placeholder: rtl ? "اكتب وارسل" : "Type and hit enter"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "search-btn border-0 bg-transparent",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-search"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-recent-post mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "المنشورات الاخيرة" : "recent post"
                        }),
                        loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center py-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "spinner-border spinner-border-sm text-primary",
                                    role: "status",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "visually-hidden",
                                        children: "Loading..."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "small mt-2",
                                    children: "Loading recent posts..."
                                })
                            ]
                        }) : error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "alert alert-warning small",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Unable to load recent posts."
                            })
                        }) : recentPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: post.link,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `post-card ${index !== recentPosts.length - 1 ? "pb-3 mb-3 border-bottom brd-gray" : ""}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img me-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post.image,
                                                alt: post.title,
                                                onError: (e)=>{
                                                    // Fallback image if the WordPress image fails to load
                                                    e.target.src = "/assets/img/blog/s_blog.png";
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "inf",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: post.title
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        post.excerpt,
                                                        " [...]"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, post.id || index))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-share mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "اجتماعي" : "social"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://x.com/BeatAppio",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-twitter"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.facebook.com/beatappio",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/beatappio/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-instagram"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/company/beatappio",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-linkedin-in"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const AllNews_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/components/Blog/AllNews/index.jsx




const AllNews = ({ isWide , leftSidebar , style ="4" , rtl  })=>{
    const { 0: blogs , 1: setBlogs  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(null);
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const { 0: totalPages , 1: setTotalPages  } = (0,external_react_.useState)(1);
    const { 0: totalPosts , 1: setTotalPosts  } = (0,external_react_.useState)(0);
    const postsPerPage = 7; // Number of posts per page
    // Function to format relative time
    const formatRelativeTime = (dateString)=>{
        const now = new Date();
        const postDate = new Date(dateString);
        const diffTime = Math.abs(now - postDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 1) return "1 day ago";
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };
    // Function to extract text from HTML and limit length
    const extractTextFromHTML = (html, maxLength = 120)=>{
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const text = tempDiv.textContent || tempDiv.innerText || "";
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    };
    // Function to get author first letter
    const getAuthorInitial = (authorName)=>{
        return authorName ? authorName.charAt(0).toLowerCase() : "a";
    };
    // Function to generate random view count (since WordPress doesn't provide this by default)
    const generateViewCount = ()=>{
        const randomNum = Math.floor(Math.random() * 999) + 1;
        return `${randomNum}k`;
    };
    // Function to fetch WordPress posts
    const fetchWordPressPosts = async (page = 1)=>{
        try {
            setLoading(true);
            setError(null);
            // Fetch posts with embedded media and author info, with pagination
            const response = await fetch(`http://amin.local/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${page}&orderby=date&order=desc`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const wpPosts = await response.json();
            // Get total pages from response headers
            const totalPagesHeader = response.headers.get("x-wp-totalpages");
            const totalPostsHeader = response.headers.get("x-wp-total");
            if (totalPagesHeader) setTotalPages(parseInt(totalPagesHeader));
            if (totalPostsHeader) setTotalPosts(parseInt(totalPostsHeader));
            // Transform WordPress posts to match the component's expected format
            const transformedPosts = wpPosts.map((post)=>{
                // Get featured image URL
                let featuredImageUrl = "/assets/img/blog/s_blog.png"; // Default fallback image
                if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]) {
                    featuredImageUrl = post._embedded["wp:featuredmedia"][0].source_url;
                }
                // Get category name (default to 'News')
                let categoryName = "News";
                if (post._embedded && post._embedded["wp:term"] && post._embedded["wp:term"][0] && post._embedded["wp:term"][0][0]) {
                    categoryName = post._embedded["wp:term"][0][0].name;
                }
                // Get author name
                let authorName = "Admin";
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
            console.error("Error fetching WordPress posts:", err);
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
        } finally{
            setLoading(false);
        }
    };
    // Handle page change
    const handlePageChange = (page)=>{
        setCurrentPage(page);
        fetchWordPressPosts(page);
        // Scroll to top of the section
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    // Fetch posts on component mount and when page changes
    (0,external_react_.useEffect)(()=>{
        fetchWordPressPosts(currentPage);
    }, [
        currentPage,
        fetchWordPressPosts
    ]);
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "all-news section-padding blog bg-transparent style-3",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `row ${isWide ? "justify-content-center" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"}`,
                    children: [
                        !isWide && leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            style: style,
                            rtl: rtl
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: isWide ? "col-lg-10" : "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center py-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "spinner-border text-primary",
                                        role: "status",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Loading..."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-3",
                                        children: "Loading latest posts..."
                                    })
                                ]
                            })
                        }),
                        !isWide && !leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            style: style,
                            rtl: rtl
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "all-news section-padding blog bg-transparent style-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                error && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "alert alert-warning text-center mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Unable to load latest posts. Showing fallback content."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                            children: [
                                "Error: ",
                                error
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `row ${isWide ? "justify-content-center" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"}`,
                    children: [
                        !isWide && leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            style: style,
                            rtl: rtl
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Blogs, {
                            blogs: blogs,
                            isWide: isWide,
                            style: style,
                            rtl: rtl,
                            currentPage: currentPage,
                            totalPages: totalPages,
                            onPageChange: handlePageChange
                        }),
                        !isWide && !leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            style: style,
                            rtl: rtl
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Blog_AllNews = (AllNews);


/***/ }),

/***/ 7567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const PopularPosts = ({ style ="4" , rtl  })=>{
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // Function to format relative time
    const formatRelativeTime = (dateString)=>{
        const now = new Date();
        const postDate = new Date(dateString);
        const diffTime = Math.abs(now - postDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 1) return "1 day ago";
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };
    // Function to extract text from HTML and limit length
    const extractTextFromHTML = (html, maxLength = 100)=>{
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const text = tempDiv.textContent || tempDiv.innerText || "";
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    };
    // Function to get author first letter
    const getAuthorInitial = (authorName)=>{
        return authorName ? authorName.charAt(0).toLowerCase() : "a";
    };
    // Function to generate random view count (since WordPress doesn't provide this by default)
    const generateViewCount = ()=>{
        const randomNum = Math.floor(Math.random() * 999) + 1;
        return `${randomNum}k`;
    };
    // Function to fetch WordPress posts with "popular" tag
    const fetchPopularPosts = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Fetch posts with "popular" tag (ID: 469), embedded media, and author info
            const response = await fetch("http://amin.local/wp-json/wp/v2/posts?tags=469&_embed&per_page=3&orderby=date&order=desc");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const wpPosts = await response.json();
            // Transform WordPress posts to match the component's expected format
            const transformedPosts = wpPosts.map((post)=>{
                // Get featured image URL
                let featuredImageUrl = "/assets/img/blog/s_blog.png"; // Default fallback image
                if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]) {
                    featuredImageUrl = post._embedded["wp:featuredmedia"][0].source_url;
                }
                // Get category name (default to 'News')
                let categoryName = "News";
                if (post._embedded && post._embedded["wp:term"] && post._embedded["wp:term"][0] && post._embedded["wp:term"][0][0]) {
                    categoryName = post._embedded["wp:term"][0][0].name;
                }
                // Get author name
                let authorName = "Admin";
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
            setPosts(transformedPosts);
        } catch (err) {
            console.error("Error fetching popular posts:", err);
            setError(err.message);
            // Set fallback data in case of error
            setPosts([
                {
                    id: 1,
                    cover: "/assets/img/blog/1.jpeg",
                    type: "News",
                    time: "3 Days ago",
                    title: "Crypto Trend 2023",
                    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected",
                    userImgLetter: "a",
                    username: "Admin",
                    comments: "24",
                    views: "774k",
                    link: "/page-single-post-5"
                },
                {
                    id: 2,
                    cover: "/assets/img/blog/7.png",
                    type: "News",
                    time: "3 Days ago",
                    title: "AI With Fingerprint",
                    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected",
                    userImgLetter: "a",
                    username: "Admin",
                    comments: "24",
                    views: "774k",
                    link: "/page-single-post-5"
                },
                {
                    id: 3,
                    cover: "/assets/img/blog/5.png",
                    type: "News",
                    time: "3 Days ago",
                    title: "NFT Game! New Oppoturnity",
                    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected",
                    userImgLetter: "a",
                    username: "Admin",
                    comments: "24",
                    views: "774k",
                    link: "/page-single-post-5"
                }
            ]);
        } finally{
            setLoading(false);
        }
    };
    // Fetch posts on component mount
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchPopularPosts();
    }, [
        fetchPopularPosts
    ]);
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "popular-posts pt-50 pb-100 border-bottom brd-gray",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "post-sc-title text-center text-uppercase mb-70",
                        children: rtl ? "أخبار شائعة" : "Popular Posts"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center py-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "spinner-border text-primary",
                                role: "status",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "visually-hidden",
                                    children: "Loading..."
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-3",
                                children: "Loading popular posts..."
                            })
                        ]
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "popular-posts pt-50 pb-100 border-bottom brd-gray",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "post-sc-title text-center text-uppercase mb-70",
                    children: rtl ? "أخبار شائعة" : "Popular Posts"
                }),
                error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "alert alert-warning text-center mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Unable to load popular posts. Showing fallback content."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                            children: [
                                "Error: ",
                                error
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row gx-5",
                    children: posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `col-lg-4 ${index !== posts.length - 1 ? "border-end brd-gray" : ""}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img radius-7 overflow-hidden img-cover",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: post.cover,
                                            className: "card-img-top",
                                            alt: post.title,
                                            onError: (e)=>{
                                                // Fallback image if the WordPress image fails to load
                                                e.target.src = "/assets/img/blog/s_blog.png";
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card-body px-0",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                className: "d-block date mt-10 fs-10px fw-bold",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style}`,
                                                        children: post.type
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "bi bi-clock me-1"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#",
                                                        className: "op-8",
                                                        children: [
                                                            rtl ? "موعد النشر" : "Posted on",
                                                            " ",
                                                            post.time
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "fw-bold mt-10 title",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: post.link || (rtl ? "/rtl-page-single-post" : "/page-single-post-5"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: post.title
                                                        }
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "small mt-2 op-8 fs-10px",
                                                children: [
                                                    post.desc,
                                                    " [...]"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex small mt-20 align-items-center justify-content-between op-9",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "l_side d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white",
                                                                children: post.userImgLetter
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                href: "#",
                                                                className: "mt-1",
                                                                children: [
                                                                    rtl ? "بواسطة" : "By",
                                                                    " ",
                                                                    post.username
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "r-side mt-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "bi bi-chat-left-text me-1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: post.comments
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "bi bi-eye ms-4 me-1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: post.views
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, post.id || index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularPosts);


/***/ }),

/***/ 3763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ITCreative_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/ITCreative/footer.json
const footer_namespaceObject = JSON.parse('{"fL":"Our highly skilled development teams specialized in Java, PHP, React, Angular and AWS help you accelarate.","Ok":[{"href":"#","text":"Online Marketing"},{"href":"#","text":"Technology"},{"href":"#","text":"Business"},{"href":"#","text":"Content strategy"},{"href":"#","text":"Development"},{"href":"#","text":"Advertising Strategy"}],"ye":[{"href":"#","text":"Game Development"},{"href":"#","text":"Application Design"},{"href":"#","text":"IT Solutions"},{"href":"#","text":"Tecture & Pattern"},{"href":"#","text":"Data Analysis"}],"jf":[{"href":"#","text":"About Us"},{"href":"#","text":"Blogs"},{"href":"#","text":"Shop"},{"href":"#","text":"Contact"},{"href":"#","text":"Privacy Policy"},{"href":"#","text":"Terms of Use"}],"pv":[{"href":"#","text":"Refund Policy"},{"href":"#","text":"Terms Conditions"},{"href":"#","text":"Join Us","label":"hiring"},{"href":"#","text":"Get In Touch"},{"href":"#","text":"FAQ Page"}]}');
;// CONCATENATED MODULE: ./src/components/ITCreative/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "style-7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content section-padding",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 border-1 border-end brd-gray",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info-logo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://beatapp.io",
                                            className: "logo",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/logos/beat logo master .png",
                                                alt: "BeatApp",
                                                style: {
                                                    maxHeight: "45px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text",
                                            children: footer_namespaceObject.fL
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "social-links",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-youtube"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-linkedin-in"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "links-side",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row gx-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "links-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: "What We Do"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "links",
                                                                        children: footer_namespaceObject.Ok.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: link.href,
                                                                                    children: link.text
                                                                                })
                                                                            }, i))
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "links",
                                                                        children: footer_namespaceObject.ye.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: link.href,
                                                                                    children: link.text
                                                                                })
                                                                            }, i))
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "links-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: "More Pages"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "links",
                                                                        children: footer_namespaceObject.jf.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: link.href,
                                                                                    children: link.text
                                                                                })
                                                                            }, i))
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "links",
                                                                        children: footer_namespaceObject.pv.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    href: link.href,
                                                                                    children: [
                                                                                        link.text,
                                                                                        " ",
                                                                                        link.label && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                                            className: "text-uppercase bg-blue7 text-white py-1 px-3 rounded-pill ms-2 lh-2",
                                                                                            children: [
                                                                                                " ",
                                                                                                link.label,
                                                                                                " "
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }, i))
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "foot bg-white p-3 rounded-pill text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            " Full Copyright & Design By ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "fw-bold",
                                children: " @ThemesCamp "
                            }),
                            " - 2022 "
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ITCreative_Footer = (Footer);


/***/ })

};
;