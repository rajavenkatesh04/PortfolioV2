import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Navbar /><Header /><About /><Analytics />
    </>
  );
}
