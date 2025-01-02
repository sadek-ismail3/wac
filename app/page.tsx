import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Historique from "@/components/Historique";
import Navbar from "@/components/Navbar";
import PartenariatsSponsors from "@/components/PartenariatsSponsors";
import Timeline from "@/components/Timeline";
import Trophe from "@/components/Trophe";
import { Trophy } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Timeline/>
      <Gallery/>
      <Historique/>
      <Trophe/>
      <PartenariatsSponsors/>
    </>
  );
}
