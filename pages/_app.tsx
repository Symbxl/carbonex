import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Services from '../components/Services';
import Companies from '../components/Companies'
import FeaturesListicle from '../components/FeaturesListicle';
import Gallery from '../components/Gallery';
import ClickGallery from '../components/ClickGallery';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const getLayout = (Component as any).getLayout
    ? (Component as any).getLayout
    : (page: any) => page;
  (page: any) => page;

  return (
    <SessionProvider session={session}>
      {getLayout(
        <>
          <Layout>
            <Header />
            <Hero />
            <Services />
            <ClickGallery />

            <FeaturesListicle />
            <CTA />
            <Gallery />
            <Companies />
            <Section title="Our Mission" subtitle="Contractors you can trust" description="Working daily to be the contractor of choice in the Integrated Construction and Maintenance industry. The passion of the complete TEAM at Carbonex enables us to deliver innovative, safe, environmentally sound and value-add solutions that consistently exceed our clients expectations." link="/OurMission" />
            <Section title="Our Legacy" subtitle="EST 2014" description="Since 2014, Carbonex has been a privately held company specializing in fabrication, construction, and maintenance projects. Meeting client needs with our one-stop shop adaptability, we have created the right value-based, fully integrated solutions to successfully deliver projects on time and on budget. Our safety-driven culture has provided our clients with a cost-effective, win-win, collaborative delivery model." link="/OurLegacy" />
            <FAQ />
            <Footer />
          </Layout>
        </>
      )}
    </SessionProvider>
  );
}
