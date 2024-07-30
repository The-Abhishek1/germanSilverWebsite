import { Inter } from "next/font/google";
import "./globals.css";
import Share from "./(Components)/(SameCompo)/share";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ablaze Nova",
  description: "German Silver Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Share />
        {children}
      </body>
    </html>
  );
}
