import React from "react";
import '../components/styles/style.css';
import PayCards from "../components/pay_cards";

const landingPage = () => {
    return (
        <>
            <div className="container">
                <div className="first-part">
                </div>
                <div className="second-part">
                    <PayCards />
                </div>
            </div>
        </>
    );
}

export default landingPage;