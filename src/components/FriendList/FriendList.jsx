import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListCards } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCards>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </FriendListCards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
