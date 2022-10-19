import PropTypes from 'prop-types';
import { StatisticLabel, StatisticPercentage } from './statistics.styled';

export const StatisticItem = ({ stat: { label, percentage, id } }) => {
  return (
    <>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticPercentage>{percentage} %</StatisticPercentage>
    </>
  );
};

StatisticItem.propTypes = {
  stat: PropTypes.exact({
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.string,
  }),
};
