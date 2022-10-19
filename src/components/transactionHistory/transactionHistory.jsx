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
          {transactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
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
  ),
};
