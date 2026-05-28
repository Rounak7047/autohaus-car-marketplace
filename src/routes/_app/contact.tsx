import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent — we'll be in touch soon!");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-display font-bold text-4xl lg:text-5xl">Get in touch</h1>
        <p className="text-muted-foreground mt-3">Questions? Feedback? We'd love to hear from you.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { Icon: Mail, t: "Email", v: "rounakkarmakar2812@gmail.com", d: "We reply within 24 hours" },
            { Icon: Phone, t: "Phone", v: "+91 70476 29867", d: "Mon — Sat, 9am to 7pm" },
            { Icon: Phone, t: "Phone", v: "+91 80017 79184", d: "Customer support" },
            { Icon: MapPin, t: "Headquarters", v: "Mumbai, India", d: "5 branches across major cities" },
          ].map(({ Icon, t, v, d }) => (
            <div key={t} className="p-6 rounded-2xl glass-strong flex gap-4 hover-lift">
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                <div className="font-display font-semibold text-lg mt-0.5">{v}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="p-7 rounded-2xl glass-strong space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="cname">Name</Label>
            <Input id="cname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cemail">Email</Label>
            <Input id="cemail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cmsg">Message</Label>
            <Textarea id="cmsg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} />
          </div>
          <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11">
            <Send className="h-4 w-4 mr-2" /> Send Message
          </Button>
          {sent && (
            <p className="text-center text-sm text-primary animate-fade-in">✓ Message sent successfully</p>
          )}
        </form>
      </div>
    </div>
  );
}
