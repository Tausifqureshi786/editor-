import React, { Component } from 'react'

import M from 'materialize-css/dist/js/materialize.min.js';
export class navbar extends Component {

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelector('.sidenav');
            var instances = M.Sidenav.init(elems, {} );
          });
    }


    render() {
        return (
            <div>
                    {/* The main navbar on the top  */}
                        <nav>
                            <div className="nav-wrapper ">

                            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                                <div className="container"> 
                                    <a href="#" className="brand-logo">Logo</a>
                                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        <li><a href="sass.html">Sass</a></li>
                                        <li><a href="badges.html">Components</a></li>
                                        <li><a href="collapsible.html">JavaScript</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                                {/*  the slide out bar coming from left to right */}
                        <ul id="slide-out" className="sidenav">
                            <li>
                                <div className="user-view">
                                    <div className="background">
                                        <img src="images/office.jpg"/>
                                    </div>

                                    <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
                                    <a href="#name"><span class="white-text name">John Doe</span></a>
                                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                                </div>
                            </li>
                            
                            <li>
                                <a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a>
                            </li>
                            
                            <li>
                                <a href="#!">Second Link</a>
                            </li>

                            <li>
                                <div className="divider"></div>
                            </li>
                            <li>
                                <a className="subheader">Subheader</a>
                            </li>

                            <li>
                                <a className="waves-effect" href="#!">Third Link With Waves</a>
                            </li>
                        </ul>
                        
                   
                  
                {/* The end of the Navbar parent div*/}
            </div>
        )
    }
}

export default navbar
