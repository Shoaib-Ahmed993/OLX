import guitar from '../images/guitar.webp'
export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideClassName}>
            <section className="modal-main" style={{width: 400}}>
                <button onClick={handleClose} className="fa fa-close s30 color" style={{float: "right", border: "none",background: "#fff",  color: "#002f34"}}></button>
                {children}
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" style={{textAlign: "center", marginBottom: 20}}>
                                <img src={guitar} alt="guitar" style={{padding: "15px 8px 0 10px", marginLeft: "25px"}}  width={100} />
                                <p className="color s16">Help make OLX safer place to buy and sell</p>
                                <div  className="color s14 hov" style={{border: "2px solid #000", padding: 10, margin:"100px 10px 10px 10px"}}>
                                    <h3 className="fontb " style={{marginLeft: 10}}>Continue with phone</h3>
                                </div>
                                <div className="flex color s14 hov" style={{margin: "10px 10px", padding: "10px 10px 10px 20%", border: "2px solid #000"}}>
                                    <i className="fa fa-facebook-f" style={{ border: "1px solid #002f34", borderRadius: "60%", padding: 5}}></i>
                                    <h3 className="fontb">Continue with facebook</h3>
                                </div>
                                <div className="flex color s14 hov" style={{ margin: "10px 10px", border: "2px solid #000", padding: "10px 10px 10px 20%"}}>
                                    <i className="fa fa-google" style={{ border: "1px solid #002f34", borderRadius: "50%", padding: 5}}></i>
                                    <h3 className="fontb">Continue with google</h3>
                                </div>
                                <div  className="color s14 hov" style={{padding: 10, border: "2px solid #000", margin: "10px 10px 30px 10px",}}>
                                    <h3 className="fontb" style={{marginLeft: 10}}>Continue with email</h3>
                                </div>
                                <div className="aic">
                                    <small>We won't share your personal details with anyone</small>
                                    <p className="color s12">If you continue, you are accepting <span style={{color: "blue"}}>OLX Terms and Conditions and Privacy Policy</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};