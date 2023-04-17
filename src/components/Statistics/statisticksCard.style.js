import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  min-width: 70px;
  background-color: ${getRandomHexColor};
`;
export const StatisticsText = styled.span`
  color: ${p => p.theme.color.white};
  &:last-child {
    font-size: 20px;
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
