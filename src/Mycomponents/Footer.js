import React from 'react'

const Footer = () => {
  let footerstyle={
    borderblock: "unset",
    width: "100%",
    position: "relative",
    top:"70vh"
  }
  return (
    <footer  className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>


    </footer>
  )
}

export default Footer
