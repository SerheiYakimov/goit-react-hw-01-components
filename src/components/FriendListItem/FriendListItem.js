import PropTypes from "prop-types";
import styles from './FriendListItem.module.css'

export function FriendListItem({ avatar, name, status }) {
  return (
    <li className={styles.item}>
      <span className={styles.status} style={{ backgroundColor: status }}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
};
