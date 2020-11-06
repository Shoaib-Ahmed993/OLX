import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { Modal } from './Login'

class Header extends React.Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        const nav = [
            { ID: 1, label: "Mobile Phones" },
            { ID: 2, label: "Cars" },
            { ID: 3, label: "Motorcycles" },
            { ID: 4, label: "Houses" },
            { ID: 5, label: "TV-Video-Audio" },
            { ID: 6, label: "Tablets" },
            { ID: 7, label: "Land & Plots" },
        ];

        return (
            <React.Fragment>

                <div className="header fixed flex aic">
                    <div className="logo">
                        <img src={logo} alt="logo" style={{ width: 60, margin: 8 }} />
                    </div>
                    <div className="location rel flex aic">
                        <div className="search-icon ico s24"><i className="fa fa-search "></i></div>
                        <input className="label s15 font" placeholder="Your Location" value="Pakistan" />
                        <button className="arrow"><i class="fa fa-chevron-down  s24" aria-hidden="true"></i></button>
                    </div>
                    <div className="search flex aic">
                        <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query font s15" />
                        <button className="go s24"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    <div className="actions flex aic">
                        <Modal show={this.state.show} handleClose={this.hideModal} />
                        <Link to="/" className="color fontb s18 noul noulh" onClick={this.showModal}>Login</Link>
                        <button className="color sell flex aic">
                            <div className="fa fa-plus ico s16"></div>
                            <h2 className="s18 fontb" onClick={this.showModal}>SELL</h2>
                        </button>

                    </div>
                </div>

                <div className="hnav fixed flex aic">
                    <button className="view-cats flex aic color bor">
                        <h2 className="s18 font">All Categories</h2>
                        <button className="fa fa-chevron-down  s24 arrow"></button>
                    </button>
                    {
                        nav.map(item => {
                            return (
                                <Link to={"/browser/" + item.ID} className="noul noulh bl color font s15" >{item.label}</Link>
                            )
                        })
                    }
                </div>

                <div className="hclr">

                </div>
            </React.Fragment>
        )
    }
}

export default Header;