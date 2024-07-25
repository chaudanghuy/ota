import React, { Component } from "react";

const FRONTEND_URL = process.env.REACT_APP_FRONT;

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="main clearfix">
                    <div className="footer_wrap">
                        <div className="footer-item first">
                            <div className="footer-icon icon-location">
                                Le Capitole - 27 Thái Thịnh - Đống Đa - Hà Nội
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="footer-icon icon-phone">
                                <a href="tel:0986.208.387">0986.208.387</a>
                            </div>
                        </div>
                        <div className="footer-item last">
                            <div className="footer-icon icon-mail">
                                <a href="mailto:info@{FRONTEND_URL}">info@{FRONTEND_URL}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;