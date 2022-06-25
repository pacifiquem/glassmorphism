import React from "react";
import './styles/style.css';

const PayCards = () => {
    return(
        <>
            <div className="card-container">
                <div className="card-number">
                    <p>card number</p>
                    <p className="card-special-font">2342 4532 0989 5674</p>
                </div>
                <div className="expire-date">
                    <p>expire date</p>
                    <p className="card-special-font">21/2024</p>
                </div>
            </div>
        </>
    );
}

export default PayCards