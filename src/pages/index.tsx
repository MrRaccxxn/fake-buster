import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/Home/Hero";
import { DataStatsSection } from "@/components/Home/DataStatsSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <DataStatsSection/>
    </div>
  );
}
