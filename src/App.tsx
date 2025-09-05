import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DeploymentTimeline from './components/DeploymentTimeline';
import ResponsibilityDivision from './components/ResponsibilityDivision';
import PackageComparison from './components/PackageComparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white" style={{ lineHeight: '1.7' }}>
      <Header />
      <Hero />
      <HowItWorks />
      <DeploymentTimeline />
      <ResponsibilityDivision />
      <PackageComparison />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;