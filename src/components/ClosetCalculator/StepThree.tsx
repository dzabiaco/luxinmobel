import {Fragment, useContext, useEffect} from "react";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import classes from "@/components/ClosetCalculator/Step.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ClosetContext from "@/CalculatorContext/CalculatorContext";

export default function StepThree(){
    const { drawers,setDrawers} = useContext(ClosetContext);

    return (
        <Fragment>
            <p>Choose Availability of drawers</p>
            <div className="container mt-10">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group flex justify-content-center align-items-center">
                            <Image src="/static/images/icons/closet/closet-drawers.svg" alt="Closet with drawers" width="75" height="75"/>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId3" name="coupe" value="need"
                                                   checked={drawers === "need"}
                                                   onChange={(event)=>setDrawers(event.target.value)}/>
                                            <label htmlFor="matId3">Need</label>
                                        </span>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group flex justify-content-center align-items-center">
                            <Image src="/static/images/icons/closet/closet-wo-drawers.svg" alt="Closet without drawers" width="75" height="75"/>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId4" name="simple" value="noNeed"
                                                   checked={drawers !== "need"}
                                                   onChange={(event)=>setDrawers(event.target.value)}/>
                                            <label htmlFor="matId4">No Need</label>
                                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}