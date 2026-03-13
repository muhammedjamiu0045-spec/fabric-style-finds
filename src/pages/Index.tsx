import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <main className="container py-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Our Collection</h2>
        <ProductGrid />
      </main>
      <footer className="border-t py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Fabric & Style. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
