import {Fragment} from "react";
import Header from "@/components/Header/Header";
import GalleryItem from "@/pages/gallery/GalleryItem";


export default function Gallery(){
    return (
        <Fragment>
            <Header/>
            <section className="products pt-0">
                <header>
                    <div className="container">
                        <h2 className="title">Product list category</h2>
                        <div className="text">
                            <p>Nam egestas tincidunt turpis</p>
                        </div>
                    </div>
                </header>

                <div className="container">

                    <div className="row">
                        <div className="flex w-full justify-content-center mb-5">
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="checkbox" id="matId1"/>
                                            <label htmlFor="matId1">All <i>(1200)</i></label>
                                        </span>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="checkbox" id="matId2"/>
                                            <label htmlFor="matId2">Кухни Модерн <i>(12)</i></label>
                                        </span>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="checkbox" id="matId3"/>
                                            <label htmlFor="matId3">Кухни Классические <i>(80)</i></label>
                                        </span>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="checkbox" id="matId4"/>
                                            <label htmlFor="matId4">Прихожие <i>(80)</i></label>
                                        </span>
                            <span className="checkbox" style={{marginRight: 10}}>
                                            <input type="checkbox" id="matId5"/>
                                            <label htmlFor="matId5">Шкафы <i>(80)</i></label>
                                        </span>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12">
                            <div className="row">
                                <GalleryItem/>
                                <GalleryItem/>
                                <GalleryItem/>
                                <GalleryItem/>
                                <GalleryItem/>
                                <GalleryItem/>
                            </div>

                            <div className="pagination-wrapper">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link active" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </Fragment>
    );
}