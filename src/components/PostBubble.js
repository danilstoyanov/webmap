import React from 'react';
import cn from "classnames";

export const PostBubble = ({ category, size = "medium", mood, id, className, onClick }) => {
  const captionMap = {
    music: "Музыка",
    movie: "Кино",
    autumn: "Осень",
    animals: "Животные",
    it: "Айти",
    auto: "Авто",
  };

  const iconMap = {
    music: "🎧",
    movie: "🍿",
    autumn: "🍁",
    animals: "😼",
    it: "💻",
    auto: "🏎️",
  };

  return (
    <div className={cn("PostBubble", className)} onClick={onClick}>
      <div>{iconMap[category]}</div>
      <span>{captionMap[category]}</span>
    </div>
  );
};
