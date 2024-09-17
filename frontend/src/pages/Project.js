import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useParams } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Project = () => {
    const param = useParams();
    const [project, setProject] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchProject();
    }, []);

    const fetchProject = async () => {
        axios
            .get(BACKEND_URL + "/api/project/" + param.slug)
            .then((res) => {
                setProject(res.data);
                setImages(res.data.images);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div id="content" className="section">
            <div className="main clearfix">
                <div className="gallery_description">
                    <h2 className="gallery_name">{project.title}</h2>
                    <div className="gallery_short_desc">
                        <div
                            className="_1mf _1mj"
                            data-offset-key="3n0lc-0-0"
                            style={{
                                color: "rgb(51, 51, 51)",
                                textAlign: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            <span data-offset-key="3n0lc-0-0" style={{ boxSizing: "border-box" }}>
                                Tên dự án: {project.title}
                            </span>
                        </div>
                        <div
                            className="_1mf _1mj"
                            data-offset-key="3n0lc-0-0"
                            style={{
                                color: "rgb(51, 51, 51)",
                                textAlign: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            <span data-offset-key="3n0lc-0-0" style={{ boxSizing: "border-box" }}>
                                Thiết kế và thi công: OTA Studio
                            </span>
                        </div>
                        <div
                            className="_1mf _1mj"
                            data-offset-key="3n0lc-0-0"
                            style={{
                                color: "rgb(51, 51, 51)",
                                textAlign: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            <span data-offset-key="3n0lc-0-0" style={{ boxSizing: "border-box" }}>
                                Diện tích:&nbsp;{project.area} m²
                            </span>
                        </div>
                        <div
                            className="_1mf _1mj"
                            data-offset-key="3n0lc-0-0"
                            style={{
                                color: "rgb(51, 51, 51)",
                                textAlign: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            Hoàn thành: {project.completed_year}
                        </div>
                        <div
                            className="_1mf _1mj"
                            data-offset-key="3n0lc-0-0"
                            style={{
                                color: "rgb(51, 51, 51)",
                                textAlign: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            <span data-offset-key="3n0lc-0-0" style={{ boxSizing: "border-box" }}>
                                Địa điểm:&nbsp;
                            </span>
                            <span style={{ color: "rgb(34, 34, 34)" }}>
                                {project.address}
                            </span>
                        </div>
                        <div
                            className="_1mf _1mj"
                            data-offset-key="3n0lc-0-0"
                            style={{
                                color: "rgb(51, 51, 51)",
                                textAlign: "center",
                                boxSizing: "border-box"
                            }}
                        >                            
                        </div>
                    </div>
                </div>
                <Masonry columnsCount={2} gutter="10px">
                        {images.map((image, i) => (
                            <img
                            src={BACKEND_URL + image.image}
                            alt={project.title}
                        />
                        ))}
                    </Masonry>
            </div>
        </div>

    );
}

export default Project;