import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getSortedPostsData } from "@/lib/posts"
import { Post } from "@/lib/types"

export default function Meetups() {
	const eventsList: Post[] = getSortedPostsData("events", 3)

	return (
		<section className="w-full my-12">
			<h1 className="w-full text-center font-bold text-5xl mb-10">Meetups</h1>
			<ul className="flex gap-8 flex-col sm:flex-row">
				{eventsList.length > 0 &&
					eventsList.map((event: Post) => (
						<li className="flex-1">
							<Link href={`/events/${event.slug}`}>
								<Card className="p-0 rounded-md overflow-hidden">
									<CardContent className="relative p-0">
										<img
											src={`/assets/images/events/${event.cover}.jpg`}
											alt={event.title}
										/>
									</CardContent>
									<CardFooter className="flex flex-col p-4 text-left">
										<h3 className="w-full text-left text-lg font-bold">
											{event.title}
										</h3>
										<p className="w-full text-sm text-neutral-400">
											{new Date(event.date).toLocaleString("en-GB", {
												month: "short",
												day: "2-digit",
												year: "numeric",
											})}{" "}
											@ {event.time}
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
			</ul>
		</section>
	)
}
