import React, {useContext, useEffect, useState} from "react";
import StepOne from "@/components/ClosetCalculator/StepOne";
import StepTwo from "@/components/ClosetCalculator/StepTwo";
import StepThree from "@/components/ClosetCalculator/StepThree";
import StepFour from "@/components/ClosetCalculator/StepFour";
import ClosetContext, {ClosetContextProvider} from "@/CalculatorContext/CalculatorContext";


export default function ClosetCalculator() {
    const [step, setStep] = useState(1);
    const {width, height, depth} = useContext(ClosetContext);

    // const closetContext = useContext(ClosetContext);

    useEffect(() => {

        const closet = {
            width: 0,
            height: 0,
            depth: 0,
            doorStyle: '',
            drawers: false,
            address: '',
            phone: ''
        };

        const localStorageItem = localStorage.getItem('closetCalculator');

        if (!localStorageItem) {
            localStorage.setItem('closetCalculator', JSON.stringify(closet));
        }


    }, []);


    const handleNext = () => {
        console.log("HANDLE", width, height, depth);
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };


    return (
        <>
            <ClosetContextProvider>
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
                                                step === 4 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                                            }`}
                                            onClick={handleNext}
                                            disabled={step === 4}
                                        >
                                            Next
                                        </button>
                                    </div>
                                    <div className="border-t border-gray-300 pt-4">
                                        {step === 1 && <StepOne/>}

                                        {step === 2 && <StepTwo/>}

                                        {step === 3 && <StepThree/>}

                                        {step === 4 && <StepFour/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ClosetContextProvider>
        </>
    );
}