import React  from 'react';
import { ContactDetails } from "../containers/contact/ContactDetails";
import { ContactForm } from "../containers/contact/ContactForm";

export function Contact(){
    return <>
    <ContactForm/>
    <ContactDetails/>
    </>
}