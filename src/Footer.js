import React from 'react'

const Footer = () => {
  const time = new Date();


  return (
    <footer>
      <p>
        Copyright &copy; {time.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer