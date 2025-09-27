import { useEffect } from 'react';

const cardsData = [
  {
    title: "Diet Plan",
    tagline: "Eat smarter, live better",
    info: "Our Diet Plan is carefully tailored to your unique body, lifestyle, and goals. Whether you want to lose weight, build lean muscle, or simply eat healthier, we create a nutrition program that’s realistic, flexible, and sustainable.",
    extra_points: [
      "Customized daily calorie and macronutrient targets",
      "Balanced meal options with easy-to-follow recipes",
      "Guidance on portion sizes, meal timing, and food swaps",
      "Recommendations for supplements (if needed)",
      "Strategies to stay on track when eating out or traveling",
      "A plan that adapts to your preferences and progress over time"
    ],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    title: "Workout Plan",
    tagline: "Train with purpose, see results",
    info: "The Workout Plan is designed to take the guesswork out of training. No matter your fitness level, you’ll get a structured program that helps you reach your goals efficiently while avoiding injury.",
    extra_points: [
      "Training schedule tailored to your availability",
      "Strength, cardio, and flexibility routines",
      "Detailed exercise instructions and progressions",
      "Home or gym-based workout options",
      "Weekly adjustments to keep you challenged and motivated",
      "Tips on proper form, recovery, and injury prevention"
    ],
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
  },
  {
    title: "Follow Up",
    tagline: "Stay accountable, stay on track",
    info: "Reaching your goals isn’t just about getting a plan — it’s about staying consistent and making adjustments along the way. That’s where the Follow Up program comes in, giving you regular check-ins and ongoing support.",
    extra_points: [
      "Progress tracking (weight, measurements, strength, or performance)",
      "Feedback on your diet and workout execution",
      "Adjustments to nutrition and training plans based on results",
      "Motivation, accountability, and support to keep you on track",
      "Answers to your questions and solutions for real-life challenges",
      "A long-term partnership to ensure lasting results"
    ],
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
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles-config.json', () => {
        console.log('Particles.js config loaded');
      });
    }
  }, []);

  return (
    <section id='PROGRAMS' className="relative w-full">
      {/* Particles background */}
      <div className="relative z-10 p-10">
        <h1 className="text-5xl text-zinc-100">PROGRAMS</h1>
        <div className="w-full grid md:grid-cols-3 mt-6 rounded-md overflow-hidden shadow-2xl shadow-zinc-600/50">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="w-full CardHoverd flex flex-col overflow-hidden cursor-pointer bg-zinc-200 border border-zinc-400"
            >
              {/* <img
                className="w-full h-48 object-cover opacity-90"
                src={card.image}
                alt={card.title}
              /> */}
              <div className="flex flex-col justify-start p-5 space-y-2 text-4xl">
                <h2 className="text-2xl font-semibold text-pink-600">{card.title}</h2>
                <p className="text-2xl italic text-gray-500">{card.tagline}</p>
                <p className="text-gray-700 text-2xl">{card.info}</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                  {card.extra_points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { P_Cards };
