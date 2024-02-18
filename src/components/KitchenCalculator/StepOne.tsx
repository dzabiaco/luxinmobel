import {Fragment} from "react";
import Image from "next/image";
import classes from "./Step.module.css";

export default function StepOne(){
    return (
        <Fragment>
            <p>Choose Type</p>
            <div className="container mt-10">
                <div className="row">
                    <div className="col-3">
                        <div className="form-group flex justify-content-center align-items-center flex-column">
                            <Image src="/static/images/icons/kitchen/straight.svg" width="75" height="75"/>
                            <div className="flex justify-content-center align-items-center align-content-center mt-3">
                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId1" name="option" value="straight"/>
                                            <label htmlFor="matId1">Straight</label>
                                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group flex justify-content-center align-items-center flex-column">
                            <Image src="/static/images/icons/kitchen/angle.svg" width="75" height="75"/>
                            <div className="flex justify-content-center align-items-center align-content-center mt-3">
                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId2" name="option" value="angle"/>
                                            <label htmlFor="matId2">Angle</label>
                                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group flex justify-content-center align-items-center flex-column">
                            <Image src="/static/images/icons/kitchen/p-form.svg" width="75" height="75"/>
                            <div className="flex justify-content-center align-items-center align-content-center mt-3">
                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId3" name="option" value="pform"/>
                                            <label htmlFor="matId3">P-form</label>
                                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group flex justify-content-center align-items-center flex-column">
                            <Image src="/static/images/icons/kitchen/island.svg" width="75" height="75"/>
                            <div className="flex justify-content-center align-items-center align-content-center mt-3">
                                <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="radio" id="matId4" name="option" value="island"/>
                                            <label htmlFor="matId4">Angle</label>
                                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}