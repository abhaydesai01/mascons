import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Loading from "@/app/loading";
import { Suspense } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Mascons",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzKneMfQgHcLnRwBCVi4xQ6GNSrc_VW3U"
          async
          defer
        ></script>
      </body>
    </html>
  );
}
