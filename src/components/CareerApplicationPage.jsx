import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Coffee,
  Sparkles,
  UserRound,
  Mail,
  PenSquare
} from "lucide-react";
import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";

export default function CareerApplicationPage({ onBackToCareers, onBackHome }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Roastery Assistant",
    experience: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5e6d3] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-stone-200/80 bg-[#faf4ed] p-6 shadow-[0_30px_80px_rgba(30,23,20,0.15)] sm:p-8 lg:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ScrollReveal animation="fadeUp">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b07318]">
                Application
              </p>
              <h1 className="mt-2 text-3xl font-bold text-[#1e1714] sm:text-4xl">
                Tell us more about yourself
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md" onClick={onBackToCareers}>
                <ArrowLeft size={16} /> Back to careers
              </Button>
              <Button variant="accent" size="md" onClick={onBackHome}>
                Back home
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal animation="fadeUp" delay={0.15}>
            <div className="rounded-3xl border border-stone-200/80 bg-[#1e1714] p-6 text-[#f5e6d3] shadow-sm">
              <div className="flex items-center gap-2 text-[#f0b955]">
                <Coffee size={18} />
                <h2 className="text-lg font-semibold">What happens next?</h2>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#f8ebd8]">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="font-semibold text-[#f5e6d3]">1. We review your application</p>
                  <p className="mt-1">
                    Every application is read with care and attention to your story.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="font-semibold text-[#f5e6d3]">2. We reach out</p>
                  <p className="mt-1">
                    If it feels like a fit, we’ll contact you for a short conversation.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="font-semibold text-[#f5e6d3]">3. We welcome you in</p>
                  <p className="mt-1">
                    From there, we’ll guide you through the next steps and onboarding.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.2}>
            {submitted ? (
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 size={20} />
                  <h2 className="text-xl font-semibold">Application received</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#4a372c]">
                  Thanks, {formData.name || "there"}! Your application is on its way to our team.
                </p>
                <Button variant="accent" size="md" className="mt-5" onClick={onBackToCareers}>
                  <Sparkles size={16} /> Return to careers
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-sm">
                <div className="mb-5 rounded-2xl border border-[#e5d2b6] bg-[#fffdf9] p-4 text-sm text-[#6b584c]">
                  <div className="flex items-center gap-2 font-semibold text-[#b07318]">
                    <PenSquare size={16} />
                    Share a little about your background and what excites you about coffee.
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[#4a372c]">
                    <span className="mb-2 flex items-center gap-2">
                      <UserRound size={14} /> Full name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fffdf9] px-4 py-3 text-sm outline-none ring-0"
                    />
                  </label>

                  <label className="text-sm font-medium text-[#4a372c]">
                    <span className="mb-2 flex items-center gap-2">
                      <Mail size={14} /> Email address
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fffdf9] px-4 py-3 text-sm outline-none ring-0"
                    />
                  </label>
                </div>

                <label className="mt-4 block text-sm font-medium text-[#4a372c]">
                  Role you’re applying for
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fffdf9] px-4 py-3 text-sm outline-none ring-0">
                    <option>Roastery Assistant</option>
                    <option>Customer Experience Lead</option>
                    <option>Coffee Educator</option>
                  </select>
                </label>

                <label className="mt-4 block text-sm font-medium text-[#4a372c]">
                  Relevant experience
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fffdf9] px-4 py-3 text-sm outline-none ring-0"
                  />
                </label>

                <label className="mt-4 block text-sm font-medium text-[#4a372c]">
                  Why you’d love to join The Beans Place
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fffdf9] px-4 py-3 text-sm outline-none ring-0"
                  />
                </label>

                <Button variant="accent" size="md" className="mt-6 w-full sm:w-auto">
                  <Sparkles size={16} /> Submit application
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
