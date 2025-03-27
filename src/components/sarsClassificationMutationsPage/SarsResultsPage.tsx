import { useSarsStore } from "@/lib/store/useSarsStore";
import { Button } from "@/components/ui/button";

export function SarsResultsPage() {
  const { results, setActiveTab } = useSarsStore();

  if (!results) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white dark:bg-[rgba(2,31,53,0.8)] rounded-lg border-2 border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-[rgba(2,31,53,1)] dark:text-white mb-4">
            No Analysis Results Available
          </h2>
          <div className="bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg mb-6">
            <p className="text-[rgba(2,31,53,0.8)] dark:text-gray-300 mb-4">
              To view SARS-CoV-2 variant analysis results, please complete the following steps:
            </p>
            <ol className="text-left space-y-3 text-[rgba(2,31,53,0.7)] dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[rgba(2,31,53,1)] dark:text-white">1.</span>
                Navigate to the Analysis section
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[rgba(2,31,53,1)] dark:text-white">2.</span>
                Upload a FASTA file or input your sequence
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[rgba(2,31,53,1)] dark:text-white">3.</span>
                Submit for analysis
              </li>
            </ol>
          </div>
          <Button
            onClick={() => setActiveTab("analysis")}
            className="bg-[rgba(2,31,53,1)] hover:bg-[rgba(2,31,53,0.9)] text-white px-6 py-2 rounded"
          >
            Go to Analysis Section
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white dark:bg-[rgba(2,31,53,0.8)] rounded-lg border-2 border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[rgba(2,31,53,1)] dark:text-white mb-2">
          SARS-CoV-2 Analysis Results
        </h2>
        <p className="text-[rgba(2,31,53,0.7)] dark:text-gray-400">
          Analysis completed successfully. Please review the results below.
        </p>
      </div>
      <div className="bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(2,31,53,0.3)] p-6 rounded-lg">
        <pre className="whitespace-pre-wrap break-words text-[rgba(2,31,53,0.8)] dark:text-gray-300 font-mono">
          {JSON.stringify(results, null, 2)}
        </pre>
      </div>
    </div>
  );
}
