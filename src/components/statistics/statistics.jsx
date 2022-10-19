import PropTypes from 'prop-types';
import { StatisticItem } from './statisticItem';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
} from './statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticSection>
      <StatisticTitle>Upload stats</StatisticTitle>
      <StatisticList>
        {stats.map(stat => (
          <StatisticListItem key={stat.id}>
            <StatisticItem stat={stat} />
          </StatisticListItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(Object),
};
