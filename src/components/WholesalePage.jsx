import { ArrowLeft, Boxes, Leaf, Mail, Sparkles, Truck } from "lucide-react";
import Button from "./ui/Button";
import CoffeePourIllustration from "./ui/CoffeePourIllustration";
import ScrollReveal from "./ui/ScrollReveal";

export default function WholesalePage({ onBackHome, onOpenCatalog }) {
  return (
    <main className="min-h-screen bg-[#f5e6d3] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-stone-200/80 bg-[#faf4ed] p-6 shadow-[0_30px_80px_rgba(30,23,20,0.15)] sm:p-8 lg:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ScrollReveal animation="fadeUp">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b07318]">
                Wholesale
              </p>
              <h1 className="mt-2 text-3xl font-bold text-[#1e1714] sm:text-4xl">
                Coffee for cafés, offices, and events
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#6b584c]">
                Bring the same carefully roasted beans to your team, your guests, or your shop. We offer flexible wholesale options with fast fulfillment and expert support.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md" onClick={onBackHome}>
                <ArrowLeft size={16} /> Back home
              </Button>
              <Button variant="accent" size="md" onClick={onOpenCatalog}>
                Browse coffee
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal animation="fadeUp" delay={0.15}>
            <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[#b07318]">
                <Boxes size={18} />
                <h2 className="text-xl font-semibold text-[#1e1714]">Why partners choose us</h2>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#6b584c]">
                <div className="rounded-2xl border border-[#eadbc5] bg-[#fffdf9] p-4">
                  <p className="font-semibold text-[#1e1714]">Fresh roast-to-order delivery</p>
                  <p className="mt-1">We ship premium beans with a focus on freshness, consistency, and flavor.</p>
                </div>
                <div className="rounded-2xl border border-[#eadbc5] bg-[#fffdf9] p-4">
                  <p className="font-semibold text-[#1e1714]">Flexible options</p>
                  <p className="mt-1">From small office setups to larger hospitality programs, our packs scale with your needs.</p>
                </div>
                <div className="rounded-2xl border border-[#eadbc5] bg-[#fffdf9] p-4">
                  <p className="font-semibold text-[#1e1714]">Hands-on guidance</p>
                  <p className="mt-1">We help you select the right roast profile for your audience and service style.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="flex flex-col gap-4 rounded-3xl border border-stone-200/80 bg-[#1e1714] p-6 text-[#f5e6d3] shadow-sm">
              <CoffeePourIllustration className="h-44 w-full" />
              <div className="flex items-center gap-2 text-[#f0b955]">
                <Sparkles size={18} />
                <h2 className="text-xl font-semibold">Let’s build your coffee program</h2>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#f8ebd8]">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <Truck className="mt-1 shrink-0" size={18} />
                  <p>Wholesale orders are prepared carefully and delivered with dependable service.</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <Leaf className="mt-1 shrink-0" size={18} />
                  <p>We work with cafés, boutique hotels, coworking spaces, and events that value quality.</p>
                </div>
                <Button variant="accent" size="md" className="mt-4" onClick={onOpenCatalog}>
                  Explore wholesale coffee
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fadeUp" delay={0.25}>
          <div className="mt-6 rounded-3xl border border-[#e4c79b] bg-[#fff8ec] p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#b07318]">
              <Mail size={18} />
              <h2 className="text-xl font-semibold text-[#1e1714]">Need help with a wholesale request?</h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6b584c]">
              Share a little about your business, project, or coffee needs and we’ll follow up with the right guidance.
            </p>

            <form className="mt-5 space-y-4">
              <label className="block text-sm font-medium text-[#4a372c]">
                Your information
                <textarea
                  rows="5"
                  placeholder="Tell us about your café, office, event, or wholesale request..."
                  className="mt-2 w-full rounded-2xl border border-[#e1c7a0] bg-white px-4 py-3 text-sm text-[#1e1714] outline-none ring-0"
                />
              </label>

              <Button variant="accent" size="md" type="button">
                Send inquiry
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
