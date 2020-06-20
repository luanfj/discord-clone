import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 6px;
  border-radius: 4px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;

      color: var(--senary);
      font-size: 15px;
    }
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div svg {
      opacity: 1;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  &:not(:first-child) {
    margin-top: 2px;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  opacity: 0;

  color: var(--symbol);

  transition: color 0.2s, opacity 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  opacity: 0;

  margin-left: 4px;

  color: var(--symbol);

  transition: color 0.2s, opacity 0.2s;

  &:hover {
    color: var(--white);
  }
`;
