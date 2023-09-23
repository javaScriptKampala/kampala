import TopNavigationBar from '@/components/navigation/TopNavigationBar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
    title: 'JavaScript Kampala | Home',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopNavigationBar />
            {children}
            <div className="container space-0">
              <p className="text-white text-xs"> © 2023 JavaScript Kampala</p>
              {/* <div className=" space-x-5 py-4 text-xs">
            {[
              "Privacy statement",
              "Terms of use",
              "All policies and guidelines",
              "Digital accessibility",
              "Cookie Preferences",
            ].map((t, k) => (
              <Link className="hover:underline text-white" key={k} href={"/"}>
                {t}
              </Link>
            ))}
          </div> */}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
