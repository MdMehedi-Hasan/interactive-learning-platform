// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";
import model from '../../assets/images/model.png'
const Header = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper container z-0"
            >
                <SwiperSlide>
                    <div className="flex justify-between items-center bg-green-500 rounded-b-lg">
                        <img src={model} alt="" className="w-4/12"/>
                        <p className="w-6/12 text-3xl">Contrary to popular belief, Lorem Ipsum is not simply random text. <br/> It has roots in a piece of classical Latin literature from 45 BC, <br/> making it over 2000 years old. Richard McClintock.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex justify-between items-center bg-green-500 rounded-b-lg">
                        <img src={model} alt="" className="w-4/12"/>
                        <p className="w-6/12 text-3xl">fsgsdfggggggggggggggggggggggggggggggggggggggggggggggggggfgdfsfgsdfg. <br/> It has roots in a piece of classical Latin literature from 45 BC, <br/> making it over 2000 years old. Richard McClintock.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex justify-between items-center bg-green-500 rounded-b-lg">
                        <img src={model} alt="" className="w-4/12"/>
                        <p className="w-6/12 text-3xl">Contrary to popular belief, Lorem Ipsum is not simply random text. <br/> It has roots in a piece of classical Latin literature from 45 BC, <br/> making it over 2000 years old. Richard McClintock.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex justify-between items-center bg-green-500 rounded-b-lg">
                        <img src={model} alt="" className="w-4/12"/>
                        <p className="w-6/12 text-3xl">Contrary to popular belief, Lorem Ipsum is not simply random text. <br/> It has roots in a piece of classical Latin literature from 45 BC, <br/> making it over 2000 years old. Richard McClintock.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;