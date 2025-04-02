import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default class Testimonals extends React.Component {
    render() {
        return (
            <>
                <Swiper
                speed= {5000}
                spaceBetween={40}
                
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: true
                  }}
                  
                  modules={[Autoplay]}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
                
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                  }}
                >
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
               
                </Swiper>


                <Swiper
                speed= {5000}
                spaceBetween={40}
                reverseDirection= {true }
                inverse =  {true }
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                  }}
                >
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="box1">
					<div class="info">							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
						<div class="auth">
						    <p><b>Lorem ipsum dolo</b></p>
						    <p>Lorem ipsum</p>
						</div>
					</div>
				   </div>
                </SwiperSlide>
               
                </Swiper>
            </>
        )
    }
}
