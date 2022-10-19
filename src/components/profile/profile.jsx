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
} from './profile.styled';

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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
