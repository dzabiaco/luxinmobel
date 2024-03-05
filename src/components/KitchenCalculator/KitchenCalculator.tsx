import React, {Fragment, useState} from "react";


import {ErrorMessage, Field, Form, Formik} from 'formik';
import Image from "next/image";
import * as Yup from 'yup';
import Alert from "@/components/Alert/Alert";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import classes from "@/components/ClosetCalculator/Step.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function KitchenCalculator(){
    const [step, setStep] = useState(1);
    const [kitchenType, setKitchenType] = useState("straight");
    /*STRAIGHT SIZES*/
    const [straightWidth,setStraightWidth] = useState(5);
    const [straightHeight,setStraightHeight] = useState(5);

    /*ANGLE SIZES*/
    const [angleWidthA, setAngleWidthA] = useState(5);
    const [angleHeightA, setAngleHeightA] = useState(5);

    const [angleWidthB, setAngleWidthB] = useState(5);
    const [angleHeightB, setAngleHeightB] = useState(5);

    /*P FORM*/
    const [pformWidthA, setPformWidthA] = useState(5);
    const [pformHeightA, setPformHeightA] = useState(5);

    const [pformWidthB, setPformWidthB] = useState(5);
    const [pformHeightB, setPformHeightB] = useState(5);

    const [pformWidthC, setPformWidthC] = useState(5);
    const [pformHeightC, setPformHeightC] = useState(5);


    /*ISLAND*/
    const [islandWallWidthA, setIslandWallWidthA] = useState(5);
    const [islandWallHeightA, setIslandWallHeightA] = useState(5);

    const [islandWallWidthB, setIslandWallWidthB] = useState(5);
    const [islandWallHeightB, setIslandWallHeightB] = useState(5);

    const [islandWidthA, setIslandWidthA] = useState(5);
    const [islandHeightA, setIslandHeightA] = useState(5);

    /*Floors*/
    const [floor, setFloor] = useState("one");

    /*Kitchen Style*/
    const [style, setStyle] = useState("modern");

    /*Contacts*/
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const [showAlert, setShowAlert] = useState(false);
    const [type, setType] = useState("");
    const [text, setText] = useState("");


    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    async function handleKitchen(event){
        event.preventDefault();
        const straight = {};
        const angle = {};
        const pForm = {};
        const island = {};
        if(kitchenType === "straight"){
            straight["type"] = "straight";
            straight["width"] = straightWidth;
            straight["height"] = straightHeight;
            straight["floor"] = floor;
            straight["style"] = style;
            straight["email"] = email;
            straight["phone"] = phone;

            try {

                await fetch(`/api/send-kitchen-email`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({kitchen: straight})
                });

                setType("success");
                setText("We will contact you. Please verify your email");
                setShowAlert(true);
                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
            catch (e:any){
                setType("danger");
                setText("Something went wrong. Please contact us");
                setShowAlert(true);

                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
        }
        if(kitchenType === "angle"){
            angle["type"] = "angle";
            angle["widthA"] = angleWidthA;
            angle["heightA"] = angleHeightA;
            angle["widthB"] = angleWidthB;
            angle["heightB"] = angleHeightB;
            angle["floor"] = floor;
            angle["style"] = style;
            angle["email"] = email;
            angle["phone"] = phone;

            try {

                await fetch(`/api/send-kitchen-email`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({kitchen: angle})
                });
                setType("success");
                setText("We will contact you. Please verify your email");
                setShowAlert(true);
                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
            catch (e:any){
                setType("danger");
                setText("Please set sizes");
                setShowAlert(true);

                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
        }

        if(kitchenType === "pform"){
            pForm["type"] = "pform";
            pForm["widthA"] = pformWidthA;
            pForm["heightA"] = pformHeightA;
            pForm["widthB"] = pformWidthB;
            pForm["heightB"] = pformHeightB;

            pForm["widthC"] = pformWidthC;
            pForm["heightC"] = pformHeightC;

            pForm["floor"] = floor;
            pForm["style"] = style;
            pForm["email"] = email;
            pForm["phone"] = phone;

            try {

                await fetch(`/api/send-kitchen-email`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({kitchen: pForm})
                });
                setType("success");
                setText("We will contact you. Please verify your email");
                setShowAlert(true);
                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
            catch (e:any){
                setType("danger");
                setText("Please set sizes");
                setShowAlert(true);

                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
        }

        if(kitchenType === "island"){
            island["type"] = "island";
            island["widthA"] = islandWallWidthA;
            island["heightA"] = islandWallHeightA;

            island["widthB"] = islandWallWidthB;
            island["heightB"] = islandWallHeightB;

            island["widthIsland"] = islandWidthA;
            island["heightIsland"] = islandHeightA;

            island["floor"] = floor;
            island["style"] = style;
            island["email"] = email;
            island["phone"] = phone;

            try {
                await fetch(`/api/send-kitchen-email`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({kitchen: island})
                });

                setType("success");
                setText("We will contact you. Please verify your email");
                setShowAlert(true);
                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
            catch (e:any){
                setType("danger");
                setText("Please set sizes");
                setShowAlert(true);

                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
            }
        }

    }

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
                                        step === 5 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                                    onClick={handleNext}
                                    disabled={step === 5}
                                >
                                    Next
                                </button>
                            </div>
                            <div className="border-t border-gray-300 pt-4">
                                {step === 1 && <div>
                                    <h3>Choose type</h3>
                                    <div className="container mt-10">
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="form-group flex justify-content-center align-items-center flex-column">
                                                    <Image src="/static/images/icons/kitchen/straight.svg" alt="straight_kitchen" width="75"
                                                           height="75"/>
                                                    <div className="flex justify-content-center align-items-center align-content-center mt-3">
            <span className="checkbox" style={{marginRight: 10}}>
                <input type="radio" id="matId1" name="kitchenType" value="straight"
                       checked={kitchenType === "straight"}
                       onChange={(event) => setKitchenType(event.target.value as any)}
                />
                <label htmlFor="matId1">Straight</label>
            </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="form-group flex justify-content-center align-items-center flex-column">
                                                    <Image src="/static/images/icons/kitchen/angle.svg" alt="Angle Kitchen" width="75"
                                                           height="75"/>
                                                    <div className="flex justify-content-center align-items-center align-content-center mt-3">
            <span className="checkbox" style={{marginRight: 10}}>
                <input type="radio" id="matId2" name="kitchenType" value="angle"
                       checked={kitchenType === "angle"}
                       onChange={(event) => setKitchenType(event.target.value as any)}
                />
                <label htmlFor="matId2">Angle</label>
            </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="form-group flex justify-content-center align-items-center flex-column">
                                                    <Image src="/static/images/icons/kitchen/p-form.svg" alt="P-form" width="75" height="75"/>
                                                    <div className="flex justify-content-center align-items-center align-content-center mt-3">
                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId3" name="kitchenType" value="pform"
                                                   onChange={(event) => setKitchenType(event.target.value as any)}
                                            />
                                            <label htmlFor="matId3">P-form</label>
                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="form-group flex justify-content-center align-items-center flex-column">
                                                    <Image src="/static/images/icons/kitchen/island.svg" alt="Island kitchen" width="75"
                                                           height="75"/>
                                                    <div className="flex justify-content-center align-items-center align-content-center mt-3">
                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId4" name="kitchenType" value="island"
                                                   onChange={(event) => setKitchenType(event.target.value as any)}
                                            />
                                            <label htmlFor="matId4">Island</label>
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                                {step === 2 && kitchenType ==="straight" && <div className="container mt-10">
                                    <h3>Choose sizes</h3>
                                    <div className="contact-form clearfix">
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Width</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={straightWidth}
                                                           onChange={(event) => setStraightWidth(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4>Height</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={straightHeight}
                                                           onChange={(event) => setStraightHeight(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>}

                                {step === 2 && kitchenType ==="angle" && <div className="container mt-10">
                                    <div className="contact-form clearfix">
                                        <div className="row">
                                            <h3>Choose sizes</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Ширина стены А</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={angleWidthA}
                                                           onChange={(event) => setAngleWidthA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4>Высота стены Б</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={angleHeightA}
                                                           onChange={(event) => setAngleHeightA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Ширина стены B</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={angleWidthB}
                                                           onChange={(event) => setAngleWidthB(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4>Высота стены B</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={angleHeightB}
                                                           onChange={(event) => setAngleHeightB(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>}

                                {step === 2 && kitchenType ==="pform" && <div className="container mt-10">
                                    <div className="contact-form clearfix">
                                        <div className="row">
                                            <h3>Choose sizes</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Ширина стены А</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={pformWidthA}
                                                           onChange={(event) => setPformWidthA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4>Высота стены А</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={pformHeightA}
                                                           onChange={(event) => setPformHeightA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Ширина стены B</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={pformWidthB}
                                                           onChange={(event) => setPformWidthB(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4>Высота стены B</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={pformHeightB}
                                                           onChange={(event) => setPformHeightB(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Ширина стены C</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={pformWidthC}
                                                           onChange={(event) => setPformWidthC(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4>Высота стены C</h4>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={pformHeightC}
                                                           onChange={(event) => setPformHeightC(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>}

                                {step === 2 && kitchenType ==="island" && <div className="container mt-10">
                                    <div className="contact-form clearfix">
                                        <div className="row">
                                            <h3>Ширина стены А</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={islandWallWidthA}
                                                           onChange={(event) => setIslandWallWidthA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h3>Высота стены А</h3>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={islandWallHeightA}
                                                           onChange={(event) => setIslandWallHeightA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col-6">
                                                <h3>Ширина стены Б</h3>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={islandWallWidthB}
                                                           onChange={(event) => setIslandWallWidthB(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h3>Высота стены Б</h3>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={islandWallHeightB}
                                                           onChange={(event) => setIslandWallHeightB(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <h3>Ширина острова А</h3>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Width" name="width" required value={islandWidthA}
                                                           onChange={(event) => setIslandWidthA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h3>Высота острова Б</h3>
                                                <div className="form-group flex justify-content-center align-items-center">
                                                    <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                                    <input type="number" step="0.10" className="form-control"
                                                           placeholder="Height" required value={islandHeightA}
                                                           onChange={(event) => setIslandHeightA(event.target.value as any)}/>
                                                </div>
                                            </div>

                                        </div>

                                        {/*<div className="row">*/}
                                        {/*    <h1>Ширина Island B</h1>*/}
                                        {/*</div>*/}
                                        {/*<div className="row">*/}
                                        {/*    <div className="col-6">*/}
                                        {/*        <div className="form-group flex justify-content-center align-items-center">*/}
                                        {/*            <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>*/}
                                        {/*            <input type="number" step="0.10" className="form-control"*/}
                                        {/*                   placeholder="Width" name="width" required value={islandHeightA}*/}
                                        {/*                   onChange={(event) => setIslandHeightA(event.target.value as any)}/>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}

                                        {/*    <div className="col-6">*/}
                                        {/*        <div className="form-group flex justify-content-center align-items-center">*/}
                                        {/*            <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>*/}
                                        {/*            <input type="number" step="0.10" className="form-control"*/}
                                        {/*                   placeholder="Height" required*/}
                                        {/*                   onChange={(event) => setAngleHeightB(event.target.value as any)}/>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}

                                        {/*</div>*/}
                                    </div>
                                </div>}

                                {step === 3 && <div className="container mt-10">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-group flex justify-content-center align-items-center">
                                                <Image src="/static/images/icons/closet/coupe.png" alt="Coupe" width="75" height="75"/>
                                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId3" name="floor" value="one"
                                                   defaultChecked
                                                   checked={floor === "one"}
                                                   onChange={(event)=>setFloor(event.target.value as any)}/>
                                            <label htmlFor="matId3">One</label>
                                        </span>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-group flex justify-content-center align-items-center">
                                                <Image src="/static/images/icons/closet/simple.png" alt="Simple" width="75" height="75"/>
                                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId4" name="floor" value="two"
                                                   checked={floor === "two"}
                                                   onChange={(event)=>setFloor(event.target.value as any)}/>
                                            <label htmlFor="matId4">Two</label>
                                        </span>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-group flex justify-content-center align-items-center">
                                                <Image src="/static/images/icons/closet/simple.png" alt="Simple" width="75" height="75"/>
                                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId5" name="floor" value="three"
                                                   checked={floor === "three"}
                                                   onChange={(event)=>setFloor(event.target.value as any)}/>
                                            <label htmlFor="matId5">Three</label>
                                        </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>}

                                {step === 4 && <div className="container mt-10">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group flex justify-content-center align-items-center">
                                                <Image src="/static/images/icons/closet/coupe.png" alt="Coupe" width="75" height="75"/>
                                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId3" name="floor" value="modern"
                                                   defaultChecked
                                                   checked={style === "modern"}
                                                   onChange={(event)=>setStyle(event.target.value as any)}/>
                                            <label htmlFor="matId3">Modern</label>
                                        </span>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-group flex justify-content-center align-items-center">
                                                <Image src="/static/images/icons/closet/simple.png" alt="Simple" width="75" height="75"/>
                                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId4" name="floor" value="classic"
                                                   checked={style === "classic"}
                                                   onChange={(event)=>setStyle(event.target.value as any)}/>
                                            <label htmlFor="matId4">Classic</label>
                                        </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>}

                                {step === 5 && <Fragment>
                                    <p>Fill Contact information</p>
                                    <div className="container mt-10">
                                        <div className="contact-form clearfix">
                                            <Alert type={type} text={text}/>
                                            <form onSubmit={handleKitchen}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group flex justify-content-center align-items-center">
                                                            <FontAwesomeIcon icon={faEnvelope} className={classes.icon}/>
                                                            <input type="email" step="0.10" className="form-control"
                                                                   placeholder="Email" required
                                                                   onBlur={(event)=> setEmail(event.target.value as any)}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="form-group flex justify-content-center align-items-center">
                                                            <FontAwesomeIcon icon={faPhone} className={classes.icon}/>
                                                            <input type="phone" step="0.10" className="form-control"
                                                                   placeholder="Phone" required
                                                                   onBlur={(event)=> setPhone(event.target.value as any)}/>
                                                        </div>
                                                    </div>

                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-12 flex mt-4 justify-content-center">
                                                                <button
                                                                    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600`}
                                                                >
                                                                    Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Fragment>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}