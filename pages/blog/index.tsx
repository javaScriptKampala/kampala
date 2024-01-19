import Image from "next/image"
import Link from "next/link"

import RootLayout from "@/components/layout"
import { Post } from "@/lib/types"
import { getSortedPostsData } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function EventsPage({ blogPosts }: { blogPosts: Post[] }) {
	return (
		<RootLayout title="Blog">
			<h1 className="w-full font-bold text-5xl my-10">Blog</h1>
			<ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{blogPosts.map((post) => (
					<li className="flex-1" key={post.slug}>
						<Link href={`/blog/${post.slug}`}>
							<Card className="overflow-hidden">
								<CardContent className="relative p-0 overflow-hidden w-full max-h-[170px]">
									<Image
										src={`/assets/images/blog/${post.slug}.jpg`}
										alt={post.slug}
										width={650}
										height={100}
									/>
								</CardContent>
								<CardFooter className="flex flex-col items-start p-4 text-left">
									<div className="flex items-center space-x-4 mb-2">
										<Avatar>
											<AvatarImage
												src={`https://github.com/${post.author}.png`}
											/>
											<AvatarFallback>
												{post.author[0].toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="text-sm font-medium leading-none">
												@{post.author}
											</p>
											<p className="text-sm text-muted-foreground">
												{new Date(post.date).toLocaleString("en-GB", {
													day: "2-digit",
													month: "short",
													year: "numeric",
												})}
											</p>
										</div>
									</div>
									<h3 className="w-full text-left text-lg font-bold">
										{post.title}
									</h3>
									<Button
										variant="link"
										className="w-full p-0 flex justify-end h-4 text-right font-bold mt-2"
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
		</RootLayout>
	)
}

export async function getStaticProps() {
	const blogPosts: Post[] = getSortedPostsData("blog")

	return {
		props: {
			blogPosts: JSON.parse(JSON.stringify(blogPosts)),
		},
	}
}
