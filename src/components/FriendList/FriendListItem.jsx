import PropTypes from 'prop-types';

import { FriendCard, FriendStatus, FriendName } from './FriendList.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendCard>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="100" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
