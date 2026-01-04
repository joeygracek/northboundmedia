import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandPartners from "@/components/BrandPartners";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NORTHBOUND | Premium Ad Placements for Creators</title>
        <meta 
          name="description" 
          content="Northbound connects independent creators with premium brand partnerships. Authentic placements, no compromises." 
        />
        <meta name="keywords" content="creator advertising, creator partnerships, brand deals, influencer marketing, content creator sponsorships" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <BrandPartners />
          <Metrics />
          <WhatWeDo />
          <HowItWorks />
          <section id="reviews">
            <Reviews />
          </section>
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
