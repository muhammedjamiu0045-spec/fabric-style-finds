import heroImage from "@/assets/hero-clothing.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt="Premium clothing and fabrics collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 container h-full flex flex-col justify-center items-start">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in">
          Clothing & Fabrics
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover premium quality garments and exquisite fabrics for every occasion. Curated with care, crafted with passion.
        </p>
      </div>
    </section>
  );
};
