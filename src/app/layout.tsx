import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Dashbaord",
  description: "------None------",
};
import { UserProvider } from '@/app/context/UserContent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
