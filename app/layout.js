import "./globals.css";

export const metadata = {
  title: "Shashi Plant",
  description: "Indoor Plant Store",
};

import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-4 md:p-8">
          <p>2023@Shashi Plants</p>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
