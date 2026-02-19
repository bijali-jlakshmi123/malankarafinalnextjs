import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import RoomsSuitesSlider from "@/components/RoomsSuitesSlider";
import DiningSlider from "@/components/DiningSlider";
import ExperienceSlider from "@/components/ExperienceSlider";
import WellnessSlider from "@/components/WellnessSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <HeroSlider />
      <RoomsSuitesSlider />
      <DiningSlider />
      <ExperienceSlider />
      <WellnessSlider />
      <Footer />
    </main>
  );
}
