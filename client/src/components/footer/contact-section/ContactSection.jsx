import React from 'react'

import Info from './Info/Info'

import './contact-section.css'
import Form from "./Form/Form";

const ContactSection = () => (
    <>
        <div
            className="contact-section animate__animated animate__backInUp">
            <Form/>
            <Info/>
        </div>
    </>
)

export default ContactSection
