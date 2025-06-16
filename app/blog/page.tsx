import { getAllBlogPosts } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function BlogListingPage() {
  const posts = await getAllBlogPosts()
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Blog Posts</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-medium">{post.author}</span>
                    <p className="text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog | Your Site Name',
  description: 'Read our latest articles and insights',
}