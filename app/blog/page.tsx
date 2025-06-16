import { posts } from "@/data/posts" // Assuming posts data is imported from a separate file
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.id} className="block">
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="aspect-video relative">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>

              <CardTitle className="line-clamp-2 hover:text-primary transition-colors">{post.title}</CardTitle>
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
  )
}
