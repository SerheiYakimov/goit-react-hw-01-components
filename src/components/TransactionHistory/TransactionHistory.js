import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'

export function TransactionHistory({ children }) {
    return (
        <table className={styles.table}>
  <thead className={styles.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      {children}
</table>

    )
}

TransactionHistory.propTypes = {
  children: PropTypes.node,
};