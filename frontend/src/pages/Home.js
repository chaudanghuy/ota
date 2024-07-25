import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StatusList from '../components/StatusList';
import NewStatusModal from "../components/NewStatusModal";
import BackgroundSlider from 'react-background-slider'

import axios from "axios";

import { API_URL } from "../constants";

import Slide1 from "../images/slide/slide_s35.jpg";
import Slide2 from "../images/slide/slide_s38.jpg";
import Slide3 from "../images/slide/slide_s37.jpg";
import Slide4 from "../images/slide/slide_s34.jpg";
import Slide5 from "../images/slide/slide_s39.jpg";

class Home extends Component {
    state = {
        statuses: [],
        loading: true
    };

    componentDidMount() {
        this.resetState();
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 5000);
    }

    getStatuses = () => {
        axios.get(API_URL).then(
            res => this.setState({ statuses: res.data })
        );
    };

    resetState = () => {
        this.getStatuses();
    }

    render() {
        return (
            <>
                <BackgroundSlider
                    images={[Slide1, Slide2, Slide3, Slide4, Slide5]}
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