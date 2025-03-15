"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/api/axios";

export function SarsAnalysisPage() {
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
        <div className="max-w-full mx-auto bg-white dark:bg-[rgba(2,31,53,0.8)] shadow-xl rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
          
          <div className="p-6">
            <div className="flex gap-8 flex-col lg:flex-row">
              <div className="flex-1">
                <div className="border-2 border-dashed border-[rgba(2,31,53,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-lg bg-gray-50 dark:bg-[rgba(2,31,53,0.3)] transition-all hover:border-[rgba(2,31,53,0.4)]">
                  <FileUpload onChange={handleFileUpload} />
                </div>
              </div>
              
              <div className="lg:w-96 flex flex-col justify-between">
                <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
                  <h3 className="text-lg font-semibold text-[rgba(2,31,53,1)] dark:text-white mb-4">
                    Guidelines
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                        <span className="text-sm font-medium text-[rgba(2,31,53,1)] dark:text-white">1</span>
                      </div>
                      <p className="text-[rgba(2,31,53,0.8)] dark:text-gray-300">
                        Upload a DNA sequence file
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                        <span className="text-sm font-medium text-[rgba(2,31,53,1)] dark:text-white">2</span>
                      </div>
                      <p className="text-[rgba(2,31,53,0.8)] dark:text-gray-300 text-left">
                        Note: model is trained on Sequences of length 30255
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePredict} 
                  className="mt-4 bg-[rgba(2,31,53,1)] hover:bg-[rgba(2,31,53,0.9)] text-white rounded-md transition-all disabled:bg-[rgba(2,31,53,0.6)]"
                  disabled={predictMutation.isPending || files.length === 0}
                  size="sm"
                >
                  {predictMutation.isPending ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Submit for Analysis"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
)};
