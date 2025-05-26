import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"
import Image from "next/image"
import { Metadata } from "next"

interface Props {
    params: { slug: string }
}

// Generate metadata for the specific blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [
                {
                    url: post.image,
                    width: 800,
                    height: 400,
                    alt: post.title,
                },
            ],
            type: "article",
            publishedTime: post.date,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {post.title}
                    </h1>
                    <div className="text-gray-600 dark:text-gray-300 mb-6">
                        By {post.author} on {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="relative w-full h-96 mb-8">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </div>
        </div>
    )
} 
