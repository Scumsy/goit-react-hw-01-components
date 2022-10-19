import PropTypes from 'prop-types';
import { FriendListItem } from './FriendCard';
import { FriendListCards } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCards>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        ></FriendListItem>
      ))}
    </FriendListCards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
