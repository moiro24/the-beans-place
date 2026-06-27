import { ArrowLeft, Briefcase, Coffee, Sparkles, Users } from "lucide-react";
import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";

const roles = [
  {
    title: "Roastery Assistant",
    type: "Full-time",
    summary:
      "Support roasting, packaging, and daily quality checks in a hands-on production setting.",
    perks: ["Hands-on training", "Flexible schedule", "Coffee tasting sessions"]
  },
  {
    title: "Customer Experience Lead",
    type: "Part-time",
    summary:
      "Guide our guests through subscriptions, wholesale inquiries, and memorable coffee moments.",
    perks: ["Community-focused team", "Growth opportunities", "Employee discounts"]
  },
  {
    title: "Coffee Educator",
    type: "Full-time",
    summary:
      "Host tastings, lead brewing workshops, and help customers discover their perfect cup.",
    perks: ["Creative role", "Workshop events", "Travel stipend"]
  }
];

const values = [
  {
    title: "Craft first",
    text: "We believe great coffee starts with care, consistency, and attention to detail."
  },
  {
    title: "Community driven",
    text: "Our team helps build welcoming spaces where coffee lovers feel at home."
  },
  {
    title: "Always curious",
    text: "We love learning, experimenting, and sharing fresh ideas with every roast."
  }
];

export default function CareersPage({ onBackHome, onOpenApplication }) {
  return (
    <main className="min-h-screen bg-[#f5e6d3] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-stone-200/80 bg-[#faf4ed] p-6 shadow-[0_30px_80px_rgba(30,23,20,0.15)] sm:p-8 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal animation="fadeUp">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b07318]">
                Careers
              </p>
              <h1 className="mt-3 text-4xl font-bold text-[#1e1714] sm:text-5xl">
                Join the team behind every great cup
              </h1>
              <p className="mt-4 max-w-2xl text-base text-[#6b584c] sm:text-lg">
                We’re looking for passionate people who love coffee, community, and creating
                memorable experiences.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <Button variant="primary" size="md" onClick={onBackHome}>
              <ArrowLeft size={16} /> Back home
            </Button>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fadeUp" delay={0.15}>
          <div className="mt-8 rounded-[28px] border border-[#e3c79d] bg-[#1e1714] p-6 text-[#f5e6d3] sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f0b955]">
                  Why work with us
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  A warm, craft-driven workplace with real impact
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-[#f8ebd8]">
                <Briefcase size={18} />
                Grow with a team that values quality, creativity, and connection.
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {roles.map((role, index) => (
              <ScrollReveal key={role.title} animation="fadeUp" delay={0.05 * index}>
                <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[#1e1714]">{role.title}</h3>
                    <span className="rounded-full bg-[#f0b955] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a372c]">
                      {role.type}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#4a372c]">{role.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.perks.map((perk) => (
                      <span
                        key={perk}
                        className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b584c]">
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-4">
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="rounded-3xl border border-stone-200/80 bg-linear-to-br from-[#fffaf4] to-[#f2e0c7] p-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#b07318]">
                  <Users size={18} />
                  <h3 className="text-lg font-semibold">Our values</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-2xl border border-[#e5d2b6] bg-[#fffdf9] p-4">
                      <h4 className="font-semibold text-[#1e1714]">{value.title}</h4>
                      <p className="mt-1 text-sm text-[#4a372c]">{value.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.15}>
              <div className="rounded-3xl border border-stone-200/80 bg-[#fffdf9] p-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#b07318]">
                  <Coffee size={18} />
                  <h3 className="text-lg font-semibold">Ready to apply?</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#4a372c]">
                  Send us a note about your experience and what excites you about coffee culture.
                </p>
                <Button variant="accent" size="md" className="mt-4" onClick={onOpenApplication}>
                  <Sparkles size={16} /> Start your application
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
