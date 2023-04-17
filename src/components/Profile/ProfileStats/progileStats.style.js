import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  background-color: #d1d1d182;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 15px 47px;
  &:nth-child(-n + 2) {
    border-right: 1px solid gray;
  }
`;

export const StatsText = styled.span`
color: ${p => p.theme.color.black};
font-weight: 700;
&:first-child {
    color: ${p => p.theme.color.gray};`;
