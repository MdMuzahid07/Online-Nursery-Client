// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/CategorySlider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../category/Card';

const CategorySlider = () => {
    return (
        // <div className="bg-green-50 min-h-screen">
        //     <div className="max-w-6xl mx-auto -mt-14">
        //         <Swiper
        //             slidesPerView={1}
        //             spaceBetween={20}
        //             pagination={{
        //                 clickable: true,
        //             }}
        //             breakpoints={{
        //                 640: {
        //                     slidesPerView: 2,
        //                     spaceBetween: 20,
        //                 },
        //                 768: {
        //                     slidesPerView: 4,
        //                     spaceBetween: 40,
        //                 },
        //                 1024: {
        //                     slidesPerView: 6,
        //                     spaceBetween: 50,
        //                 },
        //             }}
        //             modules={[Pagination]}
        //             className="mySwiper rounded-t-xl bg-green-50"
        //         >
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card />
        //             </SwiperSlide>
        //         </Swiper>
        //     </div>
        // </div>
        <div className="-mt-14 px-4 lg:px-0">
            <div className="max-w-6xl mx-auto w-full pb-20">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        390: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        680: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
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
            </div>
        </div>
    );
}

export default CategorySlider