import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StatusList from '../components/StatusList';
import NewStatusModal from "../components/NewStatusModal";
import BackgroundSlider from 'react-background-slider'

import axios from "axios";

import Slide1 from "../images/slide/slide_s35.jpg";
import Slide2 from "../images/slide/slide_s38.jpg";
import Slide3 from "../images/slide/slide_s37.jpg";
import Slide4 from "../images/slide/slide_s34.jpg";
import Slide5 from "../images/slide/slide_s39.jpg";
import OtaLogo from "../images/ota-logo.mp4";

const API_URL = process.env.REACT_APP_BACKEND_URL;

class Home extends Component {
    state = {
        statuses: [],        
        sliders: [],        
        loading: true
    };    

    componentDidMount() {        
        this.setState({ loading: true });
        this.getSliderImages();        
        setTimeout(() => {
            this.setState({ loading: false });
        }, 7000);
    }

    getSliderImages = () => {
        axios.get(API_URL + "/api/slider").then(
            res => {
                this.setState({ 
                    sliders: res.data.map((slider) => API_URL + slider.image)
                });
            }
        )
    }        

    render() {                
        return (
            <>
                <BackgroundSlider
                    images={this.state.sliders}
                    duration={5} 
                    transition={2} 
                    className="cbp-bislideshow"
                />
                <div id="loading" className="size_60" style={{ display: this.state.loading ? "block" : "none" }}>
                    <div id="loading_content">
                        <div className="center_me">
                            <div id="animated_logo_wrapper">
                                <video id="animated_logo" autoPlay loop muted>
                                    <source src={OtaLogo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Home;