import Link from "next/link";

export default function HeaderContent(){
    return (
        <section className="header-content">
            <h2 className="d-none">Slider element</h2>

            <div className="container-fluid">
                <div className="owl-slider owl-carousel owl-theme" data-autoplay="true">

                    <div className="item d-flex align-items-center itemImageOne">
                        <div className="container">
                            <div className="caption">
                                <div className="animated" data-start="fadeInUp">
                                    <div className="promo pt-3">
                                        <div className="title title-sm p-0">Sofa Grace</div>
                                    </div>
                                </div>
                                <div className="animated" data-start="fadeInUp">
                                    Score new arrivals from latest items
                                    <br/>
                                    Multipurpose eCommerce template ready
                                </div>
                                <div className="animated" data-start="fadeInUp">
                                    <div className="pt-3">
                                        <Link href="/" className="btn btn-outline-warning">Buy now</Link>
                                        <Link href="/" className="btn btn-outline-light"> Get first discount</Link>
                                    </div>
                                </div>
                                <div className="animated" data-start="fadeInUp">
                                    <div className="promo pt-5">
                                        <div className="h6 p-0 m-0">Get special price</div>
                                        <div className="price">
                                            <span>$1499,99</span>
                                            <span>3499,99</span>
                                        </div>
                                        <small className="d-none d-sm-block">** Product prices with discount are available until the end of stock </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}