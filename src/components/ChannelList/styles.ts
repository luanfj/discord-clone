import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;
  cursor: pointer;

  > span {
    flex: 1;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--white);

    opacity: 0.5;
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 12px;
  height: 12px;
  color: var(--white);

  margin-right: 5px;
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--white);
  cursor: pointer;

  opacity: 0.5;
  transition: opacity 0.1s;

  &:hover,
  &.active {
    opacity: 0.8;
  }
`;
