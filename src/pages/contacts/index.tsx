import Header from "@/components/Header/Header";
import {Fragment, useState} from "react";
import Footer from "@/components/Footer/Footer";
import Benefits from "@/components/Benefits/Benefits";
import classes from "./Contact.module.css";
import {useRef} from "react";
import Alert from "@/components/Alert/Alert";

export default function Contacts(){
    const [error, setError] = useState(false);
    const [success, setsuccess] = useState(false);

    const [type, setType] = useState("");
    const [textAlert, setTextAlert] = useState("");

    const nameRef = useRef("");
    const emailRef = useRef("");
    const subjectRef = useRef("");
    const messageRef = useRef("");

    async function handleContact(){
        event!.preventDefault();
        const name = (nameRef.current as any).value.trim();

        const email = (emailRef.current as any).value.trim();
        const subject = (subjectRef.current as any).value.trim();
        const message = (messageRef.current as any).value.trim();

        if(!!name || !!email || !!subject || !!message){
            setType("danger");
            setTextAlert("Please fill message");
            setError(true);

            setTimeout(()=> {
                setError(false);
            }, 3000);
        }

        const emailObject = {
            name,
            email,
            subject,
            message
        };

        if(!error){
            const response = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailObject)
            });

            if(response.status === 200) {
                setType("success");
                setTextAlert("Your message was sent");
                setTimeout(()=> {
                    setError(true);
                }, 3000);
            }

            console.log(response);
        }

    }

    return (
        <Fragment>
            <Header/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="contact-info">
                            <h2 className="title">Send an email</h2>
                            <p className="mt-3 mb-3">
                                Thanks for your interest in Mobel Theme. We believe in creativity as one of the major
                                forces of progress.
                                Please use this form if you have any questions about our products and we'll get back
                                with you very soon.
                            </p>

                            <div className="contact-form-wrapper">
                                {error && <Alert type={type} text={textAlert}/>}

                                <div className="contact-form clearfix">
                                    <form onSubmit={handleContact}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" ref={nameRef as any} className="form-control"
                                                           placeholder="Your name" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" ref={emailRef as any} className="form-control"
                                                           placeholder="Your email" required/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">

                                                <div className="form-group">
                                                    <input type="text" ref={subjectRef as any} className="form-control"
                                                           placeholder="Subject" required/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea ref={messageRef as any} className="form-control"
                                                              placeholder="Your message" rows={10}>
                                                    </textarea>
                                                </div>
                                            </div>

                                            <div className="col-md-12 text-center">
                                                <input type="submit"
                                                       className={`btn btn-primary ${classes.button}`} value="Send message"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefits/>
            <Footer/>
        </Fragment>
    );
}