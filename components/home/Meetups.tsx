import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Meetups() {
	return (
		<section className="w-full my-12">
			<h1 className="w-full text-center font-bold text-5xl mb-10">Meetups</h1>
			<ul className="flex gap-8">
				{[1, 2, 3].map((_) => (
					<li className="flex-1">
						<Link href="/">
							<Card className="p-0 rounded-md">
								<CardContent className="relative p-0">
									<img
										src="/assets/images/meetups/deploy-with-crane-cloud.jpeg"
										alt="meetup"
									/>
								</CardContent>
								<CardFooter className="flex flex-col p-4 text-left">
									<h3 className="w-full text-left text-lg font-bold">
										How to deploy to the cloud
									</h3>
									<p className="w-full text-sm text-neutral-400">
										Nov 11th, 2023 @ 1:00 PM
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
