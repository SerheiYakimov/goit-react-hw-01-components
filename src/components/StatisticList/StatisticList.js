import PropTypes from "prop-types";

export function StatisticList({ label, percentage }) {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </ul>
  );
}

StatisticList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
