import RootLayout from "@/components/layout"
import { Post } from "@/lib/types"
import { getSortedPostsData } from "@/lib/posts"
import HeroSection from "@/components/home/Hero"
import MeetupsSection from "@/components/home/Meetups"
import BlogSection from "@/components/home/Blog"
import SupportSection from "@/components/home/Support"

interface IProps {
	eventsList: Post[]
	blogPosts: Post[]
}

export default function Home({ eventsList, blogPosts }: IProps) {
	return (
		<RootLayout title="Home">
			<HeroSection />
			<MeetupsSection eventsList={eventsList} />
			<BlogSection blogPosts={blogPosts} />
			<SupportSection />
		</RootLayout>
	)
}

export async function getStaticProps() {
	const eventsList: Post[] = getSortedPostsData("events", 3)
	const blogPosts: Post[] = getSortedPostsData("blog", 3)

	return {
		props: {
			eventsList: JSON.parse(JSON.stringify(eventsList)),
			blogPosts: JSON.parse(JSON.stringify(blogPosts)),
		},
	}
}
