import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getSortedPostsData } from "@/lib/posts"
import { Post } from "@/lib/types"
import Link from "next/link"

export default function EventsPage() {
	const allPosts: Post[] = getSortedPostsData("events")

	console.log(allPosts)

	return (
		<div>
			<h1 className="w-full font-bold text-5xl my-10">Meetups</h1>
			<ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{allPosts.map((post) => (
					<li className="flex-1">
						<Link href="/">
							<Card className="p-0 rounded-md">
								<CardContent className="relative p-0">
									<img
										src={`/assets/images/events/${post.cover}.jpg`}
										alt={post.slug}
									/>
								</CardContent>
								<CardFooter className="flex flex-col p-4 text-left">
									<h3 className="w-full text-left text-lg font-bold">
										{post.title}
									</h3>
									<p className="w-full text-sm text-neutral-400">
										{new Date(post.date).toLocaleString("en-GB", {
											month: "short",
											day: "2-digit",
											year: "numeric",
										})}
									</p>
									<Button
										variant="link"
										className="w-full p-0 flex justify-start h-4 text-right font-bold mt-2"
									>
										Read More &gt;&gt;&gt;
									</Button>
								</CardFooter>
							</Card>
						</Link>
					</li>
				))}
				<li className="flex-1"></li>
				<li className="flex-1"></li>
			</ul>
		</div>
	)
}
