const ContactUsSection = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row justify-between items-center py-6 px-4 rounded-2xl">
      {/* Left side - Social Links */}
      <div className="flex justify-start items-center gap-6 text-zinc-50 text-lg mb-4 sm:mb-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-all duration-300"
        >
          Facebook
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-all duration-300"
        >
          Instagram
        </a>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-all duration-300"
        >
          WhatsApp
        </a>
      </div>

      {/* Right side - Creator Portfolio */}
      <div className="text-sm text-zinc-50 ">
        Website created by{" "}
        <a
          href="https://khatabportfolio.tech/" // 🔹 Replace this link
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-lime-300 transition-all duration-300"
        >
            Mousatfa Khatab
        </a>
      </div>
    </section>
  );
};

export { ContactUsSection };
