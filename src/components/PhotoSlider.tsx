// Імпортуємо компоненти Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Імпортуємо модулі для навігації та пагінації
import { Navigation, Pagination } from 'swiper/modules';
// Імпортуємо стилі Swiper


const PhotoSlider = () => {
    return (
        <div className="relative w-full h-auto">
            <h2 className="text-center text-4xl font-bold mb-8">Галерея</h2>
            <Swiper
                modules={[Navigation, Pagination]} // Підключаємо модулі
                navigation // Увімкнення кнопок навігації
                pagination={{ clickable: true }} // Увімкнення пагінації
                spaceBetween={20} // Проміжки між слайдами
                slidesPerView={1} // Кількість слайдів на екрані
                loop={true} // Включення циклічного прокручування
            >
                {/* Слайди */}
                <SwiperSlide>
                    <img
                        src="/#"
                        alt="Фото 1"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/#"
                        alt="Фото 2"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/#"
                        alt="Фото 3"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </SwiperSlide>
                {/* Додайте більше слайдів, якщо потрібно */}
            </Swiper>
        </div>
    );
};

export default PhotoSlider;
