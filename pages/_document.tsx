import TopNavigationBar from "@/components/navigation/TopNavigationBar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
