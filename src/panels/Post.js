import React from 'react';
import {Caption, Button, Text, Title, Separator} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

import {PostSnippet} from '../components/PostSnippet';

const Post = ({ id, post, goToPanel }) => {
  const postMock = {
    category: post.category,
    mood: post.mood,
    preview: "https://bekasovo.ru/sites/default/files/blog-1_0.jpg",
    content: "А это просто еще один пост-заглушка, не обращайте внимания на него :3",
  }

  const handleBackClick = () => {
    goToPanel('feed');
  }

  return (
    <Panel id={id}>
      <PanelHeader separator={false} left={<PanelHeaderBack onClick={handleBackClick} />}>
        Пост
      </PanelHeader>

      <div className="PostsFeedWrapper">
        <Div>
          <PostSnippet post={post} />

          <PostSnippet post={postMock} />
        </Div>
      </div>

    </Panel>
  );
}

export default Post;
