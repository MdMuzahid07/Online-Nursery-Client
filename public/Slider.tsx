// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/sliderStyle.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img className="w-full" src="../../../public/slider-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="../../assets/slider-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="../../assets/slider-3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider