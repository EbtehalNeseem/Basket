import React from 'react'
import ContactHeader from '../components/Contact/ContactHeader'
import ContactForm from '../components/Contact/ContactForm'
import InfoCardsList from "../components/Contact/InfoCardsList"

export default function Contact() {
  return (
    <div className="px-20 ">
      <div className="px-20 ">
        <ContactHeader />
      <InfoCardsList/>
      <ContactForm />
      </div>
    </div>
  )
}

