import React from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
//import img from 'next/image'
import Testimonals from '../components/testimonials'
import Homecounter from '../components/homeCounter'

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>                 
                <div className="banner-slider owl-crowsel-section">
                    <div className="container-fluid px-0">
                        
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src="images/AP-grp-hero-video.mp4" type="video/mp4" />
                        </video>
                        <div className="arrow bounce">
                            
                        <a href="#">
                        <Image
                            src="/images/icon-chevron-down.png"
                            width={40}
                            height={40}
                            alt="Arrow"
                            />
                        </a>
                        </div>
                    </div>
                </div>

                
<div className="lightyl-bg">
<section id="" className="about-section section-space section-one">
<div className="container">		
  <div className="row">
	<div className="col-sm-6">
	    <div className="info-wrap"> 
	    <div className="title-head">
          <h2><span>AP</span> Group</h2>
          <h4>Four Generations of Wisdom</h4>
          </div>
         <div className="info"><p>
          We believe spaces shape lives. Whether it&apos;s the home you live in&comma; the office you work in&comma; or the land you invest in&comma; every space carries energy. 
          At AP Group&comma; we bring together ancient Vastu wisdom and modern design principles to create harmony&comma; prosperity and success in your life.
      </p></div>
      
      <div className="btns">   
	 <a href="#">Explore Our Services
	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
     </a>
	 <a href="#" className="outline">About Us 
	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
	 </a>
  </div>
  </div> 
    </div>  
    <div className="col-sm-6">
      <div className="image">
      <Image
        src="/images/vastu-yantra.gif"
        width={448}
        height={449}
        alt="vastu yantra"
        className="img-fluid"
        />
     </div>
    </div>
  </div>
  </div>
</section>

<section className="about-product section-space section-two">
    <div className="container">
        <div className="title-head title-head01 about-rice text-center">
            <p>The Science of Space. The Art of Balance.</p>
            <h4>Our Businesses</h4>
        </div>
        <div className="rows">
            <div className="col01 col">
                <div className="two-wraper">
                <a href="#!" className="wraper">
                 <div className="about-img">
                 <Image
        src="/images/business-img1.jpg"
        width={297}
        height={318}
        alt="business image"
        className="img-fluid"
        />
        </div>
                 <h6>Ap Glamray <br/> Solutions Pvt. Ltd.</h6>
                </a>
                <a href="#!" className="wraper">
                 <div className="about-img">
                 <Image
        src="/images/business-img2.jpg"
        width={297}
        height={318}
        alt="business image"
        className="img-fluid"
        />
        </div>
                 <h6>Ap Printing <br/> Solutions</h6>
                </a>
                </div>
                
                <a href="#!" className="wraper">
                 <div className="about-img">
                 <Image
                    src="/images/business-img4.jpg"
                    width={620}
                    height={313}
                    alt="business image"
                    className="img-fluid"
                    />
                </div>
                 <h6>Ap Interior & Design Pvt. Ltd.</h6>
                </a>
            </div>

            {/*
            <div className="col02 col">
                <a href="#!" className="wraper">
                 <div className="about-img"><img src="images/business-img3.jpg" className="img-fluid"/></div>
                 <h6>Astro Vaastupaay by <br/> Aditya Pareek Pvt. Ltd.</h6>
                </a>
            </div> */}
            <div className="col03 col">
                <a href="#!" className="wraper">
                 <div className="about-img">
                 <Image
                    src="/images/business-img5.jpg"
                    width={620}
                    height={313}
                    alt="business image"
                    className="img-fluid"
                    />
                    </div>
                 <h6>Glamray Solutions</h6>
                </a>
                <div className="two-wraper">
                <a href="#!" className="wraper">
                 <div className="about-img">
                 <Image
                    src="/images/business-img6.jpg"
                    width={297}
                    height={318}
                    alt="business image"
                    className="img-fluid"
                    />
                    </div>
                 <h6>Ap Dream Land and <br/> Developments Pvt. Ltd.</h6>
                </a>
                <a href="#!" className="wraper">
                 <div className="about-img">
                 <Image
                    src="/images/business-img7.jpg"
                    width={297}
                    height={318}
                    alt="business image"
                    className="img-fluid"
                    />
                    </div>
                 <h6>Fivetech</h6>
                </a>
                </div>
            </div>
        </div>
    </div>
 </section>
 
 <section className="about-section section-space section-one section-three">
