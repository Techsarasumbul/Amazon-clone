import React from "react";
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className='home__container'>

                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/Lastdays2/Phase_3_Tallhero_3000x1200._CB574261257_.jpg"
                    alt="" />
                <div className="home__row">
                    <Product />
                    


                </div>
                <div className="home__row">

                </div>
                <div className="home__row">

                </div>










            </div>


        </div>




    )

}
export default Home;