import {useState} from "react";
import StepOne from "@/components/KitchenCalculator/StepOne";

export default function KitchenCalculator(){
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="max-full mx-auto mt-10">
                        <div className="w-full border border-gray-300 rounded p-4">
                            <div className="flex justify-between items-center mb-4">
                                <button
                                    className={`px-4 py-2 rounded ${
                                        step === 1 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                                    onClick={handlePrev}
                                    disabled={step === 1}
                                >
                                    Previous
                                </button>
                                <h2 className="text-lg font-semibold">Step {step}</h2>
                                <button
                                    className={`px-4 py-2 rounded ${
                                        step === 3 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                                    onClick={handleNext}
                                    disabled={step === 3}
                                >
                                    Next
                                </button>
                            </div>
                            <div className="border-t border-gray-300 pt-4">
                                {step === 1 && <StepOne/>}

                                {step === 2 && <p>Step 2 Kitchen.</p>}

                                {step === 3 && <p>Step 3 Kitchen.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}