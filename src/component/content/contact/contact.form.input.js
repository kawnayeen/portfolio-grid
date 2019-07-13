import React from 'react';
import ContactFormGroup from "./contact.form.group";

const ContactFormInput = ({icon, placeHolder}) => {
    return (
        <ContactFormGroup icon={icon}>
            <input type="text" className="form-control bg-inverse text-white" placeholder={placeHolder}/>
        </ContactFormGroup>
    );
};

export default ContactFormInput;