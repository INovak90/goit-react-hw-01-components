import { TransactionCard } from './transactionCard';
import { TableTitle, Table } from './transaction.style';
import transactions from '../../transactions.json';

export const TransactionHistory = () => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>
      <tbody>
        <TransactionCard transactions={transactions} />
      </tbody>
    </Table>
  );
};
