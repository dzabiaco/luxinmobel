import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";


export default function GalleryItem() {
    return (
        <div className="col-6 col-lg-4">
            <article>

                <div className="btn btn-add">
                    <FontAwesomeIcon icon={faEye} style={{marginTop:10}}/>
                </div>
                <div className="figure-grid">
                    <div className="image">
                        <Link href="#">
                            <img src="/static/images/product-1.jpg" alt=""/>
                        </Link>
                    </div>
                    <div className="text">
                        <h2 className="title h4">
                            <Link href="#">Anna</Link>
                        </h2>
                    </div>
                </div>
            </article>
        </div>
    );
}