import React from 'react';
import HeroSection from '@/components/landingPage/HeroSection';
import Card from '@/components/landingPage/Card';
import CollaboratorsAndContributors from '@/components/landingPage/CollaboratorsAndContributors';
import Navbar from '@/components/landingPage/Navbar';
import Footer from '@/components/landingPage/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="DrCMDs Predictor"
        tagline="A Novel System for Disease Prediction, Mutated Patterns Discovery, and Drug Candidates Generation to Combat Viral Diseases in the Indian Population."
      />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto p-4 text-center">
          <h2 className="text-5xl font-bold text-[#123265] mb-8">Our Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center max-w-7xl mx-auto">
            <Card
              title="Model 1: Influenza Virus"
              description="This model predicts influenza virus mutations."
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
              linkUrl="https://example.com/model1-page"
            />
            <Card
              title="Model 2: Human Rotavirus"
              description="This model focuses on predicting rotavirus infections."
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
              linkUrl="https://example.com/model2-page"
            />
            <Card
              title="Model 3: Coronavirus"
              description="Predicting coronavirus mutations and spread."
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
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
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
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
      <CollaboratorsAndContributors />
      <Footer />
    </div>
  );
};

export default Home;
