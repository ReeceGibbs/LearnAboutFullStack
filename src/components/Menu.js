import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'
import DevelopmentHeader from '../images/icons/build.png'
import DevelopmentLogo from '../images/icons/web-development.png'
import PHPHeader from '../images/icons/php-code.png'
import PHPLogo from '../images/icons/php.png'
import WordPressHeader from '../images/icons/add.png'
import WordPressLogo from '../images/icons/wordpress.png'
import MERNHeader from '../images/icons/ui-design.png'
import MERNLogo from '../images/icons/programming.png'
import BackEndLogo from '../images/icons/backend.png'
import BackEndHeader from '../images/icons/backend-small.png'
import WebServerLogo from '../images/icons/cloud-server.png'
import WebServerHeader from '../images/icons/server.png'

//our menu component
const Menu = () => {

    const [isSmallDisplay, setIsSmallDisplay] = useState(window.innerWidth < 1200);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const smallDisplayCheck = window.innerWidth < 1200;
            if (smallDisplayCheck !== isSmallDisplay) setIsSmallDisplay(smallDisplayCheck);
        }, false);
    }, [isSmallDisplay]);

    return (
        <div className="menu-container">
            <div className= {`${isSmallDisplay ? "small-display" : ""} d-flex justify-content-center flex-row bd-highlight mb-3 menu`}>
                <MenuItem 
                    headerLogo = {DevelopmentHeader} 
                    logo = {DevelopmentLogo} 
                    label = "what is full stack web development?" 
                    modalType = "normal-modal" 
                    body = {
                        <div>
                            <p>
                                In order to understand what full stack web development is we first need to understand the term 'stack'.
                                The term 'stack' is used to describe a number of different technologies and frameworks that are used 
                                in conjunction with one another to produce an application. For example in the MEAN stack; MongoDB, 
                                Express, AngularJS and Node.js are all used to produce a functioning web application. Full stack web 
                                development can be described as the *act* of utilizing all of the technologies within a given stack 
                                in order to produce your desired product.
                            </p>
                        </div>
                    }
                />
                <MenuItem 
                    headerLogo = {PHPHeader} 
                    logo = {PHPLogo} 
                    label = "what is the purpose of php?" 
                    modalType = "normal-modal" 
                    body = {
                        <div>
                            <p>
                                PHP is a server-side language that can be used to write back end logic for your web application. 
                                PHP code is often used to handle HTTP requests coming from the front end. Your PHP code will take 
                                these requests within their given context and perform actions such as data retrieval from a database 
                                management system like MySQL and return an appropriate response to the browser based on the result of 
                                the action performed. 
                            </p>
                        </div>
                    }
                />
                <MenuItem 
                    headerLogo = {WordPressHeader} 
                    logo = {WordPressLogo} 
                    label = "how customizable is wordpress?" 
                    modalType = "normal-modal" 
                    body = {
                        <div>
                            <p>
                                WordPress is one of the most popular low-code platforms used for creating and maintaining web-sites and 
                                basic web applications. WordPress allows you to configure your web-site's content, themes, the function 
                                of various components like buttons or forms, the scheduling of data backups, search engine optimization, 
                                server-side caching and security. WordPress also allows you to add and remove plugins at will, allowing 
                                you to add e-commerce functionality to your website to sell Shopify products for example. Above and beyond 
                                this, you can manipulate logic and styling on a more granular level by writing your own CSS and PHP for certain 
                                components. <a href="https://websitesetup.org/customize-wordpress-101/+" target="_blank">https://websitesetup.org/customize-wordpress-101/+</a>
                            </p>
                        </div>
                    }
                />
            </div>
            <div className= {`${isSmallDisplay ? "small-display" : ""} d-flex justify-content-center flex-row bd-highlight mb-3 menu`}>
                <MenuItem 
                    headerLogo = {MERNHeader} 
                    logo = {MERNLogo} 
                    label = "what is the mern stack?" 
                    modalType = "normal-modal" 
                    body = {
                        <div>
                            <p>
                                MERN is an acronym for MongoDB, Express, ReactJS and Node.js.
                                <br/>
                                <br/>
                                <ul>
                                    <li>
                                        MongoDB - a non-relational database management system used for storing and manipulating data related to your web application.
                                    </li>
                                    <li>
                                        Express - a JavaScript based back end framework that is used to handle your application's server-side logic and to act as a 
                                        go-between for your front end and the database. Using Express you can easily define endpoints that can be hit using HTTP 
                                        requests from the front end. Within these endpoints you define the logic and processes that must be carried out based on 
                                        the context of the request being sent. For example if you need to populate a drop-down list on your application's front end 
                                        with a list of customers that exist in your database, you can send a GET request from the front end to a specified endpoint 
                                        in your Express layer. Once the request hits your Express layer you can handle that request and retrieve the list of customers 
                                        from your database and return it in JSON format to your application's front end where it can be displayed.
                                    </li>
                                    <li>
                                        ReactJS - ReactJS is a very popular front end framework that is used to quickly and easily design and implement the front end 
                                        layer of your web application. ReactJS is known for its virtual Document Object Model that allows you manipulate the state of 
                                        various components on your web page without needing to refresh. ReactJS is isomorphic and can therefore be used to write 
                                        client-side and server-side code.
                                    </li>
                                    <li>
                                        Node.js - A back end runtime upon which server-side JavaScript logic can be run. Traditionally JavaScript ran solely in the 
                                        browser. However with the introduction of Node.js, server-side logic can now be written and run on the back end to serve your 
                                        application's front end.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    }
                />
                <MenuItem 
                    headerLogo = {BackEndHeader} 
                    logo = {BackEndLogo} 
                    label = "back end components" 
                    modalType = "normal-modal" 
                    body = {
                        <div>
                            <p>
                                The back end of a web application typically consists of the following:
                                <br/>
                                <br/>
                                <ul>
                                    <li>
                                        Web server - a web server is a layer of your application that sits on a server (either a physical server or a virtual machine) 
                                        and hosts your web application. The web server is responsible for delivering your web application's content to a client's machine 
                                        if and when they access your web application through a predefined URL. When a client accesses your website or makes use of any functionality 
                                        on your site that requires content from the server, a request is sent through to the web server and is processed accordingly. Often 
                                        both the back end and front end content of your application will be hosted on the same web server unless you have allowed for Cross 
                                        Origin Resource Sharing, this means that more often than not, both front end and back end requests will be sent to the same IP address, 
                                        but depending on the port number and Uniform Resource Identifier of the request, will be sent to a different end point. This is all handled 
                                        by the web server. Common web servers include; IIS, Apache and Nginx.
                                    </li>
                                    <li>
                                        Application server - an application server contains the actual code/logic that will be used to process HTTP requests and return valid responses. 
                                        These application servers are most often written using a framework like Express or ASP.NET WebAPI. These application servers will generally have 
                                        methods defined that are hit using a specific Uniform Resource Identifier and are written to return a response in a specific format that the front 
                                        end expects and can handle without any hiccups.
                                    </li>
                                    <li>
                                        Proxy server - a proxy server is primarily responsible for directing request traffic. In our case we will most likely use a type of proxy server 
                                        called a reverse proxy server. This type of proxy server takes incoming requests for content and directs the traffic to the correct application on 
                                        the web server based the desired end point of the request. The traffic is usually directed based on the port through which the request is coming. 
                                        For example if we have our Express application sitting on port 5000 and our ReactJS front end sitting on port 80 on the same IP address, the proxy 
                                        server will know that all requests coming through port 5000 should be pointed at the Express application and all requests coming through port 80 should 
                                        hit the ReactJS application.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    }
                />
                <MenuItem 
                    headerLogo = {WebServerHeader} 
                    logo = {WebServerLogo} 
                    label = "web browser requests" 
                    modalType = "normal-modal" 
                    body = {
                        <div>
                        <p>
                            When a web browser makes a request to a server, a specific Uniform Resource Identifier is defined and sent through to the server to be processed. The logic sitting 
                            on the server will be carried out based on the content of the request and a valid response will be sent back to the web browser that made the request. 
                            <br/>
                            <br/>
                            Server Side Rendering can be described in the following way. Whatever HTML and CSS you have written and is being hosted on your server is delivered to a web browser 
                            in the exact way you wrote it.
                            <br/>
                            <br/>
                            Client Side Rendering can be described as your server delivering the scaffolding for your web page to a web browser and depending on the user's context and what action 
                            they are performing on your page the Document Object Model is manipulated and the content of your HTML elements changes because of this. All of this processing happens 
                            on the client-side within the web browser.
                        </p>
                    </div>
                    }
                />
            </div>
        </div>
    )
}

export default Menu
