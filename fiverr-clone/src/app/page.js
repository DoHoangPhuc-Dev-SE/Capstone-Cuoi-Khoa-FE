
import HeroSection from "@/components/home/HeroSection";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import CategoryList from "@/components/home/CategoryList";
import FeaturedService from "@/components/home/FeaturedService";
import PopularService from "@/components/home/PopularService";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TrustedCompanies />
      <CategoryList />
      <FeaturedService />
      <PopularService />
    </main>
  );
}
