import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default class AppFooter extends React.Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="footer_title">About Us</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="footer_title">Newsletter</h6>
                                <p>Stay updated with our latest trends</p>		
                                <div id="mc_embed_signup">
                                    <form  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                                        <div className="input-group d-flex flex-row">
                                            <input name="EMAIL" placeholder="Email Address" required="" type="email" />
                                            <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>		
                                        </div>									
                                        <div className="mt-10 info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget instafeed">
                                <h6 className="footer_title">Instagram Feed</h6>
                                <ul className="list instafeed d-flex flex-wrap">
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-01.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-02.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-03.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-04.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-05.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-06.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-07.jpg" alt="" fill/></li>
                                    <li><Image src="/static/assets/template/fantom/img/instagram/Image-08.jpg" alt="" fill/></li>
                                </ul>
                            </div>
                        </div>	
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget f_social_wd">
                                <h6 className="footer_title">Follow Us</h6>
                                <p>Let us be social</p>
                                <div className="f_social">
                                    <Link href="#"><i className="fa fa-facebook"></i></Link>
                                    <Link href="#"><i className="fa fa-twitter"></i></Link>
                                    <Link href="#"><i className="fa fa-dribbble"></i></Link>
                                    <Link href="#"><i className="fa fa-behance"></i></Link>
                                </div>
                            </div>
                        </div>						
                    </div>
                    <div className="row footer-bottom d-flex justify-content-between align-items-center">
                        <p className="col-lg-12 footer-text text-center" suppressHydrationWarning={true}>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made with
                            <i className="fa fa-heart-o" aria-hidden="true"></i> by 
                            <Link href="https://colorlib.com" target="_blank">Colorlib</Link>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
