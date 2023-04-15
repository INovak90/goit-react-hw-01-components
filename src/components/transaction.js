import { TransactionCard } from './transactionCard';
import transactions from '../transactions.json';

export const TransactionHistory = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionCard transactions={transactions} />
      </tbody>
    </table>
  );
};
