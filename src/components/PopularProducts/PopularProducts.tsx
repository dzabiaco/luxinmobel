import Product from "@/components/PopularProducts/Product";


export default function PopularProducts(){
    return (
        <section className="products">

            <header>
                <div className="container">
                    <h2 className="title">Popular products</h2>
                    <div className="text">
                        <p>
                            Find your perfect match <a href="products-grid.html" className="btn btn-main">View all</a>
                        </p>
                    </div>
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

            </div>

        </section>
    );
}