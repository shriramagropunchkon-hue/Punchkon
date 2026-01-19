import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { TargetAudience } from "@/app/components/TargetAudience";
import { Benefits } from "@/app/components/Benefits";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <TargetAudience />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
