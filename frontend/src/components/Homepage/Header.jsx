// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import model1 from '../../assets/images/model1.png'
import model2 from '../../assets/images/model2.png'
import model3 from '../../assets/images/model3.png'
const Header = () => {
    return (
        <div className="bg-gradient-to-r from-gray-300 to-sky-300">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
                loop={true}
                autoplay={true}
                pagination={{
                    clickable: true,
                    enabled: false,
                }}
                modules={[EffectFade, Navigation, Autoplay, Pagination]}
                className="mySwiper container z-0 h-[500px]"
            >
                <SwiperSlide className="cursor-pointer">
                    <div className="h-full flex items-end">
                        <div className="flex justify-around items-center bg-gradient-to-r from-gray-300 to-sky-300">
                            <img src={model1} alt="" className="w-4/12 pt-10 px-10" />
                            <div className="flex flex-col gap-10 w-6/12">
                                <h2 className="text-5xl font-serif">Country best teachers</h2>
                                <p className="text-2xl">We have brought best teachers together <br /> so that you can learn well.</p>
                                <div><button className="btn btn-outline btn-dark">Learn More</button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                <div className="h-full flex items-end">
                        <div className="flex justify-around items-center bg-gradient-to-r from-gray-300 to-sky-300">
                            <img src={model2} alt="" className="w-4/12 pt-10 px-10" />
                            <div className="flex flex-col gap-10 w-6/12">
                                <h2 className="text-5xl font-serif">Interactive guidline</h2>
                                <p className="text-2xl">Our guidline is based on international standard <br /> & it will help you reach your destination.</p>
                                <div><button className="btn btn-outline btn-dark">Learn More</button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                <div className="h-full flex items-end">
                        <div className="flex justify-around items-center bg-gradient-to-r from-gray-300 to-sky-300">
                            <img src={model3} alt="" className="w-4/12 pt-10 px-10" />
                            <div className="flex flex-col gap-10 w-6/12">
                                <h2 className="text-5xl font-serif">Qualified Certificate</h2>
                                <p className="text-2xl">After completing your course <br /> you will be awarded with certificate.</p>
                                <div><button className="btn btn-outline btn-dark">Learn More</button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;