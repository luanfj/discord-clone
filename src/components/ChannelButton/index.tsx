import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  selected?: boolean;
  channelName: string;
}

const ChannelButton: React.FC<Props> = ({ selected, channelName }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />

        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />

        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
