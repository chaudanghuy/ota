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
        }, 5000);
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
                                <div id="animated_logo">
                                    <div className="layer_1">&nbsp;</div>
                                    <div className="bar" />
                                    <div className="bar odd" />
                                    <div className="bar" />
                                    <div className="bar odd" />
                                    <div className="bar" />
                                    <div className="bar odd" />
                                    <div className="bar last" />
                                </div>
                                <div className="animated_logo_text">
                                    <span className="text_1">W</span>
                                    <span className="text_2">2</span>
                                    <span className="text_3">D</span>
                                    <span className="text_4">&nbsp;</span>
                                    <span className="text_5">S</span>
                                    <span className="text_6">T</span>
                                    <span className="text_7">U</span>
                                    <span className="text_8">D</span>
                                    <span className="text_9">I</span>
                                    <span className="text_10">O</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Home;