<div className="container">		
  <div className="row">
	<div className="col-sm-6"> 
	   <div className="info-wrap"> 
    	    <div className="title-head title-head01">
              <h2>Blending Tradition with <br/> Transformation</h2>
             </div>
             <div className="info"><p>
              Since 2011&comma; AP Group has seamlessly merged ancestral wisdom with modern innovation&comma; offering Vastu-aligned solutions in interior design&comma; real estate&comma; security&comma; printing&comma; and beyond.
            </p>
            <p>
                Led by Aditya Pareek&comma; a fourth-generation Astrologer & Vastukar&comma; the company goes beyond construction—it creates purposeful environments&comma; builds legacies&comma; and redefines excellence in design&comma; security&comma; and sustainability.
            </p></div>
              <div className="btns">   
        	 <a href="#">Learn More
        	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
             </a>
        	 <a href="#" className="outline">Enquire Now 
        	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
        	 </a>
          </div>
      </div>
    </div>  
    <div className="col-sm-6">
      <div className="image">
      <Image
        src="/images/ap-p.png"
        width={936}
        height={870}
        alt="business image"
        className="img-fluid"
        />
    </div>
    </div>
  </div>
  </div>
</section>
 
</div>

<section className="about-product section-space section-four">
    <div className="section-four-in">
    <div className="container">
        <div className="title-head title-head01 about-rice text-center">
            <p>From ancestral wisdom to modern innovation</p>
            <h4>Pareek Legacy <br/> Four Generations of Wisdom </h4>
        </div>
        <div className="containerbtm">
		<div className="row left">
			<div className="col-sm-5">
			<div className="image">
            <Image
                src="/images/p1.png"
                width={359}
                height={375}
                alt="Mr. Rajguru Balabaksh Pareek Ji"
                className="img-fluid"
                />
			
			</div>
			</div>
			<div className="col-sm-7">
			<div className="info">
			<h4>Mr. Rajguru Balabaksh Pareek Ji</h4>
			<p>Across four generations&comma; the Pareek legacy unfolds with wisdom and spirituality. Pardadaji&comma; the venerable Mr. Rajguru Balabaksh Pareek Ji&comma; 
			despite his blindness&comma; was bestowed with profound knowledge and expertise in astrology.</p>
			</div>
			</div>
		</div>
		
		<div className="row right">			
			<div className="col-sm-7">
			<div className="info">
			<h4>Mr. Rajguru Laxmi Narayan Pareek</h4>
			<p>His spiritual journey paved the way for Dadaji&comma; Mr. Rajguru Laxmi Narayan Pareek&comma; a preacher of god and an exemplar in vastu and astrology.</p>
			</div>
			</div>
			<div className="col-sm-5">
			<div className="image">
            <Image
                src="/images/p2.png"
                width={359}
                height={375}
                alt="Mr. Rajguru Laxmi Narayan Pareek"
                className="img-fluid"
                />
			
			</div>
			</div>
		</div>		
			
		<div className="row left">
			<div className="col-sm-5">
			<div className="image">
            <Image
                src="/images/p3.png"
                width={359}
                height={375}
                alt="Mr. Dinesh Pareek"
                className="img-fluid"
                />						
			</div>
			</div>
			<div className="col-sm-7">
			<div className="info">
			<h4>Mr. Dinesh Pareek</h4>
			<p>The torch passed to the next generation&comma; embodied by Mr. Dinesh Pareek&comma; a true Bhraman dedicated to serving the community through prayers and temple rituals. 
			His deep knowledge of religious literature and astrology continues the rich legacy of spiritual wisdom. Each generation is a beacon of enlightenment&comma; adding to 
			the enduring Pareek family legacy.</p>
			</div>
			</div>
		</div>
		</div>
		
		
        <Homecounter />	
    </div>
    </div>
 </section>
 
