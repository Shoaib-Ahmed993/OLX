import React, { useEffect, useState } from 'react'
import Slider from '../images/slider.jpg'
import Product from './Product'

function HomePage() {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (loading) {
            let _list = []
            for (let i = 0; i < 1; i++) {
                _list.push(<Product placeholder={true} />);
            }
            setList(_list)
        }
    }, list)


    return (
        <React.Fragment>
            <div>
                <img className="slider" src={Slider} alt="slider" />
            </div>
            <div className="home-page">
                <h1 className="color fresh">Fresh recommendations</h1>
                <div className="ad-list flex">
                    {list}
                </div>
                <button className="load-more fontb anim s20">
                    Load More
                </button>
            </div>
            <div className="app-ribbon flex aic">
                <div className="img">
                    <img className="bl" src='//statics.olx.com.pk/external/base/img/phone-app.png' alt="try" />
                </div>
                <div className="meta">
                    <h2 className="fontb color title s30">TRY THE OLX APP</h2>
                    <h2 className="font color slogan s18">Buy, sell and find just about anything using the app on your mobile.</h2>
                </div>
                <div className="line">
                    <div className="color">

                    </div>
                </div>
                <div className="links">
                    <h2 className="fontb color title s16">GET YOUR APP TODAY</h2>
                    <div className="flex as">
                        <a href="#" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" width={128} height={40} alt="app store" /></a>
                        <a href="#" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" width={128} height={40} alt="google play" /></a>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default HomePage;