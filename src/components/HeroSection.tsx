import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 300); // Затримка для анімації
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {/* Перша секція */}
            <section
                className="relative flex flex-col md:flex-row items-start justify-between px-6 md:px-16 pt-24 md:pt-28 pb-12 bg-secondary h-screen"
            >
                {/* Лівий блок: Заголовок і текст */}
                <div
                    className={`md:w-1/2 text-primary transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                >
                    <h1
                        className="text-6xl md:text-8xl font-bold mt-14 md:mt-20 leading-tight mb-4"
                        style={{ fontFamily: "'Edu Australia VIC WA NT Hand', cursive" }}
                    >
                        Дмитрий Михеев
                    </h1>
                    <p
                        className="text text-3xl md:text-4xl font-light leading-relaxed"
                        style={{ fontFamily: "'Edu Australia VIC WA NT Hand', cursive", marginLeft: "10%" }}
                    >
                        “ Искусство, рожденное из глубины души, где каждая нота — история, а каждый звук — вечность. ”
                    </p>
                </div>

                {/* Правий блок: Фото */}
                <div
                    className={`md:w-1/2 mt-8 md:mt-0 flex items-center justify-center transition-all duration-1000 ease-in-out delay-200 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <img
                        src="/Dmitrii_Mikheev.JPG"
                        alt="Дмитрий Михеев"
                        className="max-w-[450px] md:max-w-[600px] object-contain rounded-lg shadow-lg mx-auto md:ml-60"
                    />
                </div>
            </section>

            {/* Друга секція */}
            <section
                className="relative flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-12 bg-secondary h-screen"
            >
                {/* Лівий блок: Фото */}
                <div
                    className={`md:w-1/2 mt-8 md:mt-0 flex items-center justify-center transition-all duration-1000 ease-in-out delay-200 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                    style={{marginTop: "170px"}}
                >
                    <img
                        src="/Dmitriy_Mikheev1.JPG"
                        alt="Второе фото"
                        className="max-w-[450px] md:max-w-[600px] object-contain rounded-lg shadow-lg mx-auto md:mr-60"
                    />
                </div>

                {/* Правий блок: Текст */}
                <div
                    className={`md:w-1/2 text-primary text-center transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    } flex flex-col justify-center`}
                    style={{height: "100%"}} // Центрування тексту по висоті
                >
                    <h2
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{fontFamily: "'Edu Australia VIC WA NT Hand', cursive"}}
                    >
                        Великий дар
                    </h2>
                    <p
                        className="text-2xl md:text-3xl font-light leading-relaxed typing-effect"
                        style={{fontFamily: "'Edu Australia VIC WA NT Hand', cursive"}}
                    >
                        " Вдохновлять каждого, кто слышит его звучание. Через музыку раскрываются самые глубокие эмоции, соединяя сердца и показывая, что искусство — это язык, понятный каждому. Каждый его выход на сцену становится незабываемым моментом, где музыка превращается в источник вдохновения, пробуждая в людях любовь, надежду и стремление к прекрасному. ”
                    </p>
                </div>
            </section>

            {/* Третя секція */}
            <section
                className="relative flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-12 bg-secondary h-screen"
            >
                {/* Лівий блок: Текст */}
                <div
                    className={`md:w-1/2 text-primary transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <h2
                        className="text-5xl md:text-6xl font-bold mt-14 md:mt-20 leading-tight mb-4"
                        style={{fontFamily: "'Dancing script', cursive" }}
                    >
                        Мост между душой и вечностью
                    </h2>
                    <p
                        className="text-2xl md:text-3xl font-light leading-relaxed"
                        style={{ fontFamily: "'', cursive" }}
                    >
                        " Где каждая нота становится вдохновением, язык сердца, которое способно вдохновить, и исцелить каждого из нас. "
                    </p>
                </div>

                {/* Правий блок: Фото */}
                <div
                    className={`md:w-1/2 mt-8 md:mt-0 flex items-center justify-center transition-all duration-1000 ease-in-out delay-200 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <img
                        src="/Dmitriy_Mikheev_2.JPG"
                        alt="Третье фото"
                        className="max-w-[450px] md:max-w-[600px] object-contain rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
