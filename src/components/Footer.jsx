import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <span>Jeffrey Ayling {currentYear}&copy;</span>
    </footer>
  )
}

export default Footer