import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
`;

export const ProfileCardDescription = styled.div`
  width: 750px;
  height: auto;
  /* display: flex; */
  background-color: #8080804d;
  border-radius: 25px;
  padding: 25px;

  margin-left: auto;
  margin-right: auto;
`;

export const ProfileImage = styled.img`
  display: block;
  width: 250px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileName = styled.p`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
`;

export const ProfileTag = styled.p`
  color: grey;
  text-align: center;
`;

export const ProfileLocation = styled.p`
  color: grey;
  text-align: center;
`;

export const UserStats = styled.ul`
  width: 750px;
  height: auto;
  display: flex;
  /* justify-content: space-around; */
  background-color: #8080804d;
  border-radius: 25px;
  padding: 25px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserStatsLabel = styled.span`
  color: grey;
  text-align: center;
`;

export const UserStatsItem = styled.li`
  width: 250px;
  margin-right: 10px;
  /* border-style: solid; */
  border-radius: 25px;
  text-align: center;
  background-color: whitesmoke;
`;

export const UserStatsQuantity = styled.span`
  display: block;
  text-align: center;
`;
