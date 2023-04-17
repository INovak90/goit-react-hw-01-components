import PropTypes from 'prop-types';
import { ListItem, StatisticsText } from './statisticksCard.style';

export const StatisticsCard = ({ data }) => {
  return data.map(({ id, label, percentage }) => (
    <ListItem key={id}>
      <StatisticsText>{label}</StatisticsText>
      <StatisticsText>{percentage}%</StatisticsText>
    </ListItem>
  ));
};

StatisticsCard.protoTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