<section id="" className="about-section section-space section-one section-six">
<div className="container">		
  <div className="row">
    <div className="col-sm-6">
      <div className="image">
      <Image
        src="/images/core-img.png"
        width={936}
        height={870}
        alt="Sustainability at Core image"
        className="img-fluid"
        />
    </div>
    </div>
	<div className="col-sm-6">
	    <div className="info-wrap">  
    	    <div className="title-head title-head01">
              <h2>Sustainability at Core</h2>
             </div>
             <div className="info">
                <p>
                  At AP Group&comma; sustainability is more than a responsibility—it&apos;s our commitment to shaping a better future. We integrate eco-conscious practices across our 
                  business units&comma; ensuring every project contributes to a healthier planet and resilient communities
                </p>
                
                <ul>
                    <li>Energy-Efficient Solutions: From solar power systems to optimized energy management&comma; we prioritize sustainability in every detail.</li>
                    <li>Eco-Friendly Designs: Our interior and development projects balance aesthetics with environmental harmony.</li>
                    <li>Building for the Future: Through durable and green infrastructure&comma; we focus on long-term benefits for people and the environment.</li>
                </ul>
            </div>
          <div className="btns">   
        	 <a href="#">Learn More
        	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
        	 </a>
          </div>
          </div>
    </div>  
  </div>
  </div>
</section>
 
 
<section className="about-product business-section section-space section-two section-svn">
    <div className="container">
        <div className="title-head title-head01 about-rice text-center">
            <p>Discover. Learn. Transform.</p>
            <h4>Explore Insights.</h4>
        </div>
        
        <div className="row">
			<div className="col-sm-3">
			<div className="box">
			<a href="#">
			<div className="image">
            <Image
            src="/images/blog1.jpg"
            width={414}
            height={375}
            alt="Blog image"
            className="img-fluid"
            />
        </div>  
            <div className="info">
              <h3>The Rise of Astro-Finance: Can Astrology Guide Investments?</h3>     
              <p>March 20&comma; 2025</p>                
            </div> 
			</a>
			</div>
			</div>
			<div className="col-sm-3">
			<div className="box">
			<a href="#">
			<div className="image">
            <Image
            src="/images/blog2.jpg"
            width={414}
            height={375}
            alt="Blog image"
            className="img-fluid"
            />
            </div>  
            <div className="info">
              <h3>How to Remove Negative Energy Using Astrology & Vastu?</h3>     
              <p>March 20&comma; 2025</p>                  
            </div> 
			</a>
			</div>
			</div>
			<div className="col-sm-3">
			<div className="box">
			<a href="#">
			<div className="image">
            <Image
            src="/images/blog3.jpg"
            width={414}
            height={375}
            alt="Blog image"
            className="img-fluid"
            />
            </div>  
            <div className="info">
              <h3>Astrology & AI: Can Computers Predict Your Future?</h3>     
              <p>March 20&comma; 2025</p>                    
            </div> 
			</a>
			</div>
			</div>
			<div className="col-sm-3">
			<div className="box">
			<a href="#">
			<div className="image">
            <Image
            src="/images/blog4.jpg"
            width={414}
            height={375}
            alt="Blog image"
            className="img-fluid"
            />
            </div>  
            <div className="info">
              <h3>Online Kundli Matching: Does It Really Work?</h3>     
              <p>March 20&comma; 2025</p>                     
            </div>  
			</a>
			</div>
			</div>
		</div>
        
        <div className="btns text-center">   
        	 <a href="#">View All Blogs
        	 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
        	 </a>
          </div>
    </div>
 </section>
 

<section className="about-product section-space section-egh">
    <div className="container">
        <div className="title-head title-head01 about-rice text-center">
            <p>4.9+ Happy Clients</p>
            <div className="rating">
            <Image
            src="/images/rating.png"
            width={158}
            height={24}
            alt="rating image"
            className="img-fluid"
            />
            </div>
            <h4>Real Results. Real Transformations. <br/> Now It&apos;s Your Turn.</h4>
        </div>
    </div>
    
        <Testimonals />	
</section>




            </Layout>
        )
    }
}
