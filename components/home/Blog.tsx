import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Blog() {
	return (
		<section className="w-full my-12">
			<h1 className="w-full text-center font-bold text-5xl mb-10">Blog</h1>
			<ul className="flex gap-8">
				{[1, 2, 3].map((_) => (
					<li className="flex-1">
						<Link href="/">
							<Card className="overflow-hidden">
								<CardContent className="relative p-0 overflow-hidden w-full max-h-[180px]">
									<Image
										src="/assets/images/meetups/deploy-with-crane-cloud.jpeg"
										alt="meetup"
										width={300}
										height={100}
									/>
								</CardContent>
								<CardFooter className="flex flex-col items-start p-4 text-left">
									<div className="flex items-center space-x-4 mb-2">
										<Avatar>
											<AvatarImage src="/avatars/01.png" />
											<AvatarFallback>OM</AvatarFallback>
										</Avatar>
										<div>
											<p className="text-sm font-medium leading-none">
												Sofia Davis
											</p>
											<p className="text-sm text-muted-foreground">
												{new Date().toLocaleString("en-GB", {
													day: "2-digit",
													month: "short",
													year: "numeric",
												})}
											</p>
										</div>
									</div>
									<h3 className="w-full text-left text-lg font-bold">
										How to deploy to the cloud
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
