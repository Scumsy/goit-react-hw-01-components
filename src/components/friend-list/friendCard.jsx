import PropTypes from 'prop-types';

import {
  // FriendStatus,
  FriendName,
  FriendStatusOnline,
  FriendStatusOffline,
} from './friendList.styled';

export const FriendsCard = ({ friends: { avatar, name, isOnline, id } }) => {
  return (
    <>
      {isOnline === true ? (
        <FriendStatusOnline></FriendStatusOnline>
      ) : (
        <FriendStatusOffline></FriendStatusOffline>
      )}

      <img class="avatar" src={avatar} alt="User avatar" width="100" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendsCard.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};
