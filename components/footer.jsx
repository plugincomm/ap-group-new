import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default class AppFooter extends React.Component {
    render() {
        return (
            
            <>

 <div className="footer">
 <div className="container-fluid">
   <div className="container">
     <div className="row">
         <div className="col-sm-8">
             <div className="row">
                 <div className="col-sm-2">
                     <div className="img-wraper">
                     <img src="images/footer-logo.png" className="img-fluid" alt="logo" />
                   </div>
                 </div>
                 <div className="first col-lg-5 col-md-6 col-sm-12">
                     <div className="wraper">
                       <h6>Businesses</h6>
                       <ul>
                         <li><a href="#!">Ap Glamray Solutions Pvt.Ltd.</a></li>
                         <li><a href="#!">Ap Interior & Design Pvt.Ltd.</a></li>
                         <li><a href="#!">Ap Printing Solutions</a></li>
                         <li><a href="#!">Astro Vaastupaay by Aditya Pareek Pvt.Ltd.</a></li>
                         <li><a href="#!">Glamray Solutions</a></li>
                         <li><a href="#!">Ap Dream Land and Developments Pvt.Ltd.</a></li>
                         <li><a href="#!">Fivetech</a></li>
                       </ul>
                     </div>
                   </div>
           
                   <div className="second col-lg-2 col-md-6 col-sm-12">
                     <div className="wraper">
                       <h6>Company</h6>
                       <ul>
                         <li><a href="#!">About Us</a></li>
                         <li><a href="#!">Careers</a></li>
                         <li><a href="#!">Sustainability</a></li>
                         <li><a href="#!">Contact Us</a></li>
                        
                       </ul>
                     </div>
                   </div>
           
                   <div className="third col-lg-3 col-md-6 col-sm-12">
                     <div className="wraper">
                       <h6>Resources</h6>
                       <ul>
                         <li><a href="#!">Blogs</a></li>
                         <li><a href="#!">Media</a></li>
                         <li><a href="#!">Testimonials</a></li>
                       </ul>
                     </div>
                   </div>
             </div>
         </div>
         <div className="fourth col-sm-4">
             <div className="wraper">
              <div className="top">
               <p><i>Subscribe to our newsletter for exclusive updates, insights, delivered right to your inbox.</i></p>
               
                 <div className="newsl">
                   <input type="text" placeholder="Your email" />
                    <div className="btns">   
                        <button type="submit">Subscribe
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
                        </button>
                     </div>
                 </div>
              </div>
             </div>
         </div>
       
     </div>
     
     <div className="footer-btm-mid">
       <div className="containers">
       <div className="footer-mid-right">  
       <p><img src="images/phone.png" /> <a href="#">+91-97171-13399</a>  | <a href="#">  +91-124-4242426</a> </p>
       <p><a href="mailto:info@ap.group"><img src="images/mailic.png" /> info@ap.group</a></p>
       <p><img src="images/location.png" /> AP Group, EHTP Urban Estate, Sector - 34, Gurugram - 122001, Haryana, India</p>
       </div>
       <div className="footer-mid-left">
       <ul>
       <li><a href="#"><img src="images/facebook.png" /> </a></li>
       <li><a href="#"><img src="images/twitter.png" /> </a></li>
       <li><a href="#"><img src="images/linkedin.png" /> </a></li>
       <li><a href="#"><img src="images/youtube.png" /> </a></li>
       </ul>
       </div>
       </div>
       </div>
       
   </div>
 </div>
 
   <div className="footer-btm">
       <div className="container">
       <div className="rows row3">
       <div className="footer-bottom"><h6>© 2025 AP Group. All rights reserved.</h6></div>
       <ul className="wraper">
       <li className="footer-links"><a href="#!">Privacy Policy</a></li>
       <li className="footer-links"><a href="#!">Terms & Conditions</a></li>
       <li className="footer-links"><a href="#!">Terms & Conditions</a></li>
       <li className="footer-links"><a href="#!">Legal Disclaimer</a></li>
       </ul>
     </div>
     </div>
   </div>
</div>

<div className="overlay" style={{'display':'none'}}></div>
<button className="backToTopBtn"><i className="fas fa-angle-up"></i></button>




</>



        )
    }
}
