import Footer from "@/components/footer"
import TopNavigationBar from "@/components/navigation/TopNavigationBar"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/ui/theme-provider"
import "@/styles/globals.css"
import { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import Link from "next/link"

const inter = Ubuntu({ weight: ["400", "700"], subsets: ["cyrillic"] })

export const metadata: Metadata = {
	title: "JavaScript Kampala | Home",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<body
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
				</body>
			</html>
		</>
	)
}
