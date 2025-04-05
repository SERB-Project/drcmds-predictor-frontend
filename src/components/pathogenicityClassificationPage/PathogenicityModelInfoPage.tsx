"use client";
import React from "react";

export function PathogenicityModelInfoPage() {
  return (
    <div className="max-w-full mx-auto bg-white dark:bg-[rgba(2,31,53,0.8)] shadow-xl rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="p-8 space-y-8">
        {/* Top Section - Model Architecture and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <img 
                  src="/model_architecture.png" 
                  alt="Model Architecture"
                  className="w-full object-contain max-h-[400px] rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 mt-4 text-center">
                Figure 1: Deep Learning Model Architecture for MECP2 SNV Pathogenicity Classification
              </p>
            </div>
          </div>

          {/* Model Classification Section */}
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[rgba(2,31,53,1)] dark:text-white">01</span>
                </div>
                <h2 className="text-xl font-semibold text-[rgba(2,31,53,1)] dark:text-white">
                  Model Classification
                </h2>
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300 leading-relaxed">
                  The deep learning model for MECP2 SNV pathogenicity classification is based on a Convolutional Neural Network (CNN) optimized for genomic sequence data. The model processes one-hot encoded nucleotide sequences as input and extracts hierarchical features using three 1D convolutional layers with ReLU activation, followed by max-pooling layers to reduce dimensionality. A dropout mechanism is incorporated after each convolutional block to mitigate overfitting. The extracted feature maps are flattened and passed through two fully connected layers (FC layers) with 72 and 32 neurons, respectively, leading to a final softmax output layer for binary classification of SNV pathogenicity (Benign or Pathogenic). The model was trained using a cross-entropy loss function and optimized with Adam, achieving a high test accuracy of 98.10%, demonstrating its effectiveness in pathogenicity classification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] mt-4 p-4">
        <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 text-center">
          For technical inquiries, please contact us
        </p>
      </div>
    </div>
  );
}