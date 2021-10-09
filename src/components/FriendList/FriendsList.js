import PropTypes from "prop-types";
import styles from './FriendList.module.css'

export function FriendList({ children }) {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    )
}

FriendList.propTypes = {
  children: PropTypes.node,
};


