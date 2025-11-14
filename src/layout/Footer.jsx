import React from 'react'
import NewsletterBanner from '../Components/home/NewsletterBanner'
import ServiceIcons from '../Components/home/ServiceIcon'
import FooterLinks from '../Components/home/FooterLinks'

const Footer = () => {
  return (
    <div>
            <NewsletterBanner />
            <ServiceIcons />
            <FooterLinks />
    </div>
  )
}

export default Footer