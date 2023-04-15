import { StatisticsCard } from './statistics-list';
import data from '../data.json';
export const Statistics = () => {
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        <StatisticsCard data={data} />
      </ul>
    </section>
  );
};
