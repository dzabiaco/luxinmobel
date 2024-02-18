import {Fragment, useContext, useEffect} from "react";
import Image from "next/image";
import ClosetContext from "@/CalculatorContext/CalculatorContext";

export default function StepOne() {
    const {width, height, depth, setWidth, setHeight, setDepth} = useContext(ClosetContext);

    // useEffect(()=> {
    //     const localstorageWidth = localStorage.getItem("closetCalculator");
    //
    //     if(localstorageWidth){
    //         const widthValue = JSON.parse(localstorageWidth);
    //         setWidth(widthValue.width);
    //         setHeight(widthValue.height);
    //         setDepth(widthValue.depth);
    //     }
    //
    // },[]);

    useEffect(()=>{
        setWidth(2);
        setHeight(2);
        setDepth(1);
    },[]);


    return (
        <Fragment>
            <p>Choose Sizes</p>
            <div className="container mt-10">
                <div className="contact-form clearfix">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group flex justify-content-center align-items-center">
                                <Image src="/static/images/icons/db-width.png" alt="Width" width="75" height="75"/>
                                <input type="number" step="0.10" className="form-control"
                                       placeholder="Width" name="width" required value={width}
                                       onChange={(event) => setWidth(event.target.value)}/>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-group flex justify-content-center align-items-center">
                                <Image src="/static/images/icons/db-height.png" alt="Height" width="75" height="75"/>
                                <input type="number" step="0.10" className="form-control"
                                       placeholder="Height" required value={height}
                                       onChange={(event) => setHeight(event.target.value)}/>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-group flex justify-content-center align-items-center">
                                <Image src="/static/images/icons/db-height.png" alt="Depth" width="75" height="75"/>
                                <input type="number" step="0.10" className="form-control"
                                       placeholder="Depth" required value={depth}
                                       onChange={(event) => setDepth(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}