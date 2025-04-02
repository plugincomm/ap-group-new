import React from 'react'
import Link from 'next/link'
import img from 'next/image'
import Image from 'next/image'
import Splash from './splash'
export default class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPathName: null
        }
    }
    componentDidMount() {
        this.setState({
            currentPathName: window.location.pathname
        });
    }
    render() {       
        return (
            <>
            <header className="header" id="header">
  <nav className="navbar container">
    <div className="navbar-inner">
      <Link className="navbar-brand" href="./">
        <Image
            src="/images/logo.png"
            width={71}
            height={66}
            alt="Logo"
            />
        </Link>
      <div className="burger" id="burger">
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
    </div>
    <div className="navbar-block" id="menu">
      <ul className="menu">       
		<li className="menu-item dropdown pos">
          <a href="#!" className="dropdown-toggle menu-link">
            About  <span className="arrow is-bottom"></span>
          </a>  
			<div className="dropdown-content one-col">
            <div className="dropdown-column">
              <div className="dropdown-group">
                  <p className="title"><b>About</b></p>
                <ul className="dropdown-items">
                  <li><a href="#!" className="dropdown-link">About Us</a></li>
                  <li><a href="#!" className="dropdown-link">Our History</a></li>
                  <li><a href="#!" className="dropdown-link">Careers</a></li>
                </ul>				
              </div>                         
            </div>
          </div>
        </li>
        <li className="menu-item dropdown">
          <a href="#!"  className="dropdown-toggle menu-link">
            Businesses <span className="arrow is-bottom"></span>
          </a>
          <div className="dropdown-content multi-col">
            <div className="dropdown-column">
              <div className="dropdown-group">
                <div className="dropdown-title">
                    <p className="title"><b>Businesses</b></p>
                </div>
                <ul className="dropdown-items">
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Ap Glamray Solutions Pvt.Ltd.</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Ap Interior & Design Pvt.Ltd.</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Ap Printing Solutions</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Astro Vaastupaay by Aditya Pareek Pvt.Ltd.</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Glamray Solutions</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Ap Dream Land and Developments Pvt.Ltd.</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                    <li><a href="#!" className="dropdown-link">
                      <p><b>Fivetech</b></p> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="menu-item">
          <a href="#!"  className="menu-link">
            Sustainability
          </a>          
        </li>
		<li className="menu-item dropdown pos">
          <a href="#!" className="dropdown-toggle menu-link">
            Resources  <span className="arrow is-bottom"></span>
          </a>  
			<div className="dropdown-content one-col">
            <div className="dropdown-column">
              <div className="dropdown-group">
                  <p className="title"><b>Resources</b></p>
                <ul className="dropdown-items">
                  <li><a href="#!" className="dropdown-link">Blogs</a></li>
                  <li><a href="#!" className="dropdown-link">Media</a></li>
                  <li><a href="#!" className="dropdown-link">Testimonials</a></li>
                  <li><a href="#!" className="dropdown-link">Downloads</a></li>
                </ul>				
              </div>                         
            </div>
          </div>
        </li>
		
		
        <li className="menu-item">
          <Link href="contact.html"  className="menu-link">
            Contact
          </Link>          
        </li>
		<li className="menu-item">
		<a className="nav-link store-btn scroll-btn" href="#!">Enquire Now 
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
    	
        </a> 
		</li>
      </ul>
    </div>
  </nav>
</header>

<Splash />

</>
        )
    }
}
