import PropTypes from "prop-types";

export function TransactionHistory({ children }) {
    return (
        <table className="transaction-history">
  <thead>
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