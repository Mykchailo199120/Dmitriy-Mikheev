import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


const VideoSlider = () => {
    return (
        <div className="relative w-full h-auto mt-16">
            <h2 className="text-center text-4xl font-bold mb-8">Відео</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
            >
                {/* Слайди з YouTube відео */}
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <iframe
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <iframe
                            width="700"
                            height="394"
                            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <iframe
                            width="700"
                            height="394"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </SwiperSlide>
                {/* Додайте більше слайдів за потреби */}
            </Swiper>
        </div>
    );
};

export default VideoSlider;
