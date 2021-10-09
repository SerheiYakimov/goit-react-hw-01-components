import PropTypes from "prop-types";
import styles from './StatisticsList.module.css'

export function StatisticList({ label, percentage }) {
  return (
    
      <li className={styles.item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>

  );
}

StatisticList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
