// ============================================================
// APP.JSX — The Root Component (Day 2)
// ============================================================
// This is the MAIN file of your React application.
// It acts as the "layout manager" — it imports all section
// components and arranges them on the page.
//
// WHAT YOU WILL LEARN:
// - How to import components from other files
// - How to use export default to share a component
// - How to compose a page from smaller components
// - How JSX lets you use custom components like HTML tags
//
// ============================================================

// STEP 1: Import your section components
// Each component lives in its own file inside ./components/
// Use this syntax:  import ComponentName from "./components/ComponentName";
//
// Import the following components (in this order):
// - RibbonTicker
// - NavBar
// - HeroSection
// - CtaSection
// - FeaturesSection
// - ProductShowcase
// - FooterSection
// - AboutSection
// - ContactSection

/* --- YOUR IMPORTS GO HERE --- */

// STEP 2: Create and export the App component
// Use: export default function App() { ... }
//
// STEP 3: Inside the return(), build the page layout
// Wrap everything in a <div className="app">
//
// Place your components in this order:
//   1. <NavBar />
//   2. Hero section wrapped in: <section className="hero bg-hero">
//        Inside that, wrap <HeroSection /> in: <div className="hero-grid">
//   3. <RibbonTicker />
//   4. Features section wrapped in: <section className="features bg-features" id="shop">
//   5. Product Showcase wrapped in: <section className="bg-cta">
//   6. <RibbonTicker /> (used again — components are reusable!)
//   7. CTA section wrapped in: <section className="bg-cta">
//   8. About section wrapped in: <section className="bg-cta" id="about">
//   9. Contact section wrapped in: <section className="bg-cta" id="contact">
//  10. Footer section wrapped in: <section className="bg-footer">
//
// HINT: The id attributes (like id="shop") are anchor targets
// for the navigation links in the NavBar.

/* --- YOUR COMPONENT CODE GOES HERE --- */
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import FooterSection from "./components/FooterSection";
import ContactSection from "./components/ContactSection";
import RibbonTicker from "./components/RibbonTicker";
import ProductShowcase from "./components/ProductShowcase";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";
import AboutSection from "./components/AboutSection";
import OrderPage from "./components/OrderPage";
import SubscriptionPage from "./components/SubscriptionPage";
import CoffeeCatalogPage from "./components/CoffeeCatalogPage";
import CareersPage from "./components/CareersPage";
import CareerApplicationPage from "./components/CareerApplicationPage";

function getNormalizedPath(pathname) {
  const path = pathname.split("?")[0].split("#")[0];
  return path.replace(/\/+$/, "") || "/";
}

function getViewFromPath(pathname) {
  const path = getNormalizedPath(pathname);

  if (path === "/order") return "order";
  if (path === "/subscriptions") return "subscription";
  if (path === "/catalog") return "catalog";
  if (path === "/careers") return "careers";
  if (path === "/careers/apply") return "career-application";
  if (path === "/home" || path === "/index.html" || path === "") return "home";

  return "home";
}

function getPathFromView(view) {
  switch (view) {
    case "order":
      return "/order";
    case "subscription":
      return "/subscriptions";
    case "catalog":
      return "/catalog";
    case "careers":
      return "/careers";
    case "career-application":
      return "/careers/apply";
    default:
      return "/";
  }
}

export default function App() {
  const [currentView, setCurrentView] = useState(() => getViewFromPath(window.location.pathname));
  const [selectedCoffeeId, setSelectedCoffeeId] = useState(null);

  const navigateTo = (view) => {
    const nextPath = getPathFromView(view);
    setCurrentView(view);
    window.history.pushState({ view }, "", nextPath);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getViewFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  useEffect(() => {
    if (currentView === "home" && window.location.pathname !== "/") {
      window.history.replaceState({ view: "home" }, "", "/");
    }
  }, [currentView]);

  return (
    <div className="app">
      {currentView === "order" ? (
        <OrderPage
          selectedCoffeeId={selectedCoffeeId}
          onBack={() => {
            setSelectedCoffeeId(null);
            navigateTo("home");
          }}
          onOpenSubscriptions={() => {
            setSelectedCoffeeId(null);
            navigateTo("subscription");
          }}
        />
      ) : currentView === "subscription" ? (
        <SubscriptionPage
          onBackHome={() => {
            setSelectedCoffeeId(null);
            navigateTo("home");
          }}
          onOpenOrder={() => {
            setSelectedCoffeeId(null);
            navigateTo("order");
          }}
        />
      ) : currentView === "catalog" ? (
        <CoffeeCatalogPage
          onBackHome={() => {
            setSelectedCoffeeId(null);
            navigateTo("home");
          }}
          onOpenOrder={() => {
            setSelectedCoffeeId(null);
            navigateTo("order");
          }}
        />
      ) : currentView === "careers" ? (
        <CareersPage
          onBackHome={() => {
            setSelectedCoffeeId(null);
            navigateTo("home");
          }}
          onOpenApplication={() => {
            navigateTo("career-application");
          }}
        />
      ) : currentView === "career-application" ? (
        <CareerApplicationPage
          onBackToCareers={() => {
            navigateTo("careers");
          }}
          onBackHome={() => {
            setSelectedCoffeeId(null);
            navigateTo("home");
          }}
        />
      ) : (
        <>
          {/* NAVBAR */}
          <NavBar
            onOrderClick={() => {
              setSelectedCoffeeId(null);
              navigateTo("order");
            }}
          />

          {/* HERO */}
          <section className="hero bg-hero">
            <div className="hero-grid">
              <HeroSection />
            </div>
          </section>

          <RibbonTicker />

          {/* FEATURES / CAROUSEL */}
          <section className="features bg-features" id="shop">
            <FeaturesSection />
          </section>

          {/* PRODUCT SHOWCASE */}
          <section className="bg-cta">
            <ProductShowcase
              onOrderClick={(coffeeId) => {
                setSelectedCoffeeId(coffeeId);
                navigateTo("order");
              }}
              onViewAllClick={() => {
                navigateTo("catalog");
              }}
            />
          </section>

          <RibbonTicker />

          {/* CTA */}
          <section className="bg-cta">
            <CtaSection />
          </section>

          {/* ABOUT */}
          <section className="bg-cta" id="about">
            <AboutSection />
          </section>

          {/* CONTACT */}
          <section className="bg-cta" id="contact">
            <ContactSection />
          </section>

          {/* FOOTER */}
          <section className="bg-footer">
            <FooterSection
              onSubscriptionClick={() => {
                navigateTo("subscription");
              }}
              onCoffeeCatalogClick={() => {
                navigateTo("catalog");
              }}
              onCareersClick={() => {
                navigateTo("careers");
              }}
            />
          </section>
        </>
      )}
    </div>
  );
}
