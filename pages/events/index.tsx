import Link from "next/link"

import RootLayout from "@/components/layout"
import { Post } from "@/lib/types"
import { getSortedPostsData } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function EventsPage({ allEvents = [] }: { allEvents: Post[] }) {
	return (
		<RootLayout title="Meetups">
			<h1 className="w-full font-bold text-5xl my-10">Meetups</h1>
			<ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{allEvents.map((event) => (
					<li className="flex-1">
						<Link href={`/events/${event.slug}`}>
							<Card className="p-0 rounded-md">
								<CardContent className="relative p-0">
									<img
										src={`/assets/images/events/${event.cover}.jpg`}
										alt={event.slug}
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
		</RootLayout>
	)
}

export async function getStaticProps() {
	const allEvents: Post[] = getSortedPostsData("events")

	return {
		props: {
			allEvents: JSON.parse(JSON.stringify(allEvents)),
		},
	}
}
