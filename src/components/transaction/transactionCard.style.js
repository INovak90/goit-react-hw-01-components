import styled from 'styled-components';

export const TableCell = styled.td`
  text-align: center;
`;
export const TableLine = styled.tr`
  &:nth-child(2n) {
    background-color: ${p => p.theme.color.background};
  }
`;
