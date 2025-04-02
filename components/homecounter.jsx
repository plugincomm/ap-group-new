import { useEffect, useState } from "react";
import $ from "jquery";

export default function Counter() {
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const oTop = $("#counter").offset()?.top - window.innerHeight;
      if (counted === 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");

          $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });

        setCounted(1); // ✅ Proper state update
      }
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll); // ✅ Cleanup function
    };
  }, [counted]); // ✅ Dependency array

  return (


<div className="counters text-center">
            
<div className="row" id="counter">
	<div className="col-xs-6 col-sm-3">                        
	<div className="box">          
		<h3>INDUSTRY EXPERIENCE</h3>
		<h2 className="my-2"><span className="count" data-count="15">1</span>+ Years</h2>
		<p className="textmuted">of Trusted <br/> Expertise</p>
	</div>
	</div>
	<div className="col-xs6 col-sm-3"> 
		<div className="box">   
		<h3>HERITAGE OF WISDOM</h3>
		<h2 className="my-2"><span className="count" data-count="4">0</span> Generations</h2>
		<p className="textmuted">in Astrology and Vastu <br/> Expertise</p>
		</div> 
	</div>
	<div className="col-xs6 col-sm-3"> 
		<div className="box">
		<h3>CLIENT SATISFACTION</h3>
		<h2 className="my-2"><span className="count" data-count="100">50</span>+</h2>
		<p className="textmuted">Across <br/> Diverse Sectors</p>
		</div>
	</div>
	<div className="col-xs6 col-sm-3">    
		<div className="box">
		<h3>EXTENSIVE SERVICES</h3>
		<h2 className="my-2"><span className="count" data-count="5">0</span> Core</h2>
		<p className="textmuted">Offerings <br/> Tailored to Your Needs</p>
		</div>	
	</div>
</div>
</div>

  );
}
