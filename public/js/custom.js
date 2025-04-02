$(window).on("load", function() {
  $(window).scrollTop(0);
});

$(document).ready(function(){
  $(".first-slider").owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:5000,
   autoplaySpeed: 3000,
   autoplayHoverPause:false,
   responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
  });

  // owl - Carousel2
  $(".second-slider").owlCarousel({
   loop:true,
   dots:false,
   
   autoplay:true,
   autoplayTimeout:3000,
   autoplaySpeed: 3000,
   autoplayHoverPause:false,
   responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
        }
    }
  });
  // owl - Carousel3
  $(".third-slider").owlCarousel({
   loop:true,
   dots:false,
   nav:true,
   margin:8,
   autoplay:false,
   autoplayTimeout:3000,
   autoplaySpeed: 3000,
   autoplayHoverPause:false,
   responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:true,
        },
        1000:{
            items:4,
            nav:true,
            loop:true,
        }
    }
  });
  // owl - Carousel4
  $(".fourth-slider").owlCarousel({
   loop:true,
   dots:false,
   margin:8,
   autoplay:true,
   autoplayTimeout:4000,
   autoplaySpeed: 3000,
   autoplayHoverPause:false,
   responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:4,
            nav:false,
            loop:true,
        }
    }
  });
  
  $(".product-slider").owlCarousel({
   loop:true,
   dots:false,
   margin:8,
   autoplay:true,
   autoplayTimeout:4000,
   autoplaySpeed: 3000,
   autoplayHoverPause:false,
   responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:2,
            nav:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        }
    }
  });
  
  $(".blog-slider").owlCarousel({
   loop:true,
   dots:false,
   margin:30,
   autoplay:false,
   autoplayTimeout:2400,
   autoplaySpeed: 2500,
   autoplayHoverPause:false,
   responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:2,
            nav:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        }
    }
  });
  
});







const header = document.querySelector(".header");
//console.log(header);
const navLinks = document.querySelectorAll(".links");
//console.log(navLinks);
// const storeBtn = document.querySelector(".store-btn");
// console.log(storeBtn);





const scrollBar  =() =>{
  if(window.scrollY >= 450){
    header.classList.add("header-scroll");
    navLinks.forEach((menu) =>{
      menu.classList.add("scroll");
    });
  }else{
    header.classList.remove("header-scroll");
    navLinks.forEach((menu) =>{
      menu.classList.remove("scroll");
    });
  }
};
document.addEventListener("scroll" , scrollBar);

// Toggle to show and hide navbar menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  burgerMenu.classList.toggle("is-active");
});

// Toggle to show and hide dropdown menu
const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((item) => {
  const dropdownToggle = item.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", () => {
    const dropdownShow = document.querySelector(".dropdown-show");
    toggleDropdownItem(item);

    // Remove 'dropdown-show' class from other dropdown
    if (dropdownShow && dropdownShow != item) {
      toggleDropdownItem(dropdownShow);
    }
  });
});

// Function to display the dropdown menu
const toggleDropdownItem = (item) => {
  const dropdownContent = item.querySelector(".dropdown-content");

  // Remove other dropdown that have 'dropdown-show' class
  if (item.classList.contains("dropdown-show")) {
    dropdownContent.removeAttribute("style");
    item.classList.remove("dropdown-show");
  } else {
    // Added max-height on active 'dropdown-show' class
    dropdownContent.style.height = dropdownContent.scrollHeight + "px";
    item.classList.add("dropdown-show");
  }
};

// Fixed dropdown menu on window resizing
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    document.querySelectorAll(".dropdown-content").forEach((item) => {
      item.removeAttribute("style");
    });
    dropdown.forEach((item) => {
      item.classList.remove("dropdown-show");
    });
  }
});

// Fixed navbar menu on window resizing
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
      burgerMenu.classList.remove("is-active");
    }
  }
});

$(".navbar-block .menu-item.dropdown").mouseover(function() {
    $(".header").addClass("header-over");
	$(".overlay").show();
		
}).mouseout(function() {
    $(".header").removeClass("header-over");
    $(".overlay").hide();		
});

$("div.burger").click(function() {  
	$(".overlay").toggleClass('show');
})



$(document).ready(function() {	
	var $btns = $('.btn').click(function() {
	  if (this.id == 'all') {
	    $('#parent > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});

/*$('#pagination-demo').twbsPagination({
  totalPages: 35,
  visiblePages: 7,
  onPageClick: function (event, page) {
    $('#page-content').text('Page ' + page);
  }
});*/

document.querySelectorAll(".sidebar-left .tab-box .tab-head").forEach((tab) => {
    tab.addEventListener("click", () => {
        const tabBox = tab.parentElement;
        if (tabBox.classList.contains("active")) {
            tabBox.classList.remove("active");
        } else {
            document.querySelectorAll(".sidebar-left .tab-box").forEach((box) => {
                box.classList.remove("active");
            });
            tabBox.classList.add("active");
        }
    });
});


document.querySelectorAll(".sidebar-left .tab-btns button.btn").forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.querySelectorAll("button.btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

				 

const tabs = document.querySelectorAll('.product-details .product-tb button');
const contents = document.querySelectorAll('.product-details .product-tbs');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active-tab'); // Set the active tab
                contents[btnIndex].style.display = 'block'; // Show the associated content
            } else {
                btn.classList.remove('active-tab'); // Remove active class from other tabs
                contents[btnIndex].style.display = 'none'; // Hide other content sections
            }
        });
    });
});    

$(".testimonail-carousel1").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  /*nav: false,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],*/
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 15000,
  autoplay: true,
  responsive: {
    0: {
        items: 1,
      stagePadding: 25
    },
    600: {
      items: 1.2,
      stagePadding: 20
    },
    1000: {
        items: 3.2,
      stagePadding: 50
    },
    1600: {
      stagePadding: 250
    }
  }
});

$(".testimonail-carousel2").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  /*nav: false,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],*/
  //slideTransition: "linear",
  //autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 15000,
  autoplay: true,
  rtl:true,
  responsive: {
    
    0: {
        items: 1,
      stagePadding: 25
    },
    600: {
      items: 1.2,
      stagePadding: 40
    },
    1000: {
        items: 3.2,
      stagePadding: 70
    },
    1600: {
      stagePadding: 300
    }
  }
});



function scrollTop() {
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
  if ($(window).scrollTop() > 500) {
    $(".backToTopBtn").addClass("active");
  } else {
    $(".backToTopBtn").removeClass("active");
  }
}
$(function () {
  // show and hide btn
  scrollTop();
  $(window).on("scroll", scrollTop);

  // body scroll on btn click
  $(".backToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});