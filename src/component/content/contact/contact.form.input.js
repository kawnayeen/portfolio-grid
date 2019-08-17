import React from 'react';
import ContactFormGroup from "./contact.form.group";

const ContactFormInput = ({icon, placeHolder, setValue}) => {
    return (
        <ContactFormGroup icon={icon}>
            <input
                type="text"
                className="form-control bg-inverse text-white"
                onChange={e => setValue(e.target.value)}
                placeholder={placeHolder}/>
        </ContactFormGroup>
    );
};

export default ContactFormInput;