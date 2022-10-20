import PropTypes from 'prop-types';

import {
  TransactionListTable,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionsList = ({ transactions }) => {
  return (
    <>
      <TransactionListTable>
        <TableHead>
          <tr>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
            <TableHeadCell>Currency</TableHeadCell>
          </tr>
        </TableHead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TransactionListTable>
    </>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
