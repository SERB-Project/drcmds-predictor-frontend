"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/api/axios";

export function SarsClassificationMutations() {
  const [files, setFiles] = useState<File[]>([]);

  const predictMutation = useMutation({
    mutationFn: async (files: File[]) => {
      const formData = new FormData();
      files.forEach((file) => formData.append("file", file));
      const response = await axiosInstance.post("/api/predictSarsClassificationMutations", formData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Prediction completed successfully!");
      // Handle the prediction results here
      console.log(data);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to process prediction");
    },
  });

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  const handlePredict = () => {
    if (files.length === 0) {
      toast.error("Please upload a file first");
      return;
    }
    predictMutation.mutate(files);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="w-full px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-4">
            SARS-CoV-2 Analysis
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200">
            Variants Classification and Mutations Prediction
          </p>
        </div>
        
        <div className="max-w-[95%] mx-auto bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900">
          <div className="flex gap-8 flex-col lg:flex-row">
            <div className="flex-1">
              <div className="border-2 border-dashed border-indigo-300 dark:border-indigo-700 rounded-xl bg-white/50 dark:bg-gray-900/50 transition-all hover:border-indigo-400 shadow-lg">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>
            
            <div className="lg:w-96 bg-indigo-100/50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-inner">
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-300 mb-4">
                Instructions
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">1</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    Upload a DNA sequence here
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">2</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    Only FASTA files are allowed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={handlePredict} 
            className="w-full mt-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white py-6 rounded-xl transition-all transform hover:scale-[1.02] hover:shadow-xl shadow-lg"
            disabled={predictMutation.isPending || files.length === 0}
          >
            {predictMutation.isPending ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Processing...
              </div>
            ) : (
              "Predict"
            )}
          </Button>
        </div>
      </div>
    </div>
)};
