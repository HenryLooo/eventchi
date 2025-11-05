import React from "react";

interface CountdownProps {
  targetDate: string; // e.g. "2025-11-05T23:59:59"
}
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((difference / (1000 * 60)) % 60);
      const secs = Math.floor((difference / 1000) % 60);

      timeLeft = {
        hours: String(hrs).padStart(2, "0"),
        minutes: String(mins).padStart(2, "0"),
        seconds: String(secs).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[#3B3B3B] rounded-[20px] p-4 sm:p-5 text-center w-full sm:w-[200px] md:w-[235px] mt-6 sm:mt-8 lg:mt-0 bg-opacity-60">
      <p className="text-xs sm:text-[14px] text-[#B0B0B0] mb-2">
        Auction ends in:
      </p>

      <div className="flex justify-center gap-2 sm:gap-3 font-bold text-2xl sm:text-3xl md:text-[38px] leading-none">
        <div>{timeLeft.hours}</div>
        <span className="text-base sm:text-lg md:text-[20px]">:</span>
        <div>{timeLeft.minutes}</div>
        <span className="text-base sm:text-lg md:text-[20px]">:</span>
        <div>{timeLeft.seconds}</div>
      </div>

      <div className="flex justify-between text-[10px] sm:text-[12px] text-[#B0B0B0] mt-2">
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};
export default Countdown;
