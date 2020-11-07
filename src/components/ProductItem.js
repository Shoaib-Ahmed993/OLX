import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data.json';
import Header from './Header'

function ProductItem() {
    const { id } = useParams();
    const data = Data[id];

    if (!data)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <Header />
            <div className="img-fluid">
                <img src="https://tpc.googlesyndication.com/simgad/17262568290123202459" alt="ad" style={{ margin: "0 12% 8% 12%" }} />
            </div>
            <div className="container" style={{ marginBottom: "10%" }}>
                <div className="row flex">
                    <div className="col-md-7">
                        <div className="space">
                            <div className="link">
                                <img src={data.image} height={400} width={700} alt="data" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 m">
                        <div className="b">
                            <h1 className="fontb s30 color">{data.price}</h1>
                            <h4 className="fontl color">{data.title}</h4>
                            <div className="flex">
                                <p className="fontl color" >{data.area}</p>
                                <small className="fontl color" style={{margin: "16px 0 5px 20%"}}>{data.stamp}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;