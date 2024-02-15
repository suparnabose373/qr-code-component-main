import React from "react";
import "./qrPopup.css";
import qrScanner from "../../images/image-qr-code.png";

export default function QRPopup() {
    return(
        <div className="qr-popup-container">
            <img src={qrScanner} className="qrScanner" alt="qrScanner" />
            <div className="qr-popup-content">
                <div className="qr-popup-header">Improve your front-end skills by building projects</div>
                <div className="qr-popup-body">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
            </div>
        </div>
    )
}