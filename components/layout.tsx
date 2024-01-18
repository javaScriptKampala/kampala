import Footer from "@/components/footer"
import TopNavigationBar from "@/components/navigation/TopNavigationBar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import Head from "next/head"

const inter = Ubuntu({ weight: ["400", "700"], subsets: ["cyrillic"] })

export default function RootLayout({
	children,
	title,
}: {
	children: React.ReactNode
	title: string
}) {
	return (
		<>
			<Head>
				<title>JavaScript Kampala | {title}</title>
			</Head>
			<div
				className={`${inter.className} w-screen min-h-screen overflow-x-hidden`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<TopNavigationBar />

					<main className="container max-w-5xl mx-auto py-20 flex flex-col">
						{children}
					</main>

					<Footer />
				</ThemeProvider>
			</div>
		</>
	)
}
