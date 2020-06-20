import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;

    &:hover {
      background-color: #f9a83926;
    }
  }

  & + div {
    margin-top: 13px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }

  cursor: pointer;
`;

export const Message = styled.div`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 15px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > span {
    margin-left: 6px;

    background-color: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;

    color: var(--white);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;

    color: var(--gray);
    font-size: 13px;

    cursor: default;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;