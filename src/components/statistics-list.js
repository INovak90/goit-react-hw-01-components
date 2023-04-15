export const StatisticsCard = ({ data }) => {
  return data.map(({ id, label, percentage }) => (
    <li key={id}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  ));
};
