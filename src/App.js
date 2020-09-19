import React, { useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import {getAllPosts} from './postsData';

import Start from './panels/Start';
import Post from './panels/Post';
import Feed from './panels/Feed';

import './main.css';

const App = () => {
  const [activePanel, setActivePanel] = useState('start');
  const [postBubbles, setPostBubbles] = useState(getAllPosts());

  const [mood, setMood] = useState('neutral');
  const [post, setPost] = useState({
    "id": "jB5K-q2YP41l_gE67ADQM",
    "category": "music",
    "mood": "negative",
    "preview": "https://pbs.twimg.com/media/DSWwc9sXcAALA0u.jpg:large",
    "content": "Объясните, как вы вообще можете слушать рэп? Это же говно а не музыка!"
  });

  const goToPanel = panelName => {
    setActivePanel(panelName);
  };

  return (
    <View activePanel={activePanel}>
      <Start
        id="start"
        goToPanel={goToPanel}
      />

      <Feed
        id="feed"
        mood={mood}
        postBubbles={postBubbles}
        setMood={setMood}
        setPost={setPost}
        goToPanel={goToPanel}
      />

      <Post
        id="post"
        goToPanel={goToPanel}
        post={post}
      />
    </View>
  );
}

export default App;

