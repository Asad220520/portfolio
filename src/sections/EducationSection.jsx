const education = [
  {
    title: "Курс по React (Udemy)",
    period: "2024",
  },
  {
    title: "Самостоятельное обучение JS, HTML, CSS",
    period: "2023 — сейчас",
  },
];

function EducationSection() {
  return (
    <section id="education" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Образование</h2>
      {education.map((item, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{item.title}</p>
          <p className="text-gray-600">{item.period}</p>
        </div>
      ))}
    </section>
  );
}
export default EducationSection;
