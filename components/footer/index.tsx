import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
	return (
		<div className="container max-w-5xl mx-auto flex flex-col">
			<div className="flex gap-4">
				<div className="flex-1 bg-primary text-black px-6 py-10">
					<h1 className="text-5xl font-bold">JavaScript @Kampala</h1>
				</div>
				<div className="flex-1 flex flex-col justify-center items-center">
					<ul className="space-y-2">
						{["About", "Meetups", "Blog", "Gallery", "Sponsors"].map(
							(link: string) => (
								<li>
									<Link href={"/" + link.toLowerCase()}>
										<Button
											size={"lg"}
											variant="link"
											className="rounded-full p-0 h-max"
										>
											{link}
										</Button>
									</Link>
								</li>
							)
						)}
					</ul>
				</div>
				<div className="flex-1"></div>
			</div>
			<p className="text-white text-xs text-center py-4">
				© 2023 JavaScript Kampala
			</p>
		</div>
	)
}
