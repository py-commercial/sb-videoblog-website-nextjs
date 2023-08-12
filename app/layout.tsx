import "./globals.css";
import type { Metadata } from "next";
import { notosans } from "./fonts";

import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";

export const metadata: Metadata = {
  title: "Skjold Bay",
  description: "Personal videoblogger website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${notosans.className} bg-primary-800 overflow-x-hidden`}
      >
        <header>
          <Navbar />
        </header>
        <div className="wrapper ">
          <div className=" mx-auto 2xl:max-w-[1600px] body-bg content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
