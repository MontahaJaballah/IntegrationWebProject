"use client";
import * as React from "react";
import "./LuckyWheel.css";

const Breadcrumb = () => {
  return (
    <nav className="px-16 py-7 text-xl tracking-normal leading-none text-black bg-zinc-100 max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
      <span className="font-bold"></span>
    </nav>
  );
};

const SpinWheel = () => {
  const wheelRef = React.useRef(null);
  const [value, setValue] = React.useState(Math.ceil(Math.random() * 3600));
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [showWin, setShowWin] = React.useState(false);
  const [winningItem, setWinningItem] = React.useState(null);

  const prizes = [
    { emoji: "🍣", name: "Nigiri Sushi" },
    { emoji: "🍱", name: "Bento Box" },
    { emoji: "🍜", name: "Ramen Bowl" },
    { emoji: "🍙", name: "Onigiri Rice Ball" },
    { emoji: "🦐", name: "Tempura Shrimp" },
    { emoji: "🥢", name: "Maki Roll Set" },
    { emoji: "🥗", name: "Poke Bowl" },
    { emoji: "🍥", name: "Udon Noodles" }
  ];

  const calculateWinner = (degrees) => {
    // Normalize the degrees to 0-360
    const normalizedDegrees = degrees % 360;
    // Each segment is 45 degrees (360/8)
    // Add 22.5 to offset the initial position (half segment)
    const adjustedDegrees = (normalizedDegrees + 22.5) % 360;
    const winningIndex = 7 - Math.floor(adjustedDegrees / 45);
    return prizes[winningIndex];
  };

  const handleSpin = () => {
    if (wheelRef.current && !isSpinning) {
      setIsSpinning(true);
      setShowWin(false);
      const newValue = value + Math.ceil(Math.random() * 3600) + 1440;
      wheelRef.current.style.transform = `rotate(${newValue}deg)`;
      setValue(newValue);

      // Calculate winner after spin animation
      setTimeout(() => {
        const winner = calculateWinner(newValue);
        setWinningItem(winner);
        setShowWin(true);
        setIsSpinning(false);
      }, 5000);
    }
  };

  return (
    <div className="relative">
      <div className="container relative w-[600px] h-[600px] flex justify-center items-center mx-auto">
        <div
          className={`spinBtn absolute w-[100px] h-[100px] bg-gradient-to-r from-pink-500 to-rose-500 rounded-full z-10 flex justify-center items-center uppercase font-bold text-xl text-white tracking-wider border-4 border-white shadow-lg cursor-pointer select-none before:content-[''] before:absolute before:top-[-40px] before:w-[35px] before:h-[45px] before:bg-gradient-to-r before:from-pink-500 before:to-rose-500 before:clip-path-triangle hover:scale-105 transition-transform ${isSpinning ? 'cursor-not-allowed opacity-75' : 'hover:from-pink-600 hover:to-rose-600'}`}
          onClick={handleSpin}
        >
          spin
        </div>
        <div ref={wheelRef} className="wheel absolute top-0 left-0 w-full h-full bg-gray-800 rounded-full overflow-hidden shadow-wheel transition-transform duration-[5s] ease-in-out">
          {prizes.map((prize, index) => (
            <div key={index} className="number" style={{ "--i": index + 1, "--clr": ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#D4A5A5", "#9B5DE5", "#F15BB5", "#00BBF9"][index] }}>
              <span>{prize.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {showWin && winningItem && (
        <div className="congratulations-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="congratulations-card bg-white rounded-2xl p-8 text-center transform animate-bounce-in">
            <div className="text-6xl mb-4 animate-prize-pop">{winningItem.emoji}</div>
            <h2 className="text-3xl font-bold text-pink-600 mb-2 animate-title-slide">Congratulations!</h2>
            <p className="text-xl text-gray-700 animate-text-fade">
              You won a {winningItem.name}!
            </p>
            <button
              onClick={() => setShowWin(false)}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-colors animate-button-slide"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ShareSection = () => {
  return (
    <section className="flex flex-wrap gap-10 self-end mt-14 max-md:mt-10">
      <p className="flex-auto my-auto text-3xl font-extralight max-md:max-w-full">
        Share your win on Instagram and get a second spin!
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b440fb672df46dc688bb54a0cc865f443e6489266ade65572efaddd4c2eeb237?placeholderIfAbsent=true&apiKey=21fc27d6e38c4b9bbac843334566989c"
        alt="Instagram Share"
        className="object-contain shrink-0 aspect-[1.06] w-[82px]"
      />
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-12 w-full text-center text-black bg-rose-200 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start w-full max-w-[1140px] max-md:max-w-full">
        <h1 className="text-7xl font-semibold leading-none text-pink-900 max-md:max-w-full max-md:text-4xl">
          Spin & Win! 🎡✨
        </h1>
        <p className="mt-7 text-4xl max-md:max-w-full">
          Try your luck and win exclusive discounts & gifts for FREE!
        </p>
        <div className="flex flex-col self-stretch pl-20 mt-24 w-full text-3xl font-extralight max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <SpinWheel />
          <ShareSection />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon, extraIcon }) => {
  return (
    <article className="flex flex-col">
      <h3 className="self-center text-xl font-extrabold">{title}</h3>
      <div className="flex gap-3 mt-3 text-lg">
        {icon && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="object-contain shrink-0 aspect-[1.18] w-[71px]"
          />
        )}
        <p className="grow shrink my-auto font-extrabold">{description}</p>
        {extraIcon && (
          <img
            src={extraIcon}
            alt="Additional icon"
            className="object-contain shrink-0 self-end mt-8 aspect-[0.94] w-[59px]"
          />
        )}
      </div>
    </article>
  );
};

const DailyReward = () => {
  const [currentDay, setCurrentDay] = React.useState(3); // Example: User is on day 3

  const rewards = [
    { day: 1, reward: '50 Points', claimed: true },
    { day: 2, reward: '100 Points', claimed: true },
    { day: 3, reward: 'Free Sushi', claimed: false },
    { day: 4, reward: '200 Points', claimed: false },
    { day: 5, reward: '2x Multiplier', claimed: false },
    { day: 6, reward: '500 Points', claimed: false },
    { day: 7, reward: 'Mystery Box', claimed: false },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 py-12">
      <h2 className="text-4xl font-bold text-[#904A41] mb-8">Daily Rewards</h2>
      <div className="grid grid-cols-7 gap-4 max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        {rewards.map((reward, index) => (
          <div
            key={reward.day}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 ${currentDay === reward.day
              ? 'border-[#904A41] bg-pink-50'
              : reward.claimed
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-gray-50'
              } ${currentDay === reward.day ? 'transform scale-110' : ''}`}
          >
            <div className="text-lg font-semibold mb-2">Day {reward.day}</div>
            <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center mb-2">
              {reward.day === 7 ? (
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v1h2a2 2 0 012 2v2.5a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3zm1 0v1h8V3a1 1 0 00-1-1H7a1 1 0 00-1 1zm10 4v2.5a1 1 0 01-1 1H3a1 1 0 01-1-1V7h14zm-2 6a2 2 0 01-2 2H7a2 2 0 01-2-2h9z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a4 4 0 014 4v2h2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h2V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v2h4V6a2 2 0 00-2-2zm3 6H7a1 1 0 000 2h6a1 1 0 100-2z" />
                </svg>
              )}
            </div>
            <div className="text-sm text-center font-medium text-gray-600">
              {reward.reward}
            </div>
            <button
              className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${currentDay === reward.day
                ? 'bg-[#904A41] text-white hover:bg-[#7a3f37]'
                : reward.claimed
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              disabled={currentDay !== reward.day || reward.claimed}
            >
              {reward.claimed ? 'Claimed' : currentDay === reward.day ? 'Claim' : 'Locked'}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p className="text-lg">Come back daily to claim your rewards!</p>
        <p className="text-sm mt-2">Rewards reset every week</p>
      </div>
    </div>
  );
};

const LuckyWheel = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-12 bg-white">
      <Breadcrumb />
      <HeroSection />
      <DailyReward />
    </main>
  );
};
export default LuckyWheel;
