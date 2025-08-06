import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">📞 Контакты</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600" />
            <a href="tel:+996501597022" className="hover:underline">
              +996 501 597 022
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Киргизия, Бишкек</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-600" />
            <a
              href="mailto:asadkhakimov05@gmail.com"
              className="hover:underline"
            >
              asadkhakimov05@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaTelegram className="text-sky-500" />
            <a
              href="https://t.me/Asad220505"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @Asad220505
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-black dark:text-white" />
            <a
              href="https://github.com/Asad220520"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Asad220520
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
