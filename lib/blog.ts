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
    slug: "grouping-activity",
    title: "Grouping Microorganisms Activity",
    excerpt: "Help your students understand taxonomy, phylogeny and the differences between microorganisms.",
    content: "<strong> Why This Activity</strong><p><p> I created the <strong>Microorganism Grouping Activity</strong> to spark curiosity and engagement from day one of the microbiology course. This hands-on activity invites students to use different parts of their brains—by physically grouping organisms and thinking critically about how they relate to one another.<p><b>What Students Learn</b><p> While the activity introduces high-level topics like <em>taxonomy</em> and <em>phylogeny</em>, it does not dive deeply into definitions. Instead, it emphasizes the core idea that <strong>grouping organisms helps us make sense of biological complexity</strong>. Organisms can be grouped in different ways—by size, structure, or evolutionary relationship—and understanding those groupings helps students begin to see patterns and meaning in the diversity of life.<p><strong>Grouping Matters</strong> <p> This skill isn’t just academic—it’s practical. In research and clinical settings, being able to quickly recognize an organism’s classification can guide important decisions, like choosing an effective antibiotic based on the organism’s outer membrane structure.</p><h2>Explore the Activity</h2><p> 👉 Check out the Microorganism Grouping Activity </a></p>",
    author: "Karly Sindy",
    authorBio: "",
    date: "2024-06-15",
    readTime: "3 min read",
    category: "Class Activity",
    image: "/grouping_crop.png",
    tags: ["microbiology, classroom activity"],
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