import React, {Fragment, useContext, useState} from "react";
import classes from "./Step.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import ClosetContext from "@/CalculatorContext/CalculatorContext";
import Alert from "@/components/Alert/Alert";


export default function StepFour(){

    const { width, height, depth, doorStyle, drawers,address,phone, setAddress, setPhone } = useContext(ClosetContext);

    const [showAlert, setShowAlert] = useState(false);
    const [type, setType] = useState("");
    const [text, setText] = useState("");

    async function handleCloset(event:any){
        event.preventDefault();

        if(+width === 0 || +height === 0 || +depth === 0 ){
            setType("danger");
            setText("Please set sizes");
            setShowAlert(true);
            return;
        }

        const closetData = {
            address,
            phone,
            width,
            height,
            depth,
            doorStyle: doorStyle || "simple",
            drawers: drawers === false ? "no need" : drawers
        }
        setType("success");
        setText("We will contact you. Please verify your email");
        setShowAlert(true);

        console.log(closetData);
        try {
            await fetch(`/api/send-closet-email`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ closetData })
            });
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <Fragment>
            <p>Fill Contact information</p>
            <div className="container mt-10">
                <div className="contact-form clearfix">
                <Alert type={type} text={text}/>
                <form onSubmit={handleCloset}>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className={classes.icon}/>
                            <input type="email" step="0.10" className="form-control"
                                   placeholder="Email" required
                                   onBlur={(event)=> setAddress(event.target.value)}/>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faPhone} className={classes.icon}/>
                            <input type="phone" step="0.10" className="form-control"
                                   placeholder="Phone" required
                                   onBlur={(event)=> setPhone(event.target.value)}/>
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
        </Fragment>
    );
}