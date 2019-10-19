// Importing Dependencies
import React, { useState } from 'react';

// Importing Styles
import './Modal.css';


const Modal = props => {
    console.log(props);


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
                        <p>{props.project.description}</p>
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

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, perferendis. Temporibus cumque, maiores culpa
                        tenetur perspiciatis quod id laborum quos similique,
                        quisquam nemo modi commodi voluptatibus hic dolorum,
                        praesentium error. Ex corporis temporibus placeat.
                        Natus, sunt totam! Error maxime perferendis
                        reprehenderit hic porro ea ut excepturi libero officia.
                        Odit consectetur placeat ea facilis corporis quasi
                        molestiae cupiditate, expedita provident asperiores. Qui
                        ad ipsam beatae assumenda iste doloremque vitae adipisci
                        fugit alias omnis atque dolor ut officia aliquam, nihil
                        vero nulla natus laborum iusto soluta necessitatibus
                        dolorem ab! Earum, dolorum eaque?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
