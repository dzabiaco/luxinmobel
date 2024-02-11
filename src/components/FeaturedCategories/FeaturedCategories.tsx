"use client";
import Link from "next/link";
import Category from "./Category";
import classes from "./FeaturedCategories.module.css";


export default function FeaturedCategories() {

    return (
        <section className="blog blog-block">
            <header>
                <div className="container">
                    <h2 className={classes.title}>Featured categories</h2>
                    <div className="text">
                        <p>We just keep things minimal.
                        </p>
                    </div>
                </div>
            </header>


            <div className="container">

                <div className="scroll-wrapper">

                    <div className="row scroll text-center">

                        <div className="col-md-4">
                            <Category title="Кухни"/>
                        </div>

                        <div className="col-md-4">
                            <Category title="Шкафы"/>
                        </div>

                        <div className="col-md-4">
                            <Category title="Прихожие"/>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}