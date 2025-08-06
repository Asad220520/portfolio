const experience = [
  {
    company: "Фриланс",
    role: "Frontend-разработчик",
    period: "2023 — сейчас",
    description: "Разработка лендингов, SPA, работа с клиентами на заказ.",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Опыт</h2>
      {experience.map((item, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold">
            {item.role} — {item.company}
          </h3>
          <p className="text-gray-600">{item.period}</p>
          <p className="mt-2">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
export default ExperienceSection;
