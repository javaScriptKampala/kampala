import HomeTopHero from "@/components/heros/HomeTopHero"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { analytics, whyUsData } from "@/lib/data"

export default function Home() {
	return (
		<>
			<HomeTopHero />

			<section>Meetups</section>
			<section>Blog</section>
			<section>Support Us.</section>
		</>
	)
}
