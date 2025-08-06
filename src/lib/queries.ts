import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($first: Int, $after: String, $language: LanguageCodeEnum) {
    posts(
      first: $first
      after: $after
      where: { language: $language, status: PUBLISH }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!, $language: LanguageCodeEnum) {
    postBy(slug: $slug) {
      id
      title
      slug
      content
      excerpt
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories($language: LanguageCodeEnum) {
    categories(where: { language: $language }) {
      nodes {
        id
        name
        slug
        count
        description
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory(
    $categorySlug: String!
    $first: Int
    $after: String
    $language: LanguageCodeEnum
  ) {
    posts(
      first: $first
      after: $after
      where: {
        categoryName: $categorySlug
        language: $language
        status: PUBLISH
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query SearchPosts(
    $search: String!
    $first: Int
    $language: LanguageCodeEnum
  ) {
    posts(
      first: $first
      where: { search: $search, language: $language, status: PUBLISH }
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;