import React, {useState} from 'react';
import { Icon28LikeOutline } from "@vkontakte/icons";
import { Icon24Like } from "@vkontakte/icons";
import {getRandomIntInclusive} from '../utils';

import './PostSnippet.css';

const AUTHORS = [
  { userpic: 'https://vk.com/sticker/1-93-256', authorName: 'Котенок Персик' },
  { userpic: 'https://vk.com/sticker/1-12982-256', authorName: 'Голубь Михаил' },
  { userpic: 'https://vk.com/sticker/1-46-256', authorName: 'Собакен Спотти' },
  { userpic: 'https://vk.com/sticker/1-858-256', authorName: 'Медведь Михалыч' },
  { userpic: 'https://vk.com/sticker/1-6886-256', authorName: 'Ленивец Арсений' },
]

export const PostSnippet = ({ post }) => {
  const { category, mood, preview, content } = post;

  const [{userpic, authorName}, _] = useState(AUTHORS[getRandomIntInclusive(0, 4)])
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(getRandomIntInclusive(1, 100))

  const categoryMap = {
    music: "музыка",
    movie: "кино",
    autumn: "осень",
    animals: "животные",
    it: "айти",
    auto: "авто",
  }

  const moodMap = {
    music: "🎧",
    movie: "🍿",
    autumn: "🍁",
    animals: "😼",
    it: "💻",
    auto: "🏎️",
  }

  const moodTitle = {
    neutral: "нейтральное настроние",
    highEnergy: "отличное настроение",
    lowEnergy: "cпокойное настроение",
    negative: "плохое настроение",
    positive: "приподнятое настроение",
  };

  const handleLikeClick = () => {
    if(isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);

      return;
    }

    setIsLiked(true);
    setLikeCount(likeCount + 1);
  }

  return (
    <div className="PostSnippet">
      <div className="PostSnippetHeader">
        <img src={userpic} className="PostSnippetHeaderUserpic"/>

        <div className="PostSnippetHeaderInfo">
          <p className="PostSnippetHeaderAuthor">{authorName}</p>
          <p className="PostSnippetHeaderMeta">
            <span>{moodTitle[mood]}</span><span>&nbsp;•&nbsp;</span><span>{categoryMap[category]}</span><span>&nbsp;•&nbsp;</span>{moodMap[category]}
          </p>
        </div>
      </div>

      <div className="PostSnippetPreview" style={{backgroundImage: `url(${preview})`}} />

      <div className="PostSnippetContent">
        {content}
      </div>
      <div className="PostSnippetFooter" onClick={handleLikeClick}>
        <span className="PostSnippetFooterLike">
          {isLiked ? (
            <React.Fragment>
              <Icon24Like fill="red"/><span>{likeCount}</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Icon28LikeOutline /><span>{likeCount}</span>
            </React.Fragment>
          )}
        </span>
      </div>
    </div>
  );
};
