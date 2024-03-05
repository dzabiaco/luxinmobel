import {Fragment, useContext} from "react";
import Image from "next/image";
import classes from "./Step.module.css";
import KitchenContext from "@/CalculatorContext/KitchenContext";

export default function StepTwoStraight(){
    const {kitchenType, setKitchenType} = useContext(KitchenContext);


    return (
        <Fragment>
            <p>Choose Type</p>
            <div className="container mt-10">
                <div className="row">
                    <h1>Straight</h1>
                </div>
            </div>
        </Fragment>
    );
}