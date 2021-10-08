import PropTypes from "prop-types";

export function FriendListItem({ avatar, name, status }) {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
};
