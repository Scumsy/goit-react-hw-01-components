import PropTypes from 'prop-types';

import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticSection>
      <StatisticTitle>Upload stats</StatisticTitle>
      <StatisticList>
        {stats.map(stat => (
          <StatisticListItem key={stat.id}>
            <StatisticLabel>{stat.label}</StatisticLabel>
            <StatisticPercentage>{stat.percentage} %</StatisticPercentage>
          </StatisticListItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
