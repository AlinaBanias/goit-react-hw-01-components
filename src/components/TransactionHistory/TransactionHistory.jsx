import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({transactions}) => { 
    return (
    <table className={css.transactionHistory}>
    <thead>
      <tr className={css.titleItem}>
        <th className={css.titleList}>Type</th>
        <th className={css.titleList}>Amount</th>
        <th className={css.titleList}>Currency</th>
      </tr>
    </thead>
    <tbody>
    {transactions.map(({id, type, amount, currency}) =>
     <tr key={id} className={css.item}>
        <td className={css.list}>{type}</td>
        <td className={css.list}>{amount}</td>
        <td className={css.list}>{currency}</td>
      </tr>
    )}
     </tbody>
  </table>
)}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
  })
  )
}
