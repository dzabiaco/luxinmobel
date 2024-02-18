import Product from "@/components/PopularProducts/Product";
import classes from "@/components/HeaderContent/HeaderContent.module.css";
import Link from "next/link";


export default function PopularProducts(){
    return (
        <section className="products">

            <header>
                <div className="container">
                    <h2 className="title">Popular products</h2>
                </div>
            </header>


            <div className="container">

                <div className="row">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="row">
                    <Link href="/gallery" className={`${classes.slideButton} mx-auto`}>See portfolio</Link>
                </div>

            </div>

        </section>
    );
}