import { Gauge, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover-lift">
      <div className="aspect-16/10 overflow-hidden bg-secondary/30">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{car.brand}</p>
            <h3 className="font-display font-semibold text-lg leading-tight">{car.name}</h3>
          </div>
          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/15 text-primary border border-primary/20 whitespace-nowrap">
            {car.fuel}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {car.year}</span>
          <span className="flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5" /> {car.km.toLocaleString()} km</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="font-display font-bold text-xl gradient-text">${car.price.toLocaleString()}</span>
          <Button size="sm" variant="secondary">View Details</Button>
        </div>
      </div>
    </article>
  );
}
