import Link from "next/link";
import Image from "next/image";


export default function Category(props:any) {
    return (
        <article>
            <Link href="products-grid.html">
                <div className="image">
                    <Image src="/static/images/product-1.jpg" width="300" height={300} alt=""/>
                </div>
                <div className="entry entry-block">
                    {/*<div className="label">2020 Collection</div>*/}
                    <div className="title">
                        <h2 className="h4">{props.title}</h2>
                    </div>
                    <div className="description d-none d-sm-block">
                        <p>
                            Top picks four your desire
                        </p>
                    </div>
                </div>
                <div className="show-more">
                    <span className="btn btn-clean">Shop now</span>
                </div>
            </Link>
        </article>
    );
}