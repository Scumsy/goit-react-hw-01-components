import PropTypes from 'prop-types';

import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title ? <StatisticTitle>{title}</StatisticTitle> : ''}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticListItem key={id}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercentage>{percentage} %</StatisticPercentage>
          </StatisticListItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
