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
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        SARS-CoV-2 Variants Classification and Mutations Prediction
      </h1>
      
      <div className="flex gap-8">
        <div className="w-full max-w-4xl border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>
        
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            1. Upload a DNA sequence here
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            2. Only FASTA files are allowed
          </p>
        </div>
      </div>

      <Button 
        onClick={handlePredict} 
        className="w-full"
        disabled={predictMutation.isPending || files.length === 0}
      >
        {predictMutation.isPending ? "Processing..." : "Predict"}
      </Button>
    </div>
  );
}
