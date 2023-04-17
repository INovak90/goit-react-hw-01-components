import { StatisticsCard } from './statisticsCard';
import {
  SectionStatisticks,
  List,
  Box,
  BoxContent,
  StatisticksTitle,
} from './statistics.style';

import data from '../../data.json';
export const Statistics = () => {
  return (
    <SectionStatisticks>
      <Box>
        <BoxContent>
          <StatisticksTitle>Upload stats</StatisticksTitle>
          <List>
            <StatisticsCard data={data} />
          </List>
        </BoxContent>
      </Box>
    </SectionStatisticks>
  );
};
