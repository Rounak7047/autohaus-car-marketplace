import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/feedback")({
  component: FeedbackPage,
});

const initialReviews = [
  { name: "Priya Sharma", rating: 5, text: "Bought my dream SUV here. The process was unbelievably smooth and transparent." },
  { name: "Rahul Mehta", rating: 5, text: "Listed my sedan and got 3 serious buyers within 48 hours. Outstanding platform." },
  { name: "Anita Desai", rating: 4, text: "Great selection of premium cars and the AI price suggestion was spot on." },
  { name: "Vikram Singh", rating: 5, text: "Best place to find verified luxury cars. Customer support is exceptional." },
  { name: "Neha Patel", rating: 5, text: "Sold my hatchback in just 3 days. Got a fair price and zero hassle." },
  { name: "Arjun Kapoor", rating: 4, text: "Slick UI, transparent pricing, and a great range of EV options." },
];

function FeedbackPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) {
      toast.error("Please fill all fields");
      return;
    }
    setReviews([{ ...form }, ...reviews]);
    setForm({ name: "", rating: 5, text: "" });
    toast.success("Thank you for your feedback!");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-display font-bold text-4xl lg:text-5xl">Customer Feedback</h1>
        <p className="text-muted-foreground mt-3">Real experiences from drivers in our community</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-16">
        {reviews.map((r, i) => (
          <div key={i} className="p-7 rounded-2xl glass-strong shadow-card hover-lift relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
            <div className="mt-5 pt-5 border-t border-border/50 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-semibold">
                {r.name[0]}
              </div>
              <div className="font-medium text-sm">{r.name}</div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="max-w-2xl mx-auto p-7 rounded-2xl glass-strong space-y-5">
        <h2 className="font-display font-bold text-2xl text-center">Share your experience</h2>
        <div className="space-y-1.5">
          <Label htmlFor="fname">Your name</Label>
          <Input id="fname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label>Rating</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })}>
                <Star className={`h-7 w-7 transition-smooth ${n <= form.rating ? "fill-primary text-primary" : "text-muted-foreground/40"}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ftext">Your feedback</Label>
          <Textarea id="ftext" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Tell us about your experience" rows={4} />
        </div>
        <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
}
