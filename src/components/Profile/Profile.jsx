import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileCardDescription,
  ProfileImage,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  UserStats,
  UserStatsQuantity,
  UserStatsLabel,
  UserStatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileCardDescription>
        <ProfileImage src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileCardDescription>

      <UserStats>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{stats.views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
