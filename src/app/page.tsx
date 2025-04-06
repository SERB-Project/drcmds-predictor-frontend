import React from 'react';
import HeroSection from '@/components/landingPage/HeroSection';
import Card from '@/components/landingPage/Card';
import CollaboratorsAndContributors from '@/components/landingPage/CollaboratorsAndContributors';
import Navbar from '@/components/Navbar';
import { NavBanner } from '@/components/NavBanner';
import Footer from '@/components/landingPage/Footer';

const Home = () => {
  return (
    <div>
      <NavBanner />
      <HeroSection
        title="DrCMDs Predictor"
        tagline="A Novel System for Disease Prediction, Mutated Patterns Discovery, and Drug Candidates Generation to Combat Viral Diseases in the Indian Population."
      />
      <Navbar />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto p-4 text-center">
          <h2 className="text-5xl font-bold text-[#123265] mb-8">Our Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center max-w-7xl mx-auto">
            <Card
              title="Classification and Mutation Pattern Prediction in SARS-CoV2 using Deep Neural Networks"
              description="This classifies the SARS-CoV2 variants and predicts the mutation patterns."
              imageUrl="/Coronavirus._SARS-CoV-2.png"
              linkUrl="http://localhost:3000/sarsClassificationMutations"
            />
            <Card
              title="MECP2 SNV Pathogenicity Classifier"
              description="This classifies the MECP2 SNV pathogenicity."
              imageUrl="/T7_RNA_polymerase.jpg"
              linkUrl="http://localhost:3000/pathogenicityClassification"
            />
            <Card
              title="Splice Acceptor and Donor Site Prediction"
              description="This predicts the splice acceptor and donor sites."
              imageUrl="/RNA_splicing_diagram_en.svg.png"
              linkUrl="https://example.com/model3-page"
            />
            <Card
              title="Model 4: Ebola Virus"
              description="Model for predicting Ebola outbreaks."
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
              linkUrl="https://example.com/model4-page"
            />
            <Card
              title="Model 5: Mutation Pattern Prediction in SARS-CoV2 using Deep Neural Networks"
              description="Classification of SARS-CoV2 variants and mutation prediction."
              imageUrl="/Coronavirus._SARS-CoV-2.png"
              linkUrl="http://localhost:3000/sarsClassificationMutations"
            />
            <Card
              title="Model 6: Poliovirus"
              description="Model for predicting poliovirus mutations."
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
              linkUrl="https://example.com/model6-page"
            />
          </div>
        </div>
      </section>
      <section id="contributors-section">
        <CollaboratorsAndContributors />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
