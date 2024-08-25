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
                    <div className="w-full bg-no-repeat bg-cover h-[200px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[700px] bg-[url('../../../public/slider-1.jpg')] flex justify-center items-center">
                        <div className="max-w-7xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing eli repudiandae? Praesentium quod distinctio ipsum impedit doloremque dignissimos quo optio ex alias nihil!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-no-repeat bg-cover h-[200px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[700px] bg-[url('../../../public/slider-2.jpg')] flex justify-center items-center">
                        <div className="max-w-7xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing eli repudiandae? Praesentium quod distinctio ipsum impedit doloremque dignissimos quo optio ex alias nihil!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-no-repeat bg-cover h-[200px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[700px] bg-[url('../../../public/slider-3.jpg')] flex justify-center items-center">
                        <div className="max-w-7xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing eli repudiandae? Praesentium quod distinctio ipsum impedit doloremque dignissimos quo optio ex alias nihil!
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider