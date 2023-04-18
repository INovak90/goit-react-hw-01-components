import PropTypes from 'prop-types';
import { TableCell, TableLine } from './transactionCard.style';

export const TransactionCard = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => (
    <TableLine key={id}>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableLine>
  ));
};

TransactionCard.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
