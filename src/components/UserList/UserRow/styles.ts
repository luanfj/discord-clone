import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 3px;
  background-color: transparent;

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  > strong {
    margin-left: 13px;

    font-size: 15px;
    font-weight: 500;
    color: var(--white);

    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;

    background-color: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;

    color: var(--white);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;
