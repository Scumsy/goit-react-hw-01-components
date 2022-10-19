import PropTypes from 'prop-types';
import { TransactionLine } from './transactionLine';
import {
  TransactionListTable,
  TableHead,
  TableHeadCell,
  TableRow,
} from './transactionHistory.styled';

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
              <TransactionLine transaction={transaction} />
            </TableRow>
          ))}
        </tbody>
      </TransactionListTable>
    </>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(Object),
};
