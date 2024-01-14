import "./globals.css";
import type { Metadata } from "next";
import { Instagram, Youtube } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import localFont from "next/font/local";
import "react-day-picker/dist/style.css";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

// Font files can be colocated inside of `app`
const SfProRegular = localFont({
  src: "../public/fonts/sf-pro-text-regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cursilho de Cristandade - Igreja Cristã em Recife",
  description: "Plataforma de cadastro dos cursilhistas da Igreja Cristã em Recife",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={SfProRegular.className}>
        <div className="flex flex-col h-screen">
          <nav className="bg-primary p-3">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <Link href="/">
                <div className="flex justify-center items-center">
                  <Avatar>
                    <AvatarImage src="/newlogoicrpretamedium.png" />
                    <AvatarFallback>IC</AvatarFallback>
                  </Avatar>

                  <div className="text-sm pl-2 font-bold tracking-wide text-primary-foreground md:text-lg">Cursilho de Cristandade - Igreja Cristã em Recife</div>
                </div>
              </Link>
              <div className="flex mt-4 gap-2 md:mt-0 md:space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="https://www.instagram.com/igrejacristaemrecife" target="_blank">
                        <Instagram style={{ color: "white" }} className="w-6 md:w-8" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Siga nosso instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="https://www.youtube.com/@igrejacristaemrecife3669" target="_blank">
                        <Youtube style={{ color: "white" }} className="w-6 md:w-8" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Inscreva-se no canal do youtube</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </nav>

          <div className="mt-5 mb-5 ">{children}</div>
          <footer className="bg-primary p-3 text-center text-white">
            <p>© 2023 Gama Code. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
