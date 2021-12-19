import React from "react";
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Button from "../components/elements/Button";

function JoinPlatforms() {

  const tilesClasses = classNames(
    'tiles-wrap',
  );

  return (
    <>
      <section className="hero section right-content illustration-section-02" >
          <div className="container-sm">
            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Join the Largest Javascript Community in Kampala and be part of the <span className="text-color-primary">movement</span>
            </h3>
             <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                We have over 300 javascript developers in our circle.
              </p>

            <Swiper
              spaceBetween={90}
              slidesPerView={1.6}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="join-platforms-slider"
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 2.2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 3.2,
                },
              }}
            >
              <SwiperSlide>
                <div className="js-social-card">
                  <div className="card-wrapper">
                    <div className="card-header">
                      <h4>Twitter</h4>
                      <p>Follow our twitter account for daily Js tips and updates.</p>
                    </div>
                    <Button 
                      className={"twitter-follow-button"} 
                      style={{ height:"unset" }} 
                      tag="a" target="_blank" 
                      color="primary" 
                       
                      href="https://twitter.com/JsKampala?ref_src=twsrc%5Etfw">
                    Follow @jsKampala
                    </Button>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="js-social-card">
                  <div className="card-wrapper">
                    <div className="card-header">
                      <h4>Discord</h4>
                      <p>Need instant help from experienced Js Developers?</p>
                    </div>
                    <Button 
                      className={"twitter-follow-button"} 
                      style={{ height:"unset" }} 
                      tag="a" target="_blank" 
                      color="primary" 
                      href="https://discord.com/invite/9VpWAA3EZU">
                      Join our Discord
                    </Button>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="js-social-card">
                  <div className="card-wrapper d-flex">
                    <div className="card-header ">
                      <h4>WhatsApp</h4>
                      <p></p>
                    </div>
                    <Button 
                      className={"twitter-follow-button"} 
                      style={{ height:"unset" }} 
                      tag="a" target="_blank" 
                      color="primary"                        
                      href="//api.whatsapp.com/send?phone=256702131430&text=Hey There, Please add me to the Javascript Community">
                      Send us a message
                    </Button>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="js-social-card">
                  <div className="card-wrapper d-flex">
                    <div className="card-header">
                      <h4>Github</h4>
                      <p>Contribute to open source, Follow our works and Join the team.</p>
                    </div>
                    <Button 
                      className={"twitter-follow-button"} 
                      style={{ height:"unset" }} 
                      tag="a" target="_blank" 
                      color="primary"  
                      href="https://github.com/javaScriptKampala/">
                      Join our Github
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
      </section>
    </>
    );
}

export default JoinPlatforms;