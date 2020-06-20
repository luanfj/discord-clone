import React from 'react';

import { Container, Category, ExpandIcon, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>
          <ExpandIcon />
          Canais de texto
        </span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton selected channelName="chat-geral" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
    </Container>
  );
};

export default ChannelList;
