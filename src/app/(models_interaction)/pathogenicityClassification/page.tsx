import { PathogenicClassification } from "@/components/pathogenicityClassificationPage/PathogenicClasiification";
import Navbar from "@/components/Navbar";

export default function SarsClassificationMutationsPage() {
    return (
      <>
        <Navbar />
        <div className="flex flex-col w-full items-center justify-center">
          <PathogenicClassification />
        </div>
      </>
    );
  }