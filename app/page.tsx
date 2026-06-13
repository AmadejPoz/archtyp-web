import { Hero } from "@/components/home/Hero";
import { TheShift } from "@/components/home/TheShift";
import { Faculties } from "@/components/home/Faculties";
import { Archetypes } from "@/components/home/Archetypes";
import { Induit } from "@/components/home/Induit";
import { RobotTeaser } from "@/components/home/RobotTeaser";
import { Philosophy } from "@/components/home/Philosophy";
import { Close } from "@/components/home/Close";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheShift />
      <Faculties />
      <RobotTeaser />
      <Archetypes />
      <Induit />
      <Philosophy />
      <Close />
    </>
  );
}
