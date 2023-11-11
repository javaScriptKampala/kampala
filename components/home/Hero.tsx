import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
	return (
		<div className="min-w-full flex flex-col sm:flex-row my-20 gap-10 sm:gap-20">
			<div className="flex-1">
				<h1 className="text-6xl text-center sm:text-left md:text-8xl font-bold text-primary">
					JavaScript @Kampala
				</h1>
			</div>
			<div className="flex-1 flex flex-col justify-center items-center sm:items-end gap-4 sm:gap-6 select-none">
				<p className="text-center sm:text-right">
					A community of JavaScript Developers <br /> Learn, Motivate, Build
					skills and explore the world of software development with JavaScript.
				</p>
				<Link
					href={"https://chat.whatsapp.com/KI0X9ww3DEL8cfV07tvJtQ"}
					target="_blank"
				>
					<Button size={"sm"} className="font-bold rounded-none w-[100%]">
						Join Us
					</Button>
				</Link>
			</div>
		</div>
	)
}
