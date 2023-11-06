"use client"
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"

const navItems = [
	{
		title: "Home",
		path: "/",
		newPage: false,
	},
	{
		title: "About",
		path: "/about",
		newPage: false,
	},
	{
		title: "Meetups",
		path: "/events",
		newPage: false,
	},
	{
		title: "Blog",
		path: "/blog",
		newPage: false,
	},
	{
		title: "Gallery",
		path: "/gallery",
		newPage: false,
	},
	{
		title: "Sponsors",
		path: "/sponsors",
		newPage: false,
	},
	// {
	// 	title: "Twitter",
	// 	path: "https://twitter.com/JsKampala",
	// 	newPage: true,
	// },
	// {
	// 	title: "Github",
	// 	path: "https://github.com/javaScriptKampala",
	// 	newPage: true,
	// },
]

export default function TopNavigationBar() {
	return (
		<div className="w-screen flex py-4 absolute top-0 left-0 right-0 backdrop-blur-sm border-b">
			<div className="container flex justify-between max-w-5xl mx-auto">
				<Link href={"/"}>
					<Image
						src={"/icons/icon-512.png"}
						width={40}
						height={40}
						alt="JavaScript Kampala logo"
					/>
				</Link>

				<NavigationMenu className="max-w-full block">
					<NavigationMenuList className="space-x-4 justify-end">
						{navItems.map((_l, k) => (
							<NavigationMenuItem>
								<Link
									target={_l.newPage ? "_blank" : "_parent"}
									key={k}
									href={_l.path}
								>
									<Button
										size={"lg"}
										variant="link"
										className="rounded-full p-0"
									>
										{_l.title}
									</Button>
								</Link>
							</NavigationMenuItem>
						))}
						<NavigationMenuItem>
							<Link
								href={"https://chat.whatsapp.com/KI0X9ww3DEL8cfV07tvJtQ"}
								target="_blank"
							>
								<Button size={"xs"} className="rounded-none w-[100%]">
									Join Us
								</Button>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>

					<div className="fixed bottom-0 right-6 mb-4">
						<ModeToggle />
					</div>
				</NavigationMenu>
			</div>
		</div>
	)
}
