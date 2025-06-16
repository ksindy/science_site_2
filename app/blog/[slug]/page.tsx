import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog"
import BlogPost from "@/components/blog-post"
import { notFound } from "next/navigation"

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return <BlogPost post={post} />
}

// Generate static params for known blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}