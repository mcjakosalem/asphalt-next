'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandMarquee from '@/components/BrandMarquee';
import CarCard from '@/components/CarCard';
import FeaturedNews from '@/components/FeaturedNews';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/Searchbar';
import Footer from '@/components/Footer';
import hondaCivic from '@/assets/honda civic.jpeg';
import landCruiser from '@/assets/Toyota_Land_Cruiser.jpeg';
import ford from '@/assets/fordd.jpeg';
import porsche911 from '@/assets/porsche 911.jpg';
import skylineR34 from '@/assets/nissan gtt 34.jpg';
import bugatti from '@/assets/bugattii.jpeg';
import skylineBlue from '@/assets/nissan skyline.jpg';
import partnerImage from '@/assets/bcome a partner.jpg';
import mazdarx7 from '@/assets/mazda rx7.jpg'
import ferrari from '@/assets/sf90.jpeg'
import FadeIn from '@/components/FadeIn';

const Home: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToCurrentHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    scrollToCurrentHash();
    window.addEventListener('hashchange', scrollToCurrentHash);

    return () => {
      window.removeEventListener('hashchange', scrollToCurrentHash);
    };
  }, [pathname]);

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      <div className="min-h-screen bg-[#1B1B1B] font-sans">
        <Navbar />
        <FadeIn direction="up" delay={0.2}>
          <Hero />
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <SearchBar />
        </FadeIn>
      </div>

      <FadeIn direction="none" delay={0.2}>
        <BrandMarquee />
      </FadeIn>

      <main className="max-w-7xl mx-auto py-24 px-6 space-y-32">
        <section id="car-rentals" className="scroll-mt-32">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-black">Car Rental</h2>
              <button className="font-bold border-b-2 border-black pb-1 text-black">VIEW ALL →</button>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            <FadeIn direction="up" delay={0.15}>
              <CarCard image={hondaCivic.src} name="Honda Civic (Type R)" category="SUPERCAR" price="₱4,000" isRental />
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <CarCard image={landCruiser.src} name="Toyota Land Cruiser" category="SUV" price="₱8,000" isRental />
            </FadeIn>
            <FadeIn direction="up" delay={0.45}>
              <CarCard image={ford.src} name="Ford Ranger (Pickup)" category="PICKUP" price="₱3,500" isRental />
            </FadeIn>
          </div>
        </section>

        <section id="shop-cars" className="scroll-mt-32">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-black">Shop Cars</h2>
              <button className="font-bold border-b-2 border-black pb-1 text-black">VIEW ALL →</button>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            <FadeIn direction="up" delay={0.15}>
              <CarCard image={porsche911.src} name="Porsche 911 GT3RS" category="SUPERCAR" price="₱35 MILLION" />
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <CarCard image={skylineR34.src} name="Nissan Skyline GT-T R34" category="SPORT CAR" price="₱3.5 MILLION" />
            </FadeIn>
            <FadeIn direction="up" delay={0.45}>
              <CarCard image={bugatti.src} name="Bugatti Chiron Pur Sport" category="HYPERCAR" price="₱205 MILLION" />
            </FadeIn>
          </div>
        </section>

        <section id="featured" className="scroll-mt-32">
          <FadeIn direction="up">
            <h2 className="text-4xl font-black text-center mb-16 italic uppercase text-black">Featured Cars</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.15}>
              <FeaturedNews 
                image={skylineBlue.src}
                title="Nissan Skyline GT‑R R34 — Legendary JDM Icon Still Commanding Serious Price in 2026"
                desc="The Nissan Skyline GT‑R R34, the cult‑favorite Japanese performance legend, continues to make waves in the automotive world — and its price tag proves it..."
                tag="Trending"
                date="January 12, 2026"
              />
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <FeaturedNews 
                image={mazdarx7.src}
                title="Mazda RX‑7 Veilside "
                desc="Sonoma Raceway couldn’t be slicker if a marble The Mazda RX‑7 Veilside, one of Japan’s most celebrated tuner legends, continues to dominate car shows and enthusiast garages alike. Current Market Value: ₱2,5M - 5M"
                tag="Hot Pick"
                date="January 29, 2026"
              />
            </FadeIn>
            <FadeIn direction="up" delay={0.45}>
              <FeaturedNews 
                image={ferrari.src}
                title="Ferrari SF90 Stradale — The Hybrid Hypercar Phenomenon!"
                desc="The Ferrari SF90 Stradale, Ferrari’s first plug-in hybrid V8 supercar, redefines what it means to combine cutting-edge technology with Current Market Price: ₱85M - 100M"
                tag="Featured"
                date="February 20, 2026"
              />
            </FadeIn>
          </div>
        </section>
        
      </main>

      <section className="bg-[#0d0d0d] overflow-hidden flex flex-col md:grid md:grid-cols-2 text-white">
        <FadeIn direction="right" className="h-full">
          <img src={partnerImage.src} className="h-full w-full object-cover" alt="Partner" />
        </FadeIn>
        <FadeIn direction="left" delay={0.2}>
          <div className="p-20 space-y-8">
            <h2 className="text-5xl font-black italic uppercase">Become a Partner</h2>
            <p className="text-gray-400 leading-loose">Turn your car into a powerful source of income with Asphalt. Whether you want to sell quickly or rent consistently, our platform connects you with serious buyers and reliable renters. We make the process simple, secure, and built for real results.</p>
            <Link href="/register">
              <button className="bg-white text-black px-10 py-4 rounded-xl font-bold uppercase hover:bg-gray-200 transition mt-8">Register</button>
            </Link>
          </div>
        </FadeIn>
      </section>

      <FadeIn direction="up">
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Home;





