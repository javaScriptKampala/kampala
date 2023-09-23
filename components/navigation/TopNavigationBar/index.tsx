import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

export default function TopNavigationBar() {
  return (
    <>
      <div className="pt-20">
        <div className="justify-between container  w-full ">
          <div className="w-fit">
            <Link href={"/"}>
              <Image
                src={"/icons/icon-512.png"}
                width={1080}
                height={1080}
                alt="JavaScript Kampala logo"
                className="w-16"
              />
            </Link>
          </div>
          <div className="flex py-5 flex-col md:flex-row">
            <div className="flex space-x-4 items-center">
              {[
                {
                  title: "Home",
                  path: "/",
                  newPage: false,
                },
                {
                  title: "Meetups",
                  path: "https://www.eventbrite.com/o/javascript-kampala-57225130373",
                  newPage: true,
                },
                {
                  title: "Sponsors",
                  path: "/sponsorship",
                  newPage: false,
                },
                // {
                //   title: "Jobs",
                //   path: "/jobs",
                //   newPage: false,
                // },
                {
                  title: "Twitter",
                  path: "https://twitter.com/JsKampala",
                  newPage: true,
                },
                {
                  title: "Github",
                  path: "https://github.com/javaScriptKampala",
                  newPage: true,
                },
              ].map((_l, k) => (
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
              ))}
            </div>
            <div className="flex md:ml-4 space-x-2 items-center">
              {/* <Button size={"sm"} variant="link" className="rounded-full">
              Donate
            </Button> */}
              <Link
                href={"https://chat.whatsapp.com/KI0X9ww3DEL8cfV07tvJtQ"}
                target="_blank"
              >
                <Button size={"xs"} className="rounded-none w-[100%]">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
     

      <div className="fixed bottom-0 right-6 mb-4">
        <ModeToggle />
      </div>
    </>
  );
}
