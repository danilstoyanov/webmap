import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';

import { Icon56PlaceOutline } from "@vkontakte/icons";

const Start = ({ id, goToPanel }) => {
  const handleCreateButtonClick = () => {
    goToPanel('feed')
  }

  return (
    <Panel id={id}>
      <PanelHeader>Лента мечты 🎉</PanelHeader>
  
      <Placeholder
        stretched
        header="Лента с картой эмоций"
        icon={<Icon56PlaceOutline />}
        action={
          <React.Fragment>
            <Button size="m" onClick={handleCreateButtonClick} style={{marginBottom: 8}}>Перейти в ленту</Button><br />
          </React.Fragment>
        }
      >
        Познакомьтесь с лентой будущего. С ее помощью вы сможете с помощью карты искать интересный контент.
      </Placeholder>
    </Panel>
  );
}

export default Start;
