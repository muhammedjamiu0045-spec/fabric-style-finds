import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-16">
        <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-8 text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About Fabric & Style</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-foreground text-xl font-light leading-relaxed">
            We believe that tradition is never out of fashion. Fabric & Style was born from a love for African heritage and the timeless elegance of traditional attire.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-10">Our Story</h2>
          <p>
            What started as a passion for curating the finest Agbadas, Jalabiyahs, and Ankara fabrics has grown into a trusted destination for men and women who appreciate quality craftsmanship and cultural authenticity. Every piece in our collection is carefully selected to honour tradition while embracing modern style.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-10">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Traditional Attire</strong> — Royal Agbadas, Senator Native Suits, Grand Jalabiyahs, Dashiki shirts, and more.</li>
            <li><strong>Women's Fashion</strong> — Elegant Ankara Kaftan dresses, Hijabs, and modest wear for every occasion.</li>
            <li><strong>Premium Fabrics</strong> — Aso Oke, Swiss lace, Ankara wax prints, and Guinea brocade sold by the yard.</li>
            <li><strong>Accessories</strong> — Embroidered Kufi caps, beaded jewellery, and finishing touches.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-10">Our Promise</h2>
          <p>
            Every item at Fabric & Style is chosen for its quality, authenticity, and beauty. We work directly with skilled tailors and textile artisans to bring you garments and fabrics that tell a story — your story.
          </p>

          <p className="text-foreground font-medium mt-10">
            Thank you for choosing Fabric & Style. Wear your heritage with pride.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
