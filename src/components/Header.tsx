import React, { useState } from "react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Стан для навігації
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Стан для меню мов
    const [currentLanguage, setCurrentLanguage] = useState("RU"); // Поточна мова

    return (
        <header className="bg-gray-200  flex items-center justify-between px-6 py-4 bg-secondary fixed top-0 left-0 w-full z-50 shadow-md">
            {/* Бутерброд-меню для навігації */}
            <div className="relative">
                <button
                    className="flex items-center justify-center w-12 h-12 bg-primary text-secondary shadow-lg hover:bg-accent transition-all duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18h16.5"
                        />
                    </svg>
                </button>
                <nav
                    className={`absolute top-14 left-0 bg-primary text-secondary rounded-lg shadow-lg p-4 space-y-4 transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                    }`}
                >
                    <a href="#biography" className="block text-lg hover:text-accent transition">
                        Биография
                    </a>
                    <a href="#gallery" className="block text-lg hover:text-accent transition">
                        Галерея
                    </a>
                    <a href="#contacts" className="block text-lg hover:text-accent transition">
                        Контакты
                    </a>
                </nav>
            </div>

            {/* Соціальні мережі */}
            <div className="hidden md:flex space-x-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition"
                    aria-label="Instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition"
                    aria-label="YouTube"
                >
                    <i className="fab fa-youtube"></i>
                </a>
            </div>

            {/* Вибір мови */}
            <div className="relative">
                <button
                    className="flex items-center px-4 py-2 bg-primary text-secondary rounded shadow-md hover:bg-accent transition"
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                    <span className="ml-2">{currentLanguage}</span>
                </button>
                <ul
                    className={`absolute right-0 mt-2 w-32 bg-white text-primary rounded-md shadow-lg p-2 space-y-1 transition-transform duration-300 ease-in-out ${
                        isLanguageMenuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                    }`}
                >
                    <li
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setCurrentLanguage("RU");
                            setIsLanguageMenuOpen(false);
                        }}
                    >
                        RU
                    </li>
                    <li
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setCurrentLanguage("EN");
                            setIsLanguageMenuOpen(false);
                        }}
                    >
                        EN
                    </li>
                    <li
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setCurrentLanguage("NED");
                            setIsLanguageMenuOpen(false);
                        }}
                    >
                        NED
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
