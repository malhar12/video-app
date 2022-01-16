import React from "react";
import './Header.scss';

const HeaderComponent = props => {
    return (
        <div className="header-div">
            <h3>{props.title}</h3>
            {
                props.showLine && 
                <div className="line-break"></div>
            }
        </div>
    )
}

export default HeaderComponent;