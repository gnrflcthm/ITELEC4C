import { useState, useEffect } from "react";
import { randomEmoji } from "../assets/emoji";

const RandomEmoji = ({ visible, onlyOne, animateExit, toggler }) => {
  const [emoji, setEmoji] = useState(randomEmoji());
  const [extra, setExtra] = useState(randomEmoji());

  const showTwo = Math.random() > 0.5 && !onlyOne;

  useEffect(() => {
      setEmoji(randomEmoji());
      setExtra(randomEmoji());
  }, [toggler, visible]);

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] hidden lg:grid place-items-center ${
        visible
          ? "opacity-1 duration-500"
          : `opacity-0 ${animateExit ? "duration-500" : "duration-0"}`
      } pointer-events-none select-none transition-opacity`}
    >
      <span>
        {emoji}
        {showTwo && extra}
      </span>
    </div>
  );
};

export default RandomEmoji;
