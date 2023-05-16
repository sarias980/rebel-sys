import React from "react";
import {useNavigate} from "react-router-dom";
import './BackButton.css'

const BackButton: React.FC = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history(-1);
    };

    return(
        <button className={'back-button'} onClick={handleGoBack}>←</button>
    )

}
export default BackButton;
