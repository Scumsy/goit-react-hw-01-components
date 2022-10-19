import PropTypes from 'prop-types';
import { FriendsCard } from './friendCard';
import { FriendListItem, FriendListCards } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCards>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendsCard friends={friend} />
        </FriendListItem>
      ))}
    </FriendListCards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(Object),
};
