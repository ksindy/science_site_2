// Define the blog post type
export interface BlogPost {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  author: string
  authorBio?: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
  likes: number
  comments: number
}

// Sample blog posts data (replace with your actual data source)
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to new frameworks.",
    content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. As we move through 2024, several key trends are shaping how we build and deploy web applications.</p>

      <h2>1. AI Integration in Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. From AI-powered code completion tools like GitHub Copilot to automated testing and bug detection, developers are leveraging AI to write better code faster.</p>

      <p>Key areas where AI is making an impact:</p>
      <ul>
        <li>Code generation and completion</li>
        <li>Automated testing and quality assurance</li>
        <li>Performance optimization</li>
        <li>User experience personalization</li>
      </ul>

      <h2>2. Server-Side Rendering Renaissance</h2>
      <p>With frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge, server-side rendering (SSR) is experiencing a renaissance. The benefits of improved SEO, faster initial page loads, and better user experience are driving adoption across the industry.</p>

      <blockquote>
        "The future of web development lies in finding the perfect balance between client-side interactivity and server-side performance." - Industry Expert
      </blockquote>

      <h2>3. Edge Computing and CDNs</h2>
      <p>Edge computing is revolutionizing how we think about web application deployment. By moving computation closer to users, we can achieve unprecedented performance improvements and reduce latency significantly.</p>

      <h2>Conclusion</h2>
      <p>The web development landscape in 2024 is more exciting than ever. By staying informed about these trends and experimenting with new technologies, developers can build faster, more efficient, and more user-friendly applications.</p>
    `,
    author: "Karly Sindy",
    authorBio: "",
    date: "2024-06-15",
    readTime: "3 min read",
    category: "Class Activity",
    image: "/grouping_crop.svg?height=400&width=800",
    tags: ["microbiology, activity"],
    likes: 42,
    comments: 12,
  },
  {
    id: 2,
    slug: "react-best-practices",
    title: "React Best Practices for 2024",
    excerpt: "Learn the latest best practices for building efficient and maintainable React applications.",
    content: `
      <p>As React continues to evolve, so do the best practices for building applications with it. Here are the most important practices to follow in 2024.</p>
      
      <h2>1. Use Functional Components and Hooks</h2>
      <p>Class components are largely considered legacy code now. Functional components with hooks provide a more concise and readable way to write React code.</p>
      
      <h2>2. Implement Code Splitting</h2>
      <p>Use React.lazy() and Suspense to split your code and load components only when needed, improving initial load times.</p>
      
      <h2>3. Optimize Rendering</h2>
      <p>Use memoization techniques with useMemo and useCallback to prevent unnecessary re-renders in your application.</p>
    `,
    author: "Alex Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "React",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["React", "JavaScript", "Web Development"],
    likes: 38,
    comments: 9,
  },
]

/**
 * Get all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real application, you would fetch from an API or database
  // For now, we'll return the sample data
  return blogPostsData
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // In a real application, you would fetch from an API or database
  const post = blogPostsData.find(post => post.slug === slug)
  return post || null
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  // In a real application, you might have a featured flag or other criteria
  return blogPostsData.slice(0, 1)
}

/**
 * Get recent blog posts
 */
export async function getRecentBlogPosts(limit: number = 6): Promise<BlogPost[]> {
  // Sort by date descending and take the specified limit
  return [...blogPostsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return blogPostsData.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  return blogPostsData.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

/**
 * Search blog posts
 */
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  const lowercaseQuery = query.toLowerCase()
  return blogPostsData.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) || 
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery)
  )
}