// SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const SwiperComponent = ({ clients }) => {
    return (
        <section className="client-brand section-space pt-0 service-client">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-1 col-md-2 col-3">
                        <h3 className="text-left border-bold">Our<br /> Clients</h3>
                    </div>
                    <div className="col-xl-11 col-md-10 col-9">
                        <Swiper
                            slidesPerView={3} // Change this to the desired number of visible slides
                            spaceBetween={30} // Space between slides
                            loop={true} // Enable looping of slides
                        >
                            {clients.map((client, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        title={client.name}
                                        width="200"
                                        height="200"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwiperComponent;
