import {Fragment, useContext, useState} from "react";
import Image from "next/image";
import KitchenContext from "@/CalculatorContext/KitchenContext";

export default function StepOne() {
    const {kitchenType, setKitchenType} = useContext(KitchenContext);

    const [type, setType] = useState();

    function showValue(e) {
        console.log(e.target.value);
        console.log(kitchenType)
    }


    return (
        <Fragment>
            <p>Choose Type</p>
            <div className="container mt-10">
                <div className="row">
                    <div className="col-3">
                        <div className="form-group flex justify-content-center align-items-center flex-column">
                            <Image src="/static/images/icons/kitchen/straight.svg" alt="straight_kitchen" width="75"
                                   height="75"/>
                            <div className="flex justify-content-center align-items-center align-content-center mt-3">
            <span className="checkbox" style={{marginRight: 10}}>
                <input type="radio" id="matId1" name="kitchenType" value="straight"
                       defaultChecked
                       onChange={(event) => setKitchenType(event.target.value)}
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
                       onChange={(event) => setKitchenType(event.target.value)}
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
                                            <input type="radio" id="matId3" name="kitchenType" value="pform"/>
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
                                            <input type="radio" id="matId4" name="kitchenType" value="island"/>
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