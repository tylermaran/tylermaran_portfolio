// Importing Dependencies
import React, { useState } from 'react';

// Importing Styles
import './Modal.css';


const Modal = props => {

    let fadein = {
        animation: 'fadein .5s',
        MozAnimation: 'fadein .5s',
        WebkitAnimation: 'fadein .5s',
        OAnimation: 'fadein .5s',
    };

    let fadeout = {
        animation: 'fadeout .5s',
        MozAnimation: 'fadeout .5s',
        WebkitAnimation: 'fadeout .5s',
        OAnimation: 'fadeout .5s',
    };

    const [style, setStyle] = useState(fadein);

    const handle_exit = () => {
        setStyle(fadeout);
        setTimeout(() => {
            props.function(false);
        }, 400);
    };

    return (
        <div className="modal" style={style}>
            <div
                className="modal_background"
                onClick={() => handle_exit()}
            ></div>

            <div className="modal_body">
                <div className="modal_content">
                    <div className="modal_desktop_image">
                        <div
                            className="modal_project_image"
                            style={{
                                backgroundImage:
                                    'url(' + props.project.desktop_image + ')',
                            }}
                        ></div>
                        <div className="modal_name">{props.project.name}</div>

                    </div>


                    <div className="modal_description">
                        <p>{props.project.description.body}</p>
                        <ul>{props.project.description.sub_points[0]}</ul>
                        <ul>{props.project.description.sub_points[1]}</ul>
                        <ul>{props.project.description.sub_points[2]}</ul>
                    </div>

                    <div className="modal_detail_image">
                        <div
                            className="modal_project_image"
                            style={{
                                backgroundImage:
                                    'url(' + props.project.detail_image + ')',
                            }}
                        ></div>
                    </div>

                    <p>{props.project.detail.body}</p>
                    <ul>{props.project.detail.sub_points[0]}</ul>
                    <ul>{props.project.detail.sub_points[1]}</ul>
                    <ul>{props.project.detail.sub_points[2]}</ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;
