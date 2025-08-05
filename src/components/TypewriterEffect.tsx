import { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = [
    "Cancel Subscriptions",
    "Track Renewals", 
    "Monitor Trials",
    "Manage Billing",
    "Stop Overcharges",
    "Block Hidden Fees",
    "Control Spending",
    "End Renewals",
    "Save Money",
    "Protect Finances"
  ];
  const currentWord = words[loopNum % words.length];

  useEffect(() => {
    const handleType = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, currentWord, loopNum]);

  return (
    <div className="h-20 flex items-center">
      <h2 className="text-4xl md:text-6xl font-semibold text-gray-500">
        {text}
        <span className="animate-pulse text-blue-500">|</span>
      </h2>
    </div>
  );
};

export default TypewriterEffect;