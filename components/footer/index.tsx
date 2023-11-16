import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
	return (
		<div className="container max-w-5xl mx-auto flex flex-col gap-2">
			<div className="flex gap-8">
				<div className="flex-1 bg-primary text-black px-6 py-10">
					<h1 className="text-5xl font-bold text-center md:text-left">
						JavaScript @Kampala
					</h1>
				</div>
				<div className="flex-1 hidden md:flex flex-col items-end text-right">
					<ul className="space-y-2">
<<<<<<< HEAD
						{["About", "Meetups", "Blog", "Gallery", "Sponsors"].map(
=======
						{["About", "Events", "Blog", "Gallery", "Sponsors"].map(
>>>>>>> 46d9fd6 (Meetups changed events in the footer)
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
				<div className="flex-1 text-sm leading-6 hidden md:flex">
					Made with ❤️ in <br /> Kampala, Uganda.
					<br />© 2023 JavaScript Kampala
				</div>
			</div>
			<div className="w-full flex-1 text-sm flex justify-center items-center leading-6 text-center md:hidden my-6">
				Made with ❤️ in <br /> Kampala, Uganda.
				<br />© 2023 JavaScript Kampala
			</div>
		</div>
	)
}
