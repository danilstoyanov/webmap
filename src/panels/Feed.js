import React, { useState } from "react";
import cn from "classnames";
import { nanoid } from "nanoid";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import File from "@vkontakte/vkui/dist/components/File/File";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Search from "@vkontakte/vkui/dist/components/Search/Search";
import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";
import Select from "@vkontakte/vkui/dist/components/Select/Select";

// import { Select } from '@vkontakte/vkui';

import {
  FormLayout,
  Input,
  Text,
  Caption,
  Textarea,
  Placeholder,
  Button,
  Separator,
  Checkbox,
} from "@vkontakte/vkui";

import {
  Icon12Cancel,
  Icon28PictureOutline,
  Icon28PodcastOutline,
} from "@vkontakte/icons";

import mapImage from '../img/map.png';

import {postsData, postsCategories} from '../postsData';
import {getRandomIntInclusive, shuffleArray} from '../utils';
import {PostBubble} from '../components/PostBubble';
import {CategoryBubble} from '../components/CategoryBubble';

import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";

const Feed = ({ id, mood, postBubbles, setMood, goToPanel, setPost }) => {
  const PostsLayoutClassName = "Layout-" + getRandomIntInclusive(1, 5);
  const bubbleCategories = shuffleArray(postsCategories).slice(0, 3);

  const handlePostBubbleClick = ({ category, mood }) => {
    setPost(postsData[category][mood]);
    goToPanel('post');
  }

  const handleMoodSelect = (mood) => {
    setMood(mood);
  }

  const handleSearchInput = (mood) => {
    alert('Не успел доделать поиск :(\nВоспользуйтесь кнопочками ниже.')
  }

  return (
    <Panel id={id}>
      <PanelHeader
        className="hidden"
        left={<PanelHeaderBack onClick={() => {
          goToPanel('start')
        }} />}
      >
        Пост
      </PanelHeader>

      <div className="Wrapper">
        <div className="Map" style={{backgroundImage: `url(${mapImage})`}}>
          <div className="MapContent">
            {mood === "neutral" && (
              <div className="MapContentNav">
                <button className="HighEnergy" onClick={() => { handleMoodSelect("highEnergy") }}>😜</button>
                <button className="Negative" onClick={() => { handleMoodSelect("negative") }}>🙁</button>
                <button className="Positive" onClick={() => { handleMoodSelect("positive") }}>😃</button>
                <button className="LowEnergy" onClick={() => { handleMoodSelect("lowEnergy") }}>😴</button>
              </div>
            )}

            {mood !== "neutral" && (
              <div className="MapContentNavSelect">
                <Select defaultValue={mood} onChange={(event) => {
                  handleMoodSelect(event.target.value)
                }}>
                  <option value="highEnergy">😜 Отличное настроение</option>
                  <option value="negative">🙁 Плохое настроение</option>
                  <option value="positive">😃 Приподнятое настроение</option>
                  <option value="lowEnergy">😴 Спокойное настроение</option>
                </Select>
              </div>
            )}

            <div className={cn("MapContentPosts", PostsLayoutClassName)}>
              <PostBubble
                mood={mood}
                category={bubbleCategories[0]}
                className={cn("Small")}
                onClick={() => {
                  handlePostBubbleClick({ category: bubbleCategories[0], mood })
                }}
              />

              <PostBubble
                mood={mood}
                category={bubbleCategories[1]}
                className={cn("Medium")}
                onClick={() => {
                  handlePostBubbleClick({ category: bubbleCategories[1], mood })
                }}
              />

              <PostBubble
                mood={mood}
                category={bubbleCategories[2]}
                className={cn("Large")}
                onClick={() => {
                  handlePostBubbleClick({ category: bubbleCategories[2], mood })
                }}
              />
            </div>
          </div>
        </div>
        <div className="SearchPanel">
          <Search value="" onChange={handleSearchInput} after={null}/>

          <HorizontalScroll>
            <div className="CategoryBubblesWrapper">
              {postBubbles.map(({ id, category, mood }) => (
                <CategoryBubble
                  key={id}
                  category={category}
                  mood={mood}
                  onClick={() => {
                    handlePostBubbleClick({ category: category, mood })
                  }}
                />
              ))}
            </div>
          </HorizontalScroll>
        </div>
      </div>
    </Panel>
  );
};

const itemStyle = {
  flexShrink: 0,
  width: 80,
  height: 94,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 12
};

export default Feed;