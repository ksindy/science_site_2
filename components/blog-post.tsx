import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { BlogPost as BlogPostType } from "@/lib/blog"

interface BlogPostProps {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Blog</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          <Separator className="my-8" />

          {/* Article Footer */}
          <footer className="space-y-6">
            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">About {post.author}</h3>
                  <p className="text-muted-foreground mb-4">
                    {post.authorBio || `${post.author} is a contributor to our blog.`}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Actions */}
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like ({post.likes})
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comment ({post.comments})
                </Button>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}