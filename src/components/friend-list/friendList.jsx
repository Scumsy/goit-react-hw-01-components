import PropTypes from 'prop-types';
import { FriendsCard } from './friendCard';
import { FriendListItem } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendsCard friends={friend} />
        </FriendListItem>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(Object),
};
