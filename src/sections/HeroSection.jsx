// src/sections/HeroSection.jsx
function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Привет, я Фронтенд-разработчик
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
        Создаю современные, быстрые и отзывчивые веб-интерфейсы
      </p>
      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
      >
        Мои проекты
      </a>
    </section>
  );
}

export default HeroSection;
