import Navbar from "@/components/Navbar";
import "./globals.css";
import BreadCrumbContextProvider from "@/providers/BreadCrumbProvider";


export const metadata = {
  title: "hyggex assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-[4vw] bg-[#F9F9F9]">
      <BreadCrumbContextProvider>
      <Navbar />
      {children}
      </BreadCrumbContextProvider>
      </body>
    </html>
  );
}
