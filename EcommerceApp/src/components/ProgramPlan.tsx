import '@fortawesome/fontawesome-free/css/all.min.css';


const fitnessPlans = [
  {
    title: "Bronze",
    description: [
      "Reply twice a week: Basic follow-up to keep you on track.",
      "Progress tracking with photos and InBody every two weeks.",
      "Adjust exercises and diet as needed based on your progress.",
      "Perfect for beginners or those who prefer less frequent check-ins."
    ],
    price:"1000 EGY",
    color: "#CD7F32",
    level:"70"
  },
  {
    title: "VIP",
    description: [
      "Reply 3 times a day + calls: Personal and instant support whenever you need it.",
      "Follow-up every 6 days: Updated diet, meals, and exercises according to your goals.",
      "Detailed daily plan: Includes meals , work , workouts , and any additional sports activities.",
      "Bonuses: Special recipes, quick and healthy meal ideas, tips to boost activity and energy.",
      "Perfect for high achievers and ambitious individuals seeking fast, consistent results with full support."
    ],

    price:"2500 EGY",
    color: "#D81B60",
    level:"-30"
  },
  {
    title: "Silver",
    description: [
      "Daily follow-up and continuous support: Ask questions anytime during the day.",
      "Progress tracking with photos and InBody every two weeks.",
      "Adjust exercises and diet according to your results to ensure continuous improvement.",
      "Daily tips: Healthy eating, balanced lifestyle, and ongoing motivation.",
      "Ideal for those who want more commitment and detailed monitoring."
    ],
    
    price:"2000 EGY",
    color:"#FFD700",
    level:"30"
  }
];

function FitnessCards() {
  return (
    <div className="gym-text w-[85%] m-10 mb-20 z-10">
      <h1 className="text-5xl mb-20">PLANS</h1>
      <div className="flex justify-center gap-10 mt-5">
        {fitnessPlans.map((plan, index) => (
          <div key={index} className={`relative bg-white shadow-lg rounded-xl rounded-tl-none rounded-tr-none p-6 text-zinc-800 flex flex-col justify-between hover:-translate-y-5`} style={{ transform: `translateY(${plan.level}px)`,  transition: "all 0.5s"}}   >
             <div className="absolute w-full -top-5 left-0 h-5">
                    <div className="w-full rounded-tr-sm h-full " style={{ backgroundColor: plan.color }}/>
                </div>
            <div className="flex flex-col justify-between items-start z">
                <div className="flex w-full justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-pink-600">{plan.title}</h2>
            <h2 className="font-bold text-zinc-500">{plan.price}</h2>
                </div>
                
            <ul className="list-disc list-inside space-y-2">
              {plan.description.map((item, idx) => (
                <div className="flex justify-start gap-1 items-start mb-7">
                <i className="fas fa-check-circle m-1"></i>
                <li className="list-none text-md m-0 p-0" key={idx}>{item}</li>
              </div>
              ))}
            </ul>
            </div>
            <button key={index} className="mt-10 w-full bg-zinc-900 text-zinc-100 rounded-md p-2 cursor-pointer" >Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FitnessCards };
