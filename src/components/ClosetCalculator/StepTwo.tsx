import {Fragment, useContext, useEffect, useState} from "react";
import Image from "next/image";
import ClosetContext from "@/CalculatorContext/CalculatorContext";

export default function StepTwo() {

    const { doorStyle, setDoorStyle} = useContext(ClosetContext);


    return (
        <Fragment>
            <p>Choose door closing style</p>
            <div className="container mt-10">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group flex justify-content-center align-items-center">
                            <Image src="/static/images/icons/closet/coupe.png" alt="Coupe" width="75" height="75"/>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId3" name="coupe" value="coupe"
                                                   defaultChecked
                                                   checked={doorStyle === "coupe"}
                                                   onChange={(event)=>setDoorStyle(event.target.value)}/>
                                            <label htmlFor="matId3">Coupe</label>
                                        </span>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group flex justify-content-center align-items-center">
                            <Image src="/static/images/icons/closet/simple.png" alt="Simple" width="75" height="75"/>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId4" name="simple" value="simple"
                                                   checked={doorStyle !== "coupe"}
                                                   onChange={(event)=>setDoorStyle(event.target.value)}/>
                                            <label htmlFor="matId4">Simple</label>
                                        </span>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}