import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Projects = () => {

    const param = useParams();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        axios
            .get(BACKEND_URL + "/api/project/" + param.status)
            .then((res) => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div id="content" className="section">
            <div className="main clearfix">
                <div className="gallery_wrapper clearfix">
                    {projects.map((project, i) => (
                        <div key={i} className={i % 2 === 0 ? "gallery_item " : "gallery_item odd"}>
                            <div className="gallery_image">
                                <a href={`/project/${project.slug}`} title="Opla Apartment">
                                    <div className="img">
                                        <div className="gallery_overlay" />
                                        <img
                                            src={BACKEND_URL + project.image}
                                            alt="Opla Apartment"
                                        />
                                    </div>
                                    <div className="gallery_name">
                                        <h3>{project.title}</h3>
                                        <div className="gallery_short_desc">
                                            <p>Địa điểm: {project.address}</p>
                                            <p>Diện tích: {project.area}m2</p>
                                            <p>Năm hoàn chỉ: {project.completed_year}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;