import PropTypes from "prop-types";

const User = ({ user_info }) => {
  return <div className="user_info">{user_info}</div>;
};

User.defaultProps = {
  user_info: "User Info",
};

User.propTypes = {
  title: PropTypes.string.isRequired,
};

export default User;
