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
    <div className="gym-text relative w-[100%] m-10 mb-20 z-10">
      <div className="absolute translate-x-[50%] translate-y-[105%] left-0 w-[800px] h-[200px] bg-blue-600/10 blur-3xl z-20 rounded-full" />
      <div className="absolute translate-x-[50%] translate-y-[170%] left-0 w-[900px] h-[200px] bg-teal-400/20 blur-3xl z-20 rounded-full" />
      <h1 className="text-5xl mb-20 text-zinc-50">PLANS</h1>
      <div className="flex flex-col gap-10 sm:flex-col md:flex-col lg:flex-row xl:flex-row w-fit">
        {fitnessPlans.map((plan, index) => (
          <div key={index} className={`relative max-w-[1200px] bg-zinc-950 p-6 text-zinc-800 flex flex-col justify-between ${window.innerWidth >= 750 ? "hover:-translate-y-5" : ""} ${plan.title == 'VIP' ? "ring-pink-300 ring-4 rounded-t-none overflow-visible ": "z-30"}  rounded-lg overflow-hidden`}
          style={{ transform: `translateY(${window.innerWidth >= 750 ? plan.level : 0}px)`,  transition: `all 0.5s`}}>
             {plan.title == "VIP" ? (<>
             <div className="flex justify-center items-center w-full absolute left-0 -top-10 h-10 bg-pink-300 ring-pink-300 ring-4 rounded-t-xl " >
              <h1 className= "font-semibold text-zinc-800 text-2xl">Most Populer</h1>
             </div>
             </>) : ""}
             <div className="absolute w-full top-0 left-0 h-full overflow-hidden">
                    <div className="absolute blur-[110px] w-60 rounded-full h-80 -z-10 bg-none" style={{ backgroundColor: plan.color }}/>
                    <div className="absolute blur-[110px] bottom-0 w-full rounded-full h-60 -z-10 bg-none" style={{ backgroundColor: plan.color }}/>
                </div>
            <div className="flex flex-col justify-between items-start ">
                <div className="flex w-full justify-between items-center mb-10 ">
            <h2 className="text-3xl font-bold text-pink-300">{plan.title}</h2>
            <h2 className="font-bold text-zinc-50">{plan.price}</h2>
                </div>
                
            <ul className="list-disc list-inside space-y-2">
              {plan.description.map((item, idx) => (
                <div className="flex justify-start gap-1 items-start mb-7">
                <i className="fas fa-check-circle m-1 text-zinc-100"></i>
                <li className="list-none text-md text-zinc-50 m-0 p-0 z-10" key={idx}>{item}</li>
              </div>
              ))}
            </ul>
            </div>
            <button key={index} className="mt-10 w-full bg-zinc-100 text-zinc-900 rounded-md p-2 font-bold cursor-pointer z-50" >Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FitnessCards };
