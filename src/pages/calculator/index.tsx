import Header from "@/components/Header/Header";
import Benefits from "@/components/Benefits/Benefits";
import Footer from "@/components/Footer/Footer";
import {Fragment, useState} from "react";
import ClosetCalculator from "@/components/ClosetCalculator/ClosetCalculator";
import KitchenCalculator from "@/components/KitchenCalculator/KitchenCalculator";
import Image from "next/image";


export default function Calculate(){
    const [showCloset, setShowCloset] = useState(false);
    const [showKitchen, setShowKitchen] = useState(false);

    function showClosetCalculator(){
        setShowKitchen(false);
        setShowCloset(true);
    }

    function showKitchenCalculator(){
        setShowCloset(false);
        setShowKitchen(true);
    }


    return ( <Fragment>
        <Header/>
         <div className="container mt-10">
             <div className="row">
                 <div className="col-6 flex justify-content-center flex-column align-items-center hover:cursor-pointer"
                      onClick={showClosetCalculator}>
                     <Image src="/static/images/icons/closet.svg" width="100" height="10" alt=""/>
                     <h3>Closet</h3>
                 </div>

                 <div className="col-6 flex justify-content-center flex-column align-items-center hover:cursor-pointer"
                      onClick={showKitchenCalculator}>
                     <Image src="/static/images/icons/kitchen.svg" width="100" height="100" alt=""/>
                     <h3>Kitchen</h3>
                 </div>
             </div>
         </div>
        {showCloset &&<ClosetCalculator/>}
        {showKitchen && <KitchenCalculator/>}
        <Benefits/>
        <Footer/>
        </Fragment>
    );
}