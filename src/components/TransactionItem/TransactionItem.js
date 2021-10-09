import PropTypes from "prop-types";

export function TransactionItem({ type, amount, currency }) {
    return (
        <tbody>
            <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
        </tbody>
    )
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};