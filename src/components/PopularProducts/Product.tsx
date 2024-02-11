import Link from "next/link";

export default function Product(){
    return (
        <div className="col-6 col-lg-4">
            <article>
                {/*<div className="btn btn-add">*/}
                {/*    <i className="icon icon-cart"></i>*/}
                {/*</div>*/}
                <div className="figure-grid">
                    <div className="image">
                        <Link href="product.html">
                            <img src="/static/images/product-2.jpg" alt=""/>
                        </Link>
                    </div>
                    <div className="text">
                        <h2 className="title h4">
                            <a href="product.html">Anna</a>
                        </h2>
                        <sub>$ 159,-</sub>
                        <sup>$ 139,-</sup>
                        <span className="description clearfix">
                                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam
                                        lorem ea duo labore diam sit et consetetur nulla
                                    </span>
                    </div>
                </div>
            </article>
        </div>
    );
}