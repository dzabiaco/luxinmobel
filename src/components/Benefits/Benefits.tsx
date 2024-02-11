import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faRocket, faClockRotateLeft, faGem} from '@fortawesome/free-solid-svg-icons';


export default function Benefits(){
    return (
        <section className="benefits">

            <header className="d-none">
                <div className="container">
                    <h2 className="h2 title">Benefits</h2>
                </div>
            </header>


            <div className="container">
                <div className="row">

                    <div className="col-6 col-lg-3" data-tilt>
                        <figure>
                            <div className="icon">
                                <FontAwesomeIcon className="icon " icon={faGift} />
                            </div>
                            <figcaption>
                                <span>
                                    <strong>Get your gift</strong> <br/>
                                    <small>Are you a new customer?</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>


                    <div className="col-6 col-lg-3" data-tilt>
                        <figure>
                            <div className="icon">
                                <FontAwesomeIcon className="icon " icon={faRocket} />
                            </div>
                            <figcaption>
                                <span>
                                    <strong>Fast delivery</strong> <br/>
                                    <small>We're shipping all over the world</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>


                    <div className="col-6 col-lg-3" data-tilt>
                        <figure>
                            <div className="icon">
                                <FontAwesomeIcon className="icon " icon={faClockRotateLeft} />
                            </div>
                            <figcaption>
                                <span>
                                    <strong>Money-back guarantee</strong> <br/>
                                    <small>30 day money back gurantee</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-6 col-lg-3" data-tilt>
                        <figure>
                            <div className="icon">
                                <FontAwesomeIcon className="icon" icon={faGem} />
                            </div>
                            <figcaption>
                                <span>
                                    <strong>VIP discounts</strong> <br/>
                                    <small>Become VIP member</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>


            </div>


        </section>
    );
}