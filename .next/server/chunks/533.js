"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// Import Swiper styles





swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade
]);
const BlogSlider = ({ style ="4" , rtl  })=>{
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
    const extractTextFromHTML = (html, maxLength = 150)=>{
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const text = tempDiv.textContent || tempDiv.innerText || "";
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    };
    // Function to fetch WordPress posts
    const fetchWordPressPosts = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Fetch posts with embedded media for featured images
            const response = await fetch("http://amin.local/wp-json/wp/v2/posts?_embed&per_page=6&orderby=date&order=desc");
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
            console.error("Error fetching WordPress posts:", err);
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
        } finally{
            setLoading(false);
        }
    };
    // Fetch posts on component mount
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchWordPressPosts();
    }, [
        fetchWordPressPosts
    ]);
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "blog-slider pt-50 pb-50 style-1",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `section-head text-center mb-60 style-${style}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    rtl ? "أخر" : "Our",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: rtl ? "الأخبار" : "Journal"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text color-666",
                                children: rtl ? "احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء" : "Get the latest articles from our journal, writing, discuss and share"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blog-details-slider",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                    children: "Loading latest posts..."
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog-slider pt-50 pb-50 style-1",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `section-head text-center mb-60 style-${style}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "أخر" : "Our",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: rtl ? "الأخبار" : "Journal"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text color-666",
                            children: rtl ? "احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء" : "Get the latest articles from our journal, writing, discuss and share"
                        })
                    ]
                }),
                error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "alert alert-warning text-center mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Unable to load latest posts. Showing fallback content."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                            children: [
                                "Error: ",
                                error
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "blog-details-slider",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                            className: "swiper-container",
                            slidesPerView: 1,
                            spaceBetween: 0,
                            effect: "fade",
                            speed: 1000,
                            pagination: {
                                el: ".blog-details-slider .swiper-pagination",
                                clickable: "true"
                            },
                            navigation: {
                                nextEl: ".blog-details-slider .swiper-button-next",
                                prevEl: ".blog-details-slider .swiper-button-prev"
                            },
                            mousewheel: false,
                            keyboard: true,
                            autoplay: {
                                delay: 4000
                            },
                            loop: posts.length > 1,
                            children: posts.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content-card",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "img overlay",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: slide.image,
                                                    alt: slide.title,
                                                    onError: (e)=>{
                                                        // Fallback image if the WordPress image fails to load
                                                        e.target.src = "/assets/img/blog/s_blog.png";
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-6",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cont",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                                    className: "date small mb-20",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "#",
                                                                            className: "text-uppercase border-end brd-gray pe-3 me-3",
                                                                            children: slide.type
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "far fa-clock me-2"
                                                                        }),
                                                                        rtl ? "موعد النشر" : "Posted on",
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "#",
                                                                            children: slide.time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        href: slide.link || (rtl ? "/rtl-page-single-post" : "/page-single-post-5"),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: slide.title
                                                                            }
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "fs-13px mt-10 text-light text-info",
                                                                    children: [
                                                                        slide.desc,
                                                                        " [...]"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }, slide.id || index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-pagination"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-button-next"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-button-prev"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;