// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/CategorySlider.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Card from '../category/Card';

const CategorySlider = () => {
    return (
        <div className="bg-[#E2E6E0]">
            <div className="px-4 lg:px-0 max-w-6xl mx-auto w-full">
                <div className="-mt-14 relative">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        pagination={false}
                        navigation={{
                            prevEl: ".custom-swiper-button-prev",
                            nextEl: ".custom-swiper-button-next"
                        }}
                        breakpoints={{
                            240: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            450: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            730: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            830: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1068: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                            1254: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="swiper-category"
                    >
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full flex items-center justify-between absolute right-0 px-4">
                        <div>
                            <h1 className="text-xl font-bold text-[#1B380A]">Categories</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="cursor-pointer py-1 px-4 border rounded-full bg-white custom-swiper-button-prev">
                                Prev
                            </div>
                            <div className="cursor-pointer py-1 px-4 border rounded-full bg-white custom-swiper-button-next">
                                Next
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySlider