import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, Tag, Star, Shield, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/CarCard";
import { CARS } from "@/lib/cars";
import heroCar from "@/assets/hero-car.jpg";
import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import hatch from "@/assets/car-hatchback.jpg";
import electric from "@/assets/car-electric.jpg";
import luxury from "@/assets/car-luxury.jpg";

export const Route = createFileRoute("/_app/home")({
  component: HomePage,
});

const categories = [
  { name: "SUV", img: suv, count: "120+" },
  { name: "Sedan", img: sedan, count: "85+" },
  { name: "Hatchback", img: hatch, count: "60+" },
  { name: "Electric", img: electric, count: "45+" },
  { name: "Luxury", img: luxury, count: "30+" },
];

const testimonials = [
  { name: "Priya Sharma", rating: 5, text: "Bought my dream SUV here. The process was unbelievably smooth and transparent." },
  { name: "Rahul Mehta", rating: 5, text: "Listed my sedan and got 3 serious buyers within 48 hours. Outstanding platform." },
  { name: "Anita Desai", rating: 4, text: "Great selection of premium cars and the AI price suggestion was spot on." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> The premium car marketplace
              </span>
              <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.05] tracking-tight">
                Buy or Sell Cars <span className="gradient-text">Easily</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Discover thousands of verified vehicles or list your own in minutes. The smarter way to drive change.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-8 text-base">
                  <Link to="/buy"><ShoppingBag className="h-4 w-4 mr-2" /> BUY <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base glass border-border/60">
                  <Link to="/sell"><Tag className="h-4 w-4 mr-2" /> SELL</Link>
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                {[
                  { v: "12K+", l: "Cars sold" },
                  { v: "4.9", l: "Avg. rating" },
                  { v: "50+", l: "Cities" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display font-bold text-2xl gradient-text">{s.v}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-up delay-200">
              <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
              <img src={heroCar} alt="Featured premium car" width={1920} height={1024} className="relative rounded-3xl shadow-elegant w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border/50 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { Icon: Shield, t: "Verified Listings", d: "Every car is inspected" },
            { Icon: Zap, t: "Instant Quotes", d: "AI-powered pricing" },
            { Icon: Star, t: "Trusted by 50K+", d: "Drivers nationwide" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Browse by Category</h2>
            <p className="text-muted-foreground mt-2">Find the perfect ride for every journey</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((c, i) => (
            <Link
              key={c.name}
              to="/buy"
              style={{ animationDelay: `${i * 0.05}s` }}
              className="group rounded-2xl overflow-hidden bg-gradient-card border border-border/50 hover-lift animate-fade-in-up"
            >
              <div className="aspect-square overflow-hidden bg-secondary/30">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="font-display font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.count} listings</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Featured Cars</h2>
            <p className="text-muted-foreground mt-2">Hand-picked for you this week</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/buy">View all <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARS.slice(0, 4).map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl">Loved by drivers</h2>
          <p className="text-muted-foreground mt-2">Real stories from our community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="p-7 rounded-2xl glass-strong shadow-card hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border/50 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-semibold">
                  {t.name[0]}
                </div>
                <div className="font-medium text-sm">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
