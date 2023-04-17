import styled from 'styled-components';

export const SectionStatisticks = styled.section`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
`;

export const Box = styled.div`
  padding: 50px;
  background-color: ${p => p.theme.color.background};
`;

export const BoxContent = styled.div`
  background-color: ${p => p.theme.color.white};
  box-shadow: ${p => p.theme.shadow};
`;

export const StatisticksTitle = styled.h2`
  padding: 20px 40px;
  margin: 0px;
  color: ${p => p.theme.color.gray};
  text-align-last: center;
`;
