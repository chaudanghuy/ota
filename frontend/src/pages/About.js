import React, { Component } from "react";

import CEO from '../images/staff/staff_s15.jpg'
import Logo from '../images/logo.png'

class About extends Component {
    render() {
        return (
            <div id="content">
                <div id="about_us" className="section">
                    <div className="main clearfix">
                        <div className="row">
                            <div className="half alignRight">
                                <h2 className="featured_title">Welcome to OTA Studio!</h2>
                                <div className="marginTop30">
                                    <p>
                                        Công ty chúng tôi chuyên cung cấp các dịch vụ thiết kế kiến trúc và xây dựng toàn diện, từ giai đoạn lên ý tưởng đến thi công hoàn thiện. Với đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến những giải pháp sáng tạo, đáp ứng tối đa nhu cầu và phong cách của khách hàng.
                                    </p>
                                    <p>
                                    Chúng tôi luôn chú trọng đến việc tạo ra những không gian sống và làm việc tiện nghi, hiện đại, và thân thiện với môi trường. Các dự án của chúng tôi được thực hiện với sự kết hợp hài hòa giữa thẩm mỹ và công năng, đảm bảo chất lượng cao nhất cho mỗi công trình.
                                    </p>
                                    <p>
                                    Với nhiều năm hoạt động trong ngành, chúng tôi đã thực hiện thành công nhiều dự án từ nhà ở, văn phòng cho đến các công trình công cộng. Công ty luôn đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu, mang đến những sản phẩm bền vững và tối ưu hóa chi phí đầu tư.
                                    </p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>{" "}
                                </div>
                            </div>
                            <div className="half">
                                <div id="about_us_logo" className="size_40">
                                    <div id="loading_content">
                                        <div className="center_me">
                                            <div id="animated_logo_wrapper">                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="team_wrapper alignCenter">
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
                        </div> */}
                    </div>
                </div>
            </div>

        );
    }
}

export default About;