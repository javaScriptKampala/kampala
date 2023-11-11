import Link from "next/link"

import HeroSection from "@/components/home/Hero"
import MeetupsSection from "@/components/home/Meetups"
import BlogSection from "@/components/home/Blog"
import SupportSection from "@/components/home/Support"

export default function Home() {
	return (
		<>
			<HeroSection />
			<MeetupsSection />
			<BlogSection />
			<SupportSection />
		</>
	)
}
