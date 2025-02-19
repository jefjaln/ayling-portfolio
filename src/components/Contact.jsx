import React from 'react'
import { Icons } from './Icons'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Let's connect and create together.</p>
        <div className="social-container">
            <a href="#">
                <Icons.facebook />
            </a>
        </div>
    </section>
  )
}

export default Contact