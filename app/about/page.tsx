import SupportUs from "@/components/home/Support"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
	return (
		<div className="w-ful h-full flex flex-col items-center">
			<h1 className="text-6xl sm:text-8xl font-bold mb-6 text-primary text-center my-20">
				JavaScript @Kampala
			</h1>

			<h2 className="text-xl sm:text-2xl text-center max-w-lg mx-auto my-6">
				Community of Passionate JavaScript Developers in the heart of Uganda,
				The Pearl of Africa
			</h2>

			<div className="my-10">
				<h3 className="w-full text-3xl font-bold mb-10 text-center">
					Community Leaders
				</h3>

				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<li className="w-full flex gap-6">
						<div className="min-w-[80px] w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
							<Image
								src={`https://github.com/${"amkayondo"}.png`}
								width={100}
								height={100}
								alt="@amkayondo"
								className="w-full"
							/>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex flex-col text-left">
								<h3 className="text-xl font-bold">Kayondo Edward</h3>
								<Button
									variant="link"
									className="w-full text-left flex justify-start p-0 h-auto"
								>
									<Link href="https://github.com/amkayondo">@amkayondo</Link>
								</Button>
							</div>
							<div className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur a quos possimus et hic iste velit animi! Impedit,
								eligendi illum.
							</div>
						</div>
					</li>
					<li className="w-full flex gap-6">
						<div className="min-w-[80px] w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
							<Image
								src={`https://github.com/${"Hussseinkizz"}.png`}
								width={100}
								height={100}
								alt="@Hussseinkizz"
							/>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex flex-col text-left">
								<h3 className="text-xl font-bold">Hussein Kizz</h3>
								<Button
									variant="link"
									className="w-full text-left flex justify-start p-0 h-auto"
								>
									<Link href="https://github.com/Hussseinkizz">
										@Hussseinkizz
									</Link>
								</Button>
							</div>
							<div className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur a quos possimus et hic iste velit animi! Impedit,
								eligendi illum.
							</div>
						</div>
					</li>
				</ul>
			</div>

			<SupportUs />
		</div>
	)
}
