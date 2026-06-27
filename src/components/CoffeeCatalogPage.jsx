import { useMemo, useState } from "react";
import { ArrowLeft, Bean, Coffee, Sparkles } from "lucide-react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";
import coffeeCatalog from "../data/coffeeOptions";

export default function CoffeeCatalogPage({ onBackHome, onOpenOrder }) {
  const [activeRoast, setActiveRoast] = useState("All");
  const roastOptions = ["All", "Light", "Medium", "Medium-Dark", "Dark"];

  const filteredCoffees = useMemo(() => {
    if (activeRoast === "All") {
      return coffeeCatalog;
    }

    return coffeeCatalog.filter((coffee) => coffee.roast === activeRoast);
  }, [activeRoast]);

  return (
    <main className="min-h-screen bg-[#f5e6d3] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-stone-200/80 bg-[#faf4ed] p-6 shadow-[0_30px_80px_rgba(30,23,20,0.15)] sm:p-8 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal animation="fadeUp">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b07318]">
                All coffee
              </p>
              <h1 className="mt-3 text-4xl font-bold text-[#1e1714] sm:text-5xl">
                Discover our full coffee collection
              </h1>
              <p className="mt-4 max-w-2xl text-base text-[#6b584c] sm:text-lg">
                From bright single origins to bold roasts, every bean is selected for flavor,
                character, and a memorable brewing experience.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" size="md" onClick={onOpenOrder}>
                <Coffee size={16} /> Order now
              </Button>
              <Button variant="primary" size="md" onClick={onBackHome}>
                <ArrowLeft size={16} /> Back home
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fadeUp" delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {roastOptions.map((roast) => (
              <button
                key={roast}
                type="button"
                onClick={() => setActiveRoast(roast)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeRoast === roast
                    ? "border-[#b07318] bg-[#b07318] text-[#fff8ef] shadow-lg"
                    : "border-stone-300 bg-white/70 text-[#4a372c] hover:border-[#d4922a] hover:text-[#b07318]"
                }`}>
                {roast}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredCoffees.map((coffee, index) => (
            <ScrollReveal key={coffee.name} animation="fadeUp" delay={0.05 * index}>
              <div className="h-full rounded-3xl border border-stone-200/80 bg-linear-to-br from-[#fffaf4] to-[#f2e0c7] p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a7264]">
                      {coffee.origin}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#1e1714]">{coffee.name}</h2>
                  </div>
                  {coffee.badge && (
                    <Badge variant="accent" className="shrink-0">
                      {coffee.badge}
                    </Badge>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#4a372c] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5e6d3]">
                    {coffee.roast} roast
                  </span>
                  <span className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b584c]">
                    Best for {coffee.bestFor}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#4a372c]">{coffee.description}</p>

                <div className="mt-5 rounded-2xl border border-[#e5d2b6] bg-[#fffdf9] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#b07318]">
                    <Sparkles size={16} /> Flavor notes
                  </div>
                  <p className="mt-2 text-sm text-[#4a372c]">{coffee.flavor}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mt-10 rounded-3xl border border-[#e3c79d] bg-[#1e1714] p-6 text-[#f5e6d3] sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f0b955]">
                  Freshly roasted
                </p>
                <h3 className="mt-2 text-2xl font-semibold">Every bag ships within 48 hours</h3>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-[#f8ebd8]">
                <Bean size={18} />
                Roasted to order for peak flavor and aroma.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
