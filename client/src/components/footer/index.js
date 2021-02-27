import React from "react";
import ContactSection
    from "./contact-section/ContactSection";
import Map from "./map/Map";
import './footer.css'

const footerStyle = {
    backgroundColor: "#b7b7b7",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "400px",
    width: "100%",
    marginTop: -20
};


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 50.43275829324964,
    lng: 30.321494511502227,
} // our location object from earlier

export function Footer() {
    return (
        <div>
            <div style={footerStyle}>
                <Map location={location} zoomLevel={17}/>
                <ContactSection/>
            </div>
        </div>
    );
}

