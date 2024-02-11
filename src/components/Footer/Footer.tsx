import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import classes from "./Footer.module.css"

export default function Footer(){
    return (
        <footer>

            <div className="container-fluid">

                <div className="footer-wrap">

                    <div className="container">
                        <div className="footer-social">
                            <div className="row">
                                <div className="col-sm-6 flex">
                                    <Link href="/">
                                        <Image src="/static/images/divano-logo.svg" alt="" width="130"
                                               height="55"/>
                                    </Link> &nbsp; | &nbsp;
                                    <Link
                                    href="#">Privacy policy</Link>
                                </div>
                                <div className="col-sm-6 links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                {/*<i className="fa fa-facebook"></i>*/}
                                                <FontAwesomeIcon className={`icon ${classes.social}`} icon={faFacebook} />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                {/*<i className="fa fa-twitter"></i>*/}
                                                <FontAwesomeIcon className={`icon ${classes.social}`} icon={faInstagram} />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                {/*<i className="fa fa-google-plus"></i>*/}
                                                <FontAwesomeIcon className={`icon ${classes.social}`} icon={faTiktok} />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}