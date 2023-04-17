import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid;
  border-color: ${p => p.theme.color.gray};
  border-radius: 5px;
  padding: 5px 61px 5px 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.8), 23px 0 20px -23px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  font-weight: 700;
`;

export const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${p => {
    return p.online ? p.theme.color.green : p.theme.color.red;
  }};
`;
