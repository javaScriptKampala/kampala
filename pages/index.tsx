import Image from "next/image";
import { Inter } from "next/font/google";
import HomeTopHero from "@/components/heros/HomeTopHero";
import Head from "next/head";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { analytics, whyUsData } from "@/lib/data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>JavaScript Kampala | Home</title>
      </Head>
      <HomeTopHero />
      <div className="container">
        <blockquote className=" border-l-2 pl-6 italic w-full md:w-2/5">
          A community of javascript developers - learn, motivate, build skills
          and explore the world of software development with JavaScript.
        </blockquote>
        <div className="py-8 lg:py-10 mx-auto max-w-screen-xl ">
          <h2 className="mb-8 lg:mb-16 text-xl font-extrabold tracking-tight leading-tight md:text-2xl">
            Analytics
          </h2>
          <div className="grid grid-cols-2 gap-8  sm:gap-12 md:grid-cols-3 lg:grid-cols-6 ">
            {analytics.map((c, k) => (
              <div
                key={k}
                className="flex flex-col justify-center space-y-3 items-center"
              >
                <h2 className="scroll-m-20  pb-2 text-6xl font-semibold tracking-tight transition-colors first:mt-0">
                  {c.title}
                </h2>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <h2 className="mb-6 text-xl font-extrabold tracking-tight leading-tight  md:text-2xl">
            Why Us?
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            {whyUsData.map((w_, k) => (
              <Card key={k}>
                <CardContent className="p-4">
                  <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {w_.title}
                  </h1>
                  <p>{w_.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
