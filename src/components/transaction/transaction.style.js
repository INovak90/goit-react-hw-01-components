import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: ${p => p.theme.shadow};
`;

export const TableTitle = styled.th`
  padding: 10px 100px;
  background-color: rgb(127 165 165 / 93%);
  color: ${p => p.theme.color.white};
`;
