
import { notFound } from "next/navigation"

import { getAllPostIds, getPostData } from "@/lib/posts"

interface IProps {
	params: {
		slug: string
	}
}



interface PostData {
	title: string
	date: string
	contentHTML: string
}


export default async function BlogPost({ params }: IProps) {
	const postData: PostData = await getPostData("blog", params.slug)

	if (!postData) notFound()

	return (
		<div className="my-10">
			<h1 className="font-bold text-5xl mb-4">{postData.title}</h1>
			<p dangerouslySetInnerHTML={{ __html: postData.contentHTML }}></p>
		</div>
	)
}
