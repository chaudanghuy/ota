import React, { Component } from "react";
import GoogleMap from "../components/GoogleMap";

class About extends Component {
    render() {
        return (
            <div id="contact" className="section">
                <div className="main clearfix">
                    <div className="row clearfix">
                        <div className="half">
                            <div className="contact_info alignLeft">
                                <h4 className="featured_title">Contact Us</h4>
                                <form method="post" className="marginTop30">
                                    <div className="form-controls">
                                        <input type="text" name="txtName" placeholder="Your name" />
                                        <span />
                                    </div>
                                    <div className="form-controls">
                                        <input
                                            type="text"
                                            name="txtPhone"
                                            placeholder="Your phone number"
                                        />
                                        <span />
                                    </div>
                                    <div className="form-controls">
                                        <input
                                            type="text"
                                            name="txtEmail"
                                            placeholder="Your email address"
                                        />
                                        <span />
                                    </div>
                                    <div className="form-controls">
                                        <textarea
                                            placeholder="Your comment"
                                            name="txtComment"
                                            defaultValue={""}
                                        />
                                        <span />
                                    </div>
                                    <div className="form-controls">
                                        <button type="submit" name="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="half">
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;