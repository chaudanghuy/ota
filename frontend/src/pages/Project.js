import React, { Component } from "react";
import withRouter from "react-router-dom";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projecst: [],
        };
    }

    render() {
        return (
            <div id="content" className="section">
                <div className="main clearfix">
                    <div className="gallery_wrapper clearfix">
                        <div className="gallery_item ">
                            <div className="gallery_image">
                                <a href="./opla-apartment-tv41.html" title="Opla Apartment">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/5f05e40c4e36fb697c7b3f37eed48c62.jpg"
                                            alt="Opla Apartment"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>Opla Apartment</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Park Hill Premium - Hà Nội</p>
                                            <p>Diện tích: 94m2</p>
                                            <p>Năm hoàn thành: 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item odd">
                            <div className="gallery_image">
                                <a href="./ms-duplex-tv40.html" title="MS Duplex">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/7c0a86a47a15b4c6a37b44a794511fee.jpg"
                                            alt="MS Duplex"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>MS Duplex</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: T-Place - Hà Nội</p>
                                            <p>Diện tích: 700m2 nội thất - 200m2 sân vườn</p>
                                            <p>Năm hoàn thành: 2023</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item ">
                            <div className="gallery_image">
                                <a href="./s-man-cave-tv38.html" title="S Man Cave">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/ae4713c8adddb0794eab8a41d7a36925.jpg"
                                            alt="S Man Cave"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>S Man Cave</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Hà Nội</p>
                                            <p>Diện tích: 92m2</p>
                                            <p>Năm hoàn thành: 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item odd">
                            <div className="gallery_image">
                                <a href="./yoko-penthouse-tv32.html" title="Yoko Penthouse">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/ede61328dc9c5bd4fc4b2939bfc1637c.png"
                                            alt="Yoko Penthouse"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>Yoko Penthouse</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Bình Thạnh - TP Hồ Chí Minh</p>
                                            <p>Diện tích: 280m2</p>
                                            <p>Năm hoàn thành: 2023</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item ">
                            <div className="gallery_image">
                                <a href="./so-na-house-tv37.html" title="So Na House">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/9bcae8bfea70b7a9dd4854ff2b714699.jpg"
                                            alt="So Na House"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>So Na House</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Thảo Điền - Quận 2 - TP Hồ Chí Minh</p>
                                            <p>Diện tích: 350m2</p>
                                            <p>Năm hoàn thành: 2023</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item odd">
                            <div className="gallery_image">
                                <a href="./l-apartment-tv31.html" title="L Apartment">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/9eec1996cfed9104ca7b950a839e6a2f.jpg"
                                            alt="L Apartment"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>L Apartment</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Vinhomes Symphony - Long Biên - Hà Nội</p>
                                            <p>Diện tích: 155m2</p>
                                            <p>Năm hoàn thành: 2021</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item ">
                            <div className="gallery_image">
                                <a
                                    href="./flappy-man--lancaster-tv25.html"
                                    title="Flappy Man - Lancaster"
                                >
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/1526f942f310d681df49ec14d8203444.jpg"
                                            alt="Flappy Man - Lancaster"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>Flappy Man - Lancaster</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Lancaster - Núi Trúc - Hà Nội</p>
                                            <p>Diện tích: 85m2</p>
                                            <p>Năm hoàn thành: 2020</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item odd">
                            <div className="gallery_image">
                                <a href="./ms-apartment-tv24.html" title="M.S Apartment">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/a221ed93bd15786f2b7023c86b951149.jpg"
                                            alt="M.S Apartment"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>M.S Apartment</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Seasons Avenue - Mỗ Lao - Hà Đông - Hà Nội</p>
                                            <p>Diện tích: 125m2</p>
                                            <p>Năm hoàn thành: 2019</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gallery_item ">
                            <div className="gallery_image">
                                <a href="./q-apartment-tv1.html" title="Q Apartment">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src="https://w2dstudio.vn//media/resizer/600/r/images/gallery/77e0c565c13b1e3d2b849f30eaf6c697.jpg"
                                            alt="Q Apartment"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>Q Apartment</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: Seasons Avenue - Mỗ Lao - Hà Đông - Hà Nội</p>
                                            <p>Diện tích: 76 m2</p>
                                            <p>Năm hoàn thành: 2018</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Project;