# Multilingual Blog with WordPress & Next.js

A modern, multilingual blog platform built with Next.js as the frontend and WordPress as a headless CMS backend through GraphQL. Features beautiful animations, responsive design, and support for multiple languages.

## 🚀 Features

- **Multilingual Support**: Built-in support for English, Arabic, French, and Spanish
- **Headless WordPress**: Uses WordPress as a headless CMS via GraphQL
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Beautiful Animations**: Powered by Framer Motion and Motion Primitives
- **Responsive Design**: Mobile-first approach with responsive layouts
- **SEO Optimized**: Built-in SEO support with Next.js
- **Type Safe**: Full TypeScript support
- **Performance**: Optimized for speed with Next.js 14

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion, Motion Primitives
- **Backend**: WordPress (Headless CMS)
- **Data Fetching**: Apollo Client, GraphQL
- **Internationalization**: next-intl
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multilingual-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your WordPress GraphQL endpoint:
   ```env
   WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 WordPress Setup

### Required WordPress Plugins

1. **WPGraphQL** - Enables GraphQL API
   ```bash
   wp plugin install wp-graphql --activate
   ```

2. **WPGraphQL for Advanced Custom Fields** (Optional)
   ```bash
   wp plugin install wp-graphql-acf --activate
   ```

3. **Polylang** or **WPML** - For multilingual content
   ```bash
   wp plugin install polylang --activate
   ```

### WordPress Configuration

1. **Enable GraphQL**
   - Go to WordPress Admin → GraphQL → Settings
   - Enable public access or configure authentication

2. **Set up languages**
   - Configure your desired languages in Polylang/WPML
   - Create content in multiple languages

3. **Configure permalinks**
   - Go to Settings → Permalinks
   - Choose "Post name" structure

## 🌐 Supported Languages

- **English** (en) - Default
- **Arabic** (ar) - RTL support included
- **French** (fr)
- **Spanish** (es)

### Adding New Languages

1. **Add locale to configuration**
   ```typescript
   // src/i18n.ts
   const locales = ['en', 'ar', 'fr', 'es', 'de']; // Add 'de' for German
   ```

2. **Create translation file**
   ```bash
   cp messages/en.json messages/de.json
   ```

3. **Update translations**
   Edit the new translation file with German translations

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Main layout with i18n
│   │   ├── page.tsx            # Home page
│   │   └── blog/               # Blog pages
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Layout components
│   ├── sections/               # Page sections
│   └── providers/              # Context providers
├── lib/
│   ├── apollo-client.ts        # GraphQL client
│   ├── queries.ts              # GraphQL queries
│   └── utils.ts                # Utility functions
├── types/
│   └── blog.ts                 # TypeScript types
├── i18n.ts                     # Internationalization config
messages/                       # Translation files
├── en.json
├── ar.json
├── fr.json
└── es.json
```

## 🎨 Customization

### Styling

- **Colors**: Edit `src/app/globals.css` to customize the color scheme
- **Components**: Modify shadcn/ui components in `src/components/ui/`
- **Animations**: Customize animations in component files using Framer Motion

### Content

- **Mock Data**: Replace mock data in components with actual GraphQL queries
- **Queries**: Modify GraphQL queries in `src/lib/queries.ts`
- **Types**: Update TypeScript types in `src/types/blog.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables**
   ```env
   WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
   ```
3. **Deploy**

### Other Platforms

- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use the default Next.js configuration
- **Docker**: Create a Dockerfile for containerized deployment

## 📝 GraphQL Queries

The project includes pre-built GraphQL queries for:

- **Posts**: Fetch blog posts with pagination
- **Categories**: Get post categories
- **Tags**: Retrieve post tags
- **Search**: Search functionality
- **Single Post**: Fetch individual post data

### Example Query

```graphql
query GetPosts($first: Int, $language: LanguageCodeEnum) {
  posts(first: $first, where: { language: $language, status: PUBLISH }) {
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
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](docs/)
2. Search existing [issues](issues/)
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [WordPress](https://wordpress.org/) - Content management system
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Motion Primitives](https://motion-primitives.com/) - Animation components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework