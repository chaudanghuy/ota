import React, { Component } from "react";

import CEO from '../images/staff/staff_s15.jpg'

class About extends Component {
    render() {
        return (
            <div id="content">
                <div id="about_us" className="section">
                    <div className="main clearfix">
                        <div className="row">
                            <div className="half alignRight">
                                <h2 className="featured_title">Welcome to W2D Studio!</h2>
                                <div className="marginTop30">
                                    <p>
                                        Trải qua 10 năm kinh nghiệm trong ngành xây dựng nhà ở, đội ngũ
                                        của chúng tôi hướng tới vẻ đẹp hoàn mỹ của kiến trúc đương đại,
                                        kết hợp giữa vật liệu cao cấp, thân thiện với người sử dụng, cùng
                                        với các thiết bị thông minh giúp chủ nhân căn nhà có cuộc sống
                                        sang trọng và hiện đại.
                                    </p>
                                    <p>
                                        Khát khao cháy bỏng mang đến cho Việt Nam những ngôi nhà đẳng cấp
                                        quốc tế đang là cầu nối đưa chúng tôi đến với bạn.
                                    </p>
                                    <p>Cảm ơn vì đã lựa chọn chúng tôi cho ngôi nhà mới của mình!</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>{" "}
                                </div>
                            </div>
                            <div className="half">
                                <div id="about_us_logo" className="size_40">
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
                            </div>
                        </div>
                        <div className="team_wrapper alignCenter">
                            <h2 className="featured_title" />
                            <div className="team-wrap">
                                <div className="team-item">
                                    <div className="team-image-wrap">
                                        <div className="team-image">
                                            <img src={CEO} alt="NGHIÊM QUANG VĨNH" />
                                            <div className="team-content">
                                                <p>2010: Tốt nghiệp Khoa Kiến Trúc</p>
                                                <p>Đại Học Xây Dựng Hà Nội</p>
                                                <p>&nbsp;</p>
                                                <p>2015: Sáng lập W2D Studio</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <p>Kiến Trúc Sư - Người Sáng Lập</p>
                                        <h4>NGHIÊM QUANG VĨNH</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;