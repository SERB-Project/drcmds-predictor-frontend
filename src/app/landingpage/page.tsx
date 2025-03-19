import React from 'react';
import HeroSection from '@/components/landingPage/HeroSection';
import Card from '@/components/landingPage/Card';
import CollaboratorsAndContributors from '@/components/landingPage/CollaboratorsAndContributors';
import Navbar from '@/components/landingPage/Navbar';
import Footer from '@/components/landingPage/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection
        title="DrCMDs Predictor"
        tagline="A Novel System for Disease Prediction, Mutated Patterns Discovery, and Drug Candidates Generation to Combat Viral Diseases in the Indian Population."
      />
       <section className="py-12 bg-gray-100">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-5xl font-bold text-[#123265] mb-8">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center max-w-7xl mx-auto">
          <Card title="Model 1" description="This is a brief description of Model 1." />
          <Card title="Model 2" description="This is a brief description of Model 2." />
          <Card title="Model 3" description="This is a brief description of Model 3." />
          <Card title="Model 4" description="This is a brief description of Model 4." />
          <Card title="Model 5" description="This is a brief description of Model 5." />
          <Card title="Model 6" description="This is a brief description of Model 6." />
        </div>
      </div>
    </section>
      <CollaboratorsAndContributors />
      <Footer/>
    </div>
  );
};

export default Home;
