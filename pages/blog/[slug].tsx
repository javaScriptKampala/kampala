import RootLayout from "@/components/layout"
import { Post } from "@/lib/types"
import { getPostData, getSortedPostsData } from "@/lib/posts"

interface PostData {
	title: string
	date: string
	contentHTML: string
}

export default function BlogPost({ postData }: { postData: PostData }) {
	return (
		<RootLayout title={postData.title}>
			<div className="my-10">
				<h1 className="font-bold text-5xl mb-4">{postData.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHTML }}></div>
			</div>
		</RootLayout>
	)
}

export async function getStaticProps({ params }: { params: any }) {
	const post = await getPostData("blog", params.slug)

	return {
		props: { postData: JSON.parse(JSON.stringify(post)) },
	}
}

export async function getStaticPaths() {
	const blogPosts: Post[] = getSortedPostsData("blog")

	return {
		paths: blogPosts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}
