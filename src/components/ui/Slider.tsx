// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/sliderStyle.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Slider: React.FC = () => {
    return (
        <>
            <Swiper pagination={true} autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }} modules={[Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="w-full bg-no-repeat bg-cover h-[200px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[700px] bg-[url('../../../public/slider-1.jpg')] flex items-center">
                        <div className="max-w-7xl mx-auto px-4 lg:px-0">
                            <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.28)" }} className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl text-right text-[#ffffff]">Best Three Collection</h1>
                            <p className="text-[#1B380A] text-right text-sm sm:text-2xl md:text-3xl xl:text-5xl sm:mt-4 md:mt-7 xl:mt-10" style={{ textShadow: "2px 2px 4px rgba(255, 255, 255)" }}>
                                Nature is a timeless source of peace and beauty, where life flourishes and everything is interconnected. It nurtures, inspires, and reminds us of the simplicity and resilience found in the world around us.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-no-repeat bg-cover h-[200px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[700px] bg-[url('../../../public/slider-2.jpg')] flex justify-center items-center">
                        <div className="max-w-7xl mx-auto px-4 lg:px-0">
                            <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.28)" }} className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl text-left text-[#ffffff]">We Sale Beauty Of Nature</h1>
                            <p className="text-[#1B380A] text-left text-sm sm:text-2xl md:text-3xl xl:text-5xl sm:mt-4 md:mt-7 xl:mt-10" style={{ textShadow: "2px 2px 4px rgba(255, 255, 255)" }}>
                                Bloom represents life's renewal and beauty, showcasing the vibrant energy of growth and new beginnings. It reminds us that even the smallest seed holds the power to create something extraordinary.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-no-repeat bg-cover h-[200px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[700px] bg-[url('../../../public/slider-3.jpg')] flex justify-center items-center">
                        <div className="max-w-7xl mx-auto px-4 lg:px-0">
                            <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.28)" }} className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl text-right text-[#ffffff]">Nature’s Finest Beauty for You</h1>
                            <p className="text-[#1B380A] text-right text-sm sm:text-2xl md:text-3xl xl:text-5xl sm:mt-4 md:mt-7 xl:mt-10" style={{ textShadow: "2px 2px 4px rgba(255, 255, 255)" }}>
                                Symbolizes our dedication to selecting the most exceptional plants and flowers. It reflects our commitment to showcasing nature’s vibrant elegance and the profound impact of its beauty.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider