import React, { Component } from "react";

const FRONTEND_URL = process.env.REACT_APP_FRONT;

const Footer = (props) => {

    const {setting} = props;    

    return (
        <div id="footer">
            <div className="main clearfix">
                <div className="footer_wrap">
                    <div className="footer-item first">
                        <div className="footer-icon icon-location">
                            {setting.company_address}
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-icon icon-phone">
                            <a href={`tel:${setting.company_phone}`}>
                                {setting.company_phone}                            
                            </a>
                        </div>
                    </div>
                    <div className="footer-item last">
                        <div className="footer-icon icon-mail">
                            <a href={`mailto:${setting.company_email}`}>
                                {setting.company_email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;