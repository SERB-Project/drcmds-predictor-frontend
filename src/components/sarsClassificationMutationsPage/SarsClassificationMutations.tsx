"use client";
import React, {useState} from "react";
import { SarsAnalysisPage } from "./SarsAnalysisPage";
import { SarsModelInfoPage } from "./SarsModelInfoPage";

export function SarsClassificationMutations() {
  const [activeTab, setActiveTab] = useState('analysis');
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[rgba(2,31,53,0.95)]">
      <div className="w-full px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgba(2,31,53,1)] dark:text-white mb-4">
            SARS-CoV2 Variant Analysis Portal
          </h1>
          <p className="text-lg md:text-xl text-[rgba(2,31,53,0.8)] dark:text-gray-300">
            Official Platform for Variants Classification and Mutations Prediction
          </p>
          <div className="min-h-screen w-full bg-gray-50 dark:bg-[rgba(2,31,53,0.95)]">
            <div className="max-w-full mx-auto px-4 py-8">
              <div className="bg-[rgba(2,31,53,1)] text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                <h2 className="text-xl font-semibold">Sequence Analysis Tool</h2>
                <div className="flex space-x-4">
                  {activeTab === 'analysis' ? (
                    <button 
                      className="bg-[rgba(255,255,255,0.1)] px-4 py-2 rounded"
                      onClick={() => setActiveTab('analysis')}
                    >
                      Analysis
                    </button>
                  ) : (
                    <button 
                      className="hover:bg-[rgba(255,255,255,0.1)] px-4 py-2 rounded"
                      onClick={() => setActiveTab('analysis')}
                    >
                      Analysis
                    </button>
                  )}
                  {activeTab === 'modelInfo' ? (
                    <button 
                      className="bg-[rgba(255,255,255,0.1)] px-4 py-2 rounded"
                      onClick={() => setActiveTab('modelInfo')}
                    >
                      Model Info
                    </button>
                  ) : (
                    <button 
                      className="hover:bg-[rgba(255,255,255,0.1)] px-4 py-2 rounded"
                      onClick={() => setActiveTab('modelInfo')}
                    >
                      Model Info
                    </button>
                  )}
                </div>
              </div>
              {activeTab === 'analysis' ? <SarsAnalysisPage /> : <SarsModelInfoPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
)};
