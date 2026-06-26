import { ArrowLeft, Coffee, Sparkles, Truck } from "lucide-react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Separator from "./ui/Separator";
import ScrollReveal from "./ui/ScrollReveal";

const plans = [
  {
    name: "Bean Drop",
    price: "$35",
    cadence: "per month",
    description: "A rotating selection of fresh single-origin beans delivered to your door.",
    perks: ["2 bags monthly", "Free shipping", "Roasted to order"]
  },
  {
    name: "Weekend Brew",
    price: "$50",
    cadence: "per month",
    description: "Perfect for espresso lovers who want a richer, more frequent rotation.",
    perks: ["3 bags monthly", "Priority roasting", "Flavor notes guide"]
  },
  {
    name: "Coffee Club",
    price: "$75",
    cadence: "per month",
    description: "Our most popular plan for households that never skip their morning ritual.",
    perks: ["4 bags monthly", "Exclusive blends", "Early access to drops"]
  }
];

export default function SubscriptionPage({ onBackHome, onOpenOrder }) {
  return (
    <main className="min-h-screen bg-[#f5e6d3] px-3 py-8 sm:px-4 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-stone-200 bg-[#faf4ed] p-4 shadow-xl sm:p-6 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b07318]">
              Coffee subscriptions
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#1e1714] sm:text-4xl md:text-5xl">
              Fresh beans, delivered on your schedule
            </h1>
            <p className="mt-3 max-w-2xl text-base text-[#6b584c] sm:text-lg">
              Choose a plan that fits your routine and receive expertly roasted coffee straight to
              your door.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="primary" size="md" className="w-full sm:w-auto" onClick={onOpenOrder}>
              Order coffee
            </Button>
            <Button variant="accent" size="md" className="w-full sm:w-auto" onClick={onBackHome}>
              <ArrowLeft size={16} /> Back home
            </Button>
          </div>
        </div>

        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-stone-200 bg-white/80 p-3 text-sm text-[#6b584c] shadow-sm sm:gap-3 sm:p-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f0b955] px-3 py-1 font-semibold text-[#4a372c]">
              <Sparkles size={14} /> Roasted weekly
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-1">
              <Coffee size={14} /> Flexible pause anytime
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-1">
              <Truck size={14} /> Free shipping over $35
            </span>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} animation="fadeUp" delay={0.1 * (index + 1)}>
              <div className="flex h-full flex-col rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                <Badge variant="accent" className="mb-4 w-fit">
                  {plan.name}
                </Badge>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#1e1714] sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm uppercase tracking-[0.2em] text-[#6b584c]">
                    {plan.cadence}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6b584c]">{plan.description}</p>
                <Separator className="my-5" />
                <ul className="space-y-2 text-sm text-[#4a372c]">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="text-[#d4922a]">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" size="md" className="mt-6 w-full">
                  Choose plan
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
