import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { CARS } from "@/lib/cars";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/_app/buy")({
  component: BuyPage,
});

function BuyPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");
  const [fuel, setFuel] = useState("all");
  const [price, setPrice] = useState<number[]>([200000]);

  const filtered = useMemo(() => CARS.filter(c =>
    (type === "all" || c.type === type) &&
    (fuel === "all" || c.fuel === fuel) &&
    c.price <= price[0] &&
    (q === "" || (c.name + c.brand).toLowerCase().includes(q.toLowerCase()))
  ), [q, type, fuel, price]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 animate-fade-in-up">
        <h1 className="font-display font-bold text-4xl lg:text-5xl">Find your next ride</h1>
        <p className="text-muted-foreground mt-2">{filtered.length} cars available right now</p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="space-y-6 lg:sticky lg:top-24 h-fit p-6 rounded-2xl glass-strong">
          <div className="flex items-center gap-2 font-display font-semibold">
            <SlidersHorizontal className="h-4 w-4 text-primary" /> Filters
          </div>

          <div className="space-y-2">
            <Label>Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name..." className="pl-9" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Car type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Sedan">Sedan</SelectItem>
                <SelectItem value="Hatchback">Hatchback</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Fuel type</Label>
            <Select value={fuel} onValueChange={setFuel}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All fuels</SelectItem>
                <SelectItem value="Petrol">Petrol</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Max price</Label>
              <span className="text-sm font-medium gradient-text">${price[0].toLocaleString()}</span>
            </div>
            <Slider value={price} onValueChange={setPrice} min={10000} max={200000} step={5000} />
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 rounded-2xl glass">
              <p className="text-muted-foreground">No cars match your filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((car) => <CarCard key={car.id} car={car} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
