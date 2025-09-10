import { useEffect } from 'react';

const cardsData = [
  {
    title: "Diet Plan",
    image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
  },
  {
    title: "Workout Plan",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
  },
  {
    title: "Sleep Schedule",
    image: "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg",
  },
  {
    title: "Mental Wellness",
    image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
  },
];

// src/particles.d.ts
declare global {
  interface Window {
    particlesJS: any;
  }
}

export {};


const P_Cards = () => {
  useEffect(() => {
    // Make sure window.particlesJS is available
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles-config.json', () => {
        console.log('Particles.js config loaded');
      });
    }
  }, []);

  return (
    <section id='PROGRAMS' className="relative w-full"> {/* Set the specific height for the section */}
      {/* Particles background inside this specific section */}
      {/* Content */}
      <div className="relative z-10 p-10">
        <h1 className="text-5xl text-zinc-600">PROGRAMS</h1>
        <div className="w-full flex flex-col gap-8 md:gap-16">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`w-full CardHoverd flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} justify-between items-start overflow-hidden cursor-pointer p-10`}
            >
              <img
                className="w-full md:w-[45%] h-[45%] object-cover rounded-sm opacity-80 Card-img "
                src={card.image}
                alt={card.title}
              />
              <div className="p-2 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-pink-600">{card.title}</h2>
                <span className="text-sm text-gray-500">More info</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { P_Cards };
