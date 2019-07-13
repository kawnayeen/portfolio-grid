import React from 'react';
import ContactFormGroup from "./contact.form.group";

const ContactFormTextArea = ({icon, placeHolder}) => {
    return (
        <ContactFormGroup icon={icon}>
            <textarea
                rows="5"
                className="form-control bg-inverse text-white"
                placeholder={placeHolder}/>
        </ContactFormGroup>
    );
};

export default ContactFormTextArea;