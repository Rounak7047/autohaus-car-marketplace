import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Upload, Sparkles, Car as CarIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/sell")({
  component: SellPage,
});

function SellPage() {
  const [form, setForm] = useState({
    name: "", brand: "", year: "", km: "", fuel: "Petrol", trans: "Automatic", price: "", desc: "",
  });
  const [images, setImages] = useState<string[]>([]);

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  const suggested = useMemo(() => {
    const year = parseInt(form.year) || 0;
    const km = parseInt(form.km) || 0;
    if (!year || !km) return null;
    const age = Math.max(0, 2025 - year);
    const base = 45000 - age * 2800 - (km / 1000) * 35;
    const adj = form.fuel === "Electric" ? 8000 : form.fuel === "Hybrid" ? 4000 : 0;
    return Math.max(3000, Math.round((base + adj) / 100) * 100);
  }, [form.year, form.km, form.fuel]);

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const urls = Array.from(files).slice(0, 6 - images.length).map((f) => URL.createObjectURL(f));
    setImages([...images, ...urls]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.brand || !form.year || !form.price) {
      toast.error("Please fill required fields");
      return;
    }
    toast.success("Listing submitted! We'll review and publish within 24 hours.");
    setForm({ name: "", brand: "", year: "", km: "", fuel: "Petrol", trans: "Automatic", price: "", desc: "" });
    setImages([]);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 animate-fade-in-up">
        <h1 className="font-display font-bold text-4xl lg:text-5xl">List your car</h1>
        <p className="text-muted-foreground mt-2">Get a fair price in minutes with our AI estimator.</p>
      </div>

      <form onSubmit={submit} className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6 p-7 rounded-2xl glass-strong">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Car name *"><Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Aurora 5 Series" /></Field>
            <Field label="Brand *"><Input value={form.brand} onChange={(e) => update("brand", e.target.value)} placeholder="e.g. BMW" /></Field>
            <Field label="Model year *"><Input type="number" value={form.year} onChange={(e) => update("year", e.target.value)} placeholder="2022" /></Field>
            <Field label="KM driven"><Input type="number" value={form.km} onChange={(e) => update("km", e.target.value)} placeholder="22000" /></Field>
            <Field label="Fuel type">
              <Select value={form.fuel} onValueChange={(v) => update("fuel", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Petrol", "Diesel", "Electric", "Hybrid"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Transmission">
              <Select value={form.trans} onValueChange={(v) => update("trans", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Automatic", "Manual", "CVT"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Your price (USD) *">
              <Input type="number" value={form.price} onChange={(e) => update("price", e.target.value)} placeholder="35000" />
            </Field>
            <div className="sm:col-span-1 flex items-end">
              {suggested ? (
                <div className="w-full p-3 rounded-xl bg-primary/10 border border-primary/30 text-sm">
                  <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-1">
                    <Sparkles className="h-3.5 w-3.5" /> Suggested price
                  </div>
                  <div className="font-display font-bold text-xl gradient-text">${suggested.toLocaleString()}</div>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Add year & KM to see suggested price.</p>
              )}
            </div>
          </div>

          <Field label="Condition description">
            <Textarea
              value={form.desc}
              onChange={(e) => update("desc", e.target.value)}
              placeholder="Mention any dents, scratches, service history..."
              rows={4}
            />
          </Field>

          <div className="space-y-2">
            <Label>Upload car images (max 6)</Label>
            <label className="flex flex-col items-center justify-center gap-2 h-36 rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-smooth cursor-pointer bg-secondary/20">
              <Upload className="h-6 w-6 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Click to upload or drag & drop</span>
              <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => onFiles(e.target.files)} />
            </label>
            {images.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
                {images.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                    <button type="button" onClick={() => setImages(images.filter((_, j) => j !== i))}
                      className="absolute top-1 right-1 h-6 w-6 rounded-full bg-background/80 flex items-center justify-center hover:bg-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside className="p-6 rounded-2xl glass-strong h-fit lg:sticky lg:top-24 space-y-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <CarIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold text-lg">Why sell on AutoHaus?</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>• Free listing with verified buyers</li>
            <li>• AI price estimator for fair value</li>
            <li>• Reach 50,000+ active drivers</li>
            <li>• Secure payment & paperwork</li>
          </ul>
          <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11">
            Submit listing
          </Button>
        </aside>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
