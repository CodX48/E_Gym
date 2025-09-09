import { NavBar } from "../components/NavBar";

// HeroSection.jsx
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white gym-text">
      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-800/60 to-gray-900" />
      <NavBar/>
      <div className="xl:flex justify-between items-start xl:px-10 md:block">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        {/* Headline */}
        <h1 className="font-gym text-4xl leading-tight md:text-6xl">
          Achieve Your Goal, Step by Step
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
          Whether your goal is to lose weight, build muscle, or simply stay healthy – you’ll find training designed just for you.
        </p>

        {/* Highlights */}
        <ul className="mt-8 grid gap-4 text-base md:grid-cols-2 md:text-lg">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-400" />
            <span>Personalized plans tailored to your body & goals</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-400" />
            <span>Focus on specific areas like legs or abs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-400" />
            <span>Specialized workouts for athletes to boost performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-400" />
            <span>And of course, the right nutrition plan for you 🎯</span>
          </li>
        </ul>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#start"
            className="rounded-xl bg-pink-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Start Your Journey
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/30 px-8 py-3 text-lg font-semibold text-white/90 transition hover:border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Contact Us
          </a>
        </div>
      </div>
   <div className="relative w-full xl:max-w-xl mx-auto py-20">
  {/* rotated backgrounds (only visible on lg & xl) */}
  <div className="absolute inset-0 hidden xl:block h-100 top-20">
    <div className="absolute inset-0 rounded-3xl -rotate-2 bg-pink-500/70"></div>
    <div className="absolute inset-0 rounded-3xl -rotate-6 bg-pink-500/30"></div>
    <div className="absolute inset-0 rounded-3xl -rotate-12 bg-pink-500/25"></div>
  </div>

  {/* main image */}
  <img
    className="relative z-10 w-full lg:w-auto rounded-none xl:rounded-3xl"
    src="https://images.pexels.com/photos/33796262/pexels-photo-33796262.jpeg"
    alt="gym"
  />
</div>




      </div>
    </section>
  );
}

export {HeroSection}