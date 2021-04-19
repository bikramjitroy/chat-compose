import React from 'react';

export const DisplayNodeHeader = (props) => {

    return (
            <div className={props.data.class || props.displayColor ? props.displayColor: ''}>
                <div className="blockyleft">
                 <img src={`assets/${props.data.image.split('.').join('blue.')}`} alt={props.data.image}/>
                  <p className="blockyname">{props.data.label}</p>
                </div>
            </div>

    );

};

export const DisplayNodeBody = (props) => {

    return (
        <>
            <div className="blockydiv"></div>
            <div className="blockyinfo">{props.data.description}</div>
        </>
    );
};


