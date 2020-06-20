import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content="Recriei a interface do Discord em React js!"
        />

        <ChannelMessage
          author="Luan Fernandes"
          date="Hoje às 15:08"
          content={
            <>
              <Mention>@LuaN</Mention> Recriei a interface do Discord em React
              js!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
