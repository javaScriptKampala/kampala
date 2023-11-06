import Image from "next/image"
import { Button } from "../ui/button"

export default function Header() {
	return (
		<div className="min-w-full flex my-8 gap-20">
			<div className="flex-1">
				<h1 className="text-8xl font-bold mb-6 text-primary">
					JavaScript @Kampala
				</h1>
			</div>
			<div className="flex-1 flex flex-col justify-center items-end gap-6 select-none">
				<p className="text-right">
					A community of JavaScript Developers <br /> Learn, Motivate, Build
					skills and explore the world of software development with JavaScript.
				</p>
				<Button className="rounded-none font-bold text-xs">Join Us!</Button>
			</div>
		</div>
	)
}
