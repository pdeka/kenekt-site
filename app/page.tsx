import { MagnifyingGlass, DownloadSimple } from "@phosphor-icons/react/ssr";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeaturePair } from "@/components/site/FeaturePair";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqNotes } from "@/components/site/FaqNotes";
import { SignupForm } from "@/components/site/SignupForm";
import { DarkStatement } from "@/components/site/DarkStatement";
import { BuildersIntro } from "@/components/site/BuildersIntro";
import { BuilderFeatures } from "@/components/site/BuilderFeatures";
import { ClosingCta } from "@/components/site/ClosingCta";
import { Footer } from "@/components/site/Footer";
import type { PricingCardData } from "@/components/site/PricingCard";

const adviserPlans: PricingCardData[] = [
  {
    name: "Single Agent Account",
    price: "Free with 1 EOI every 3 months",
    bullets: [
      "Access nationwide stock and compare houseand land opportunities.Access nationwide stock and compare house",
      "Utilise property research tools to present options to clients effectively.",
      "Apply your branding to generate brochures and client materials.",
      "Access continuously updated pricing and availability data.",
      "Work with Kenekt's validated network of builders and suppliers.",
      "Streamlined access to multiple suppliers via a single Kenekt referral agreement.",
      "Export stocklists for in-depth research or distribution.",
    ],
    cta: "Click to sign up",
    ctaNote: "Free for property advisors*",
  },
  {
    name: "Agency Account",
    price: "Free with 1 EOI every 3 months",
    bullets: [
      "Includes all features of the Single AgentAccount.",
      "Your own white-labelled portal, offering Kenekt's tools under your brand.",
      "Custom portal address, e.g., portal.mydomain.com.au.",
      "All enquiries from your portal are directed exclusively to your agency.",
      "Create accounts for clients and referral partners within your branded environment.",
      "White-labelled URLs for a seamless client experience.",
      "Apply your agency's logo, colours, and contact details across the portal and documents.",
      "Unlimited access for your agency staff, property advisers, and approved referrers.",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Pro Agency Account",
    price: "Free with 1 EOI every month",
    note: "Alternatively, retain access for $990 per month including GST.",
    bullets: [
      "Includes all features of the Agency Account.",
      "Seamless integration to display selected Kenekt packages on your existing website.",
      "Option for a professional, templated website by Kenekt if you don't have one.",
      "Publish integrated Kenekt stock directly to your website with live updates.",
      "Offer branded property search functionality directly on your site.",
      "Capture leads directly through your website for immediate follow-up.",
      "Managed implementation and ongoing data synchronisation by Kenekt.",
    ],
    cta: "Book a demo",
  },
];

const builderPlans: PricingCardData[] = [
  {
    name: "Lite: less than 20 agents",
    price: "$799/month incl GST",
    note: "20% discount if paid yearly",
    setup: "Includes a $1,500 + GST One-Time Setup Cost",
    bullets: [
      "Unlimited staff & upto 20 agent accounts: grow without paying per user.",
      "An unlimited number of estates and packages",
      "Gain instant access to Kenekt's extensive channel partner network: agents ready to present and sell your stock to their clients.",
      "Done-for-you onboarding: we set up your entire library (Floor Plans, Facades, Inclusions, Commission Rates).",
      "4 hours of expert training: your team becomes platform-ready on day one.",
      "Email & phone support with a 5-day SLA.",
      "No lock-in contracts: stay because you love it, not because you're tied in.",
      "Default flyer templates included at no charge.",
    ],
    cta: "Book a demo",
  },
  {
    name: "Standard: unlimited agents",
    price: "$990/month incl GST",
    note: "20% discount if paid yearly",
    setup: "Includes a $1,500 + GST One-Time Setup Cost",
    bullets: [
      "Everything in Lite plus unlimited number of agents and referrers.",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Premium: admin-supported",
    price: "$2200/month incl GST",
    note: "20% discount if paid yearly",
    setup: "Includes a $1,500 + GST One-Time Setup Cost",
    bullets: [
      "Everything in Standard plus admin resource to assist with daily data updates. Please note land availability data must be provided by the builder’s internal team. Kenekt’s role under this plan is strictly administrative.",
    ],
    cta: "Book a demo",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <Hero />

        <FeaturePair
          features={[
            {
              label: "Portal",
              heading: "Effortless Research & Seamless Deal-making",
              body: "Aims to make property research effortless and deal-making seamless, removing the research and admin hurdles that slow property advisers down.",
              Icon: MagnifyingGlass,
              tone: "amber",
            },
            {
              label: "Export",
              heading: "Fully Downloadable Stocklist",
              body: "Your complete Kenekt stocklist is just one click away. Download it instantly as an Excel or PDF file. Stay organised and make data-driven property decisions faster.",
              Icon: DownloadSimple,
              tone: "purple",
            },
          ]}
        />

        <PricingSection
          eyebrow={{ index: "02", label: "For property advisers" }}
          heading="Kenekt for Agencies & property advisers"
          intro="Kenekt is free for agencies, property advisers, mortgage brokers & accountants."
          plans={adviserPlans}
        />

        <FaqNotes />

        <SignupForm id="signup" />

        <DarkStatement />

        <BuildersIntro />

        <BuilderFeatures />

        <PricingSection
          id="builder-pricing"
          eyebrow={{ index: "04", label: "For builders" }}
          heading="Simple, transparent pricing designed to help builders scale."
          intro="Choose a plan that scales with your business"
          plans={builderPlans}
        />

        <SignupForm id="signup-builders" />

        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
