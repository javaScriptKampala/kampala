import TopNavigationBar from "@/components/navigation/TopNavigationBar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TopNavigationBar />
        <Component {...pageProps} />
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
    </>
  );
}
