import PropTypes from 'prop-types';
import { TableCell } from './transactionHistory.styled';

export const TransactionLine = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </>
  );
};

TransactionLine.propTypes = {
  transaction: PropTypes.objectOf(PropTypes.string),
};
