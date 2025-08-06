export interface Author {
  name: string;
  description?: string;
  avatar?: {
    url: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count?: number;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface FeaturedImage {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

export interface SEO {
  title?: string;
  metaDesc?: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  featuredImage?: {
    node: FeaturedImage;
  };
  author: {
    node: Author;
  };
  categories: {
    nodes: Category[];
  };
  tags: {
    nodes: Tag[];
  };
  seo?: SEO;
}

export interface PostsResponse {
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    nodes: Post[];
  };
}

export interface PostResponse {
  postBy: Post;
}

export interface CategoriesResponse {
  categories: {
    nodes: Category[];
  };
}

export interface SearchResponse {
  posts: {
    nodes: Post[];
  };
}

export type Locale = 'en' | 'ar' | 'fr' | 'es';

export interface BlogPageProps {
  params: {
    locale: Locale;
    slug?: string;
    category?: string;
  };
  searchParams?: {
    search?: string;
    page?: string;
  };
}