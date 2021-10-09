import PropTypes from "prop-types";
import styles from './Statistics.module.css';

export function Statistics({ title, children }) {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {children}
      </ul> 
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
