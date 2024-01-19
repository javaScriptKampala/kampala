import Link from "next/link"
import Image from "next/image"

import { Post } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Blog({ blogPosts = [] }: { blogPosts?: Post[] }) {
	return (
		<section className="w-full my-12">
			<h1 className="w-full text-center font-bold text-5xl mb-10">Blog</h1>
			<ul className="flex gap-8 flex-col sm:flex-row">
				{blogPosts.map((post) => (
					<li className="flex-1" key={post.slug}>
						<Link href={`/blog/${post.slug}`}>
							<Card className="overflow-hidden">
								<CardContent className="relative p-0 overflow-hidden w-full max-h-[170px]">
									<Image
										src={`/assets/images/blog/${post.slug}.jpg`}
										alt={post.slug}
										width={640}
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
			</ul>
		</section>
	)
}
