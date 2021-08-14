// we import our react library
import React from 'react'

// our actual footer function component
const Footer = ({ title, logo }) => {

    // we define our element to return
    return (
        <footer className="footer">
            <img src={logo} /><h2>{title}</h2>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
}

//our default footer properties
Footer.defaultProps = {

    title: 'this is a footer'
}

export default Footer
