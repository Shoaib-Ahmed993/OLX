import React, { useState } from 'react'
import Data from '../Data.json'
import { Link } from 'react-router-dom'

function Product(props) {
    console.log(Data)
    // console.log(this.props)


    if ("placeholder" in props) {
        return (
            <React.Fragment>
                <Link to={`/product/data1`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data1.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data1.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data1.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data1.area}</p>
                            </div>
                            <div className="stamp mt-3" style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data1.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data2`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data2.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data2.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data2.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data2.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data2.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data3`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data3.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data3.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data3.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data3.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data3.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data4`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data4.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data4.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data4.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data4.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data4.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data5`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data5.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data5.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data5.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data5.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data5.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data6`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data6.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data6.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data6.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data6.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}} >
                                <small className="s12 color fontl">{Data.data6.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data7`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data7.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data7.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data7.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data7.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data7.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data8`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data8.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data8.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data8.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data8.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data8.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data9`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data9.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data9.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data9.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data9.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}} >
                                <small className="s12 color fontl">{Data.data9.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data10`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data10.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data10.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data10.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data10.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data10.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data11`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data11.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data11.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data11.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data11.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data11.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data12`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data12.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data12.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data12.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data12.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data12.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data13`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data13.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data13.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data13.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data13.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data13.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data14`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data14.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data14.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data14.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data14.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data14.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data15`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data15.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data15.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data15.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data15.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data15.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data16`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data16.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data16.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data16.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data16.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data16.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data17`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data17.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data17.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data17.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data17.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data17.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data18`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data18.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data18.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data18.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data18.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data18.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data19`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data19.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data19.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data19.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data19.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data19.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/product/data20`} className="noul">
                    <div className="ad-item">
                        <div className="poster " >
                            <img src={Data.data20.image} height={160} width={250} />
                        </div>
                        <div className="title  " >
                            <h1 className="fontb s22 color">{Data.data20.price}</h1>
                        </div>
                        <div className="tagline " >
                            <h4 className="color fontl s13">{Data.data20.title}</h4>
                        </div>
                        <div className="ftr anim flex">
                            <div className="location " >
                                <p className="s12 color fontl">{Data.data20.area}</p>
                            </div>
                            <div className="stamp " style={{margin: "10px 2px 2px 11px"}}>
                                <small className="s12 color fontl">{Data.data20.stamp}</small>
                            </div>
                        </div>
                    </div>
                </Link>
            </React.Fragment>

        )
    }
    return (
        <div className="ad-item">

        </div>
    )

}

export default Product;

