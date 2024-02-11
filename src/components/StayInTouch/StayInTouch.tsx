import Link from "next/link";
import classes from "./StayInTouch.module.css";
import {useRef, useState} from "react";
import Alert from "@/components/Alert/Alert";

export default function StayInTouch(){
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const emailRef = useRef<HTMLInputElement | null>(null);

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    async function subscribe(){
        const email = emailRef.current?.value;

        if(!validateEmail(email) || error){
            setSuccess(false);
            setError(true);
            return;
        }

        try {
            const response = await fetch(`/api/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.status === 200) {
                setError(false);
                setSuccess(true);

                setTimeout(()=>{
                    setSuccess(false);
                }, 3000);
            } else {
                setError(true);
                setSuccess(false);

                setTimeout(()=>{
                    setError(false);
                }, 3000);
            }
        } catch (error) {
            setError(true);
            setSuccess(false);
            setTimeout(()=>{
                setError(false);
            }, 3000);
        }

    }

    return (
        <section className="banner">

            <div className="container-fluid">

                <div className={`banner-image ${classes.bannerImage}`}>
                    <header>
                        <div className="container">

                            <h2 className="h2 title">Stay in touch!</h2>
                            <div className="text">
                                <p>Be first to know about all new interior features!</p>
                            </div>
                        </div>
                    </header>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                {error && <Alert type="danger" text="Something went wrong"/>}
                                {success && <Alert type="success" text="You have successfully subscribed"/>}
                                <input type="email" ref={emailRef} className="form-control" name="name"
                                       placeholder="Enter your e-mail"/>
                            </div>
                            <div className="col-md-4">
                                <button onClick={subscribe} className="btn btn-clean">Subscribe now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}