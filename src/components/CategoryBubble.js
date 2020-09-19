import React from 'react';
import cn from "classnames";

export const CategoryBubble = ({ id, category, mood, className, onClick }) => {
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

  const moodMap = {
    highEnergy: "😜",
    lowEnergy: "😴",
    negative: "🙁",
    positive: "😃",
  };

  return (
    <div className={cn("CategoryBubble", className)} onClick={onClick}>
      <div className="CategoryBubbleContent">
        {iconMap[category]}
      </div>

      <span className="CategoryBubbleTitle">{captionMap[category]}</span>

      <span className="CategoryBubbleMood">{moodMap[mood]}</span>
    </div>
  );
};
