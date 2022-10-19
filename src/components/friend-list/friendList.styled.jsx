import styled from 'styled-components';

export const FriendListCards = styled.ul`
  display: block;
`;

export const FriendListItem = styled.li`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  margin-bottom: 20px;
  width: 500px;
  height: 150px;
  /* justify-content: center; */
  align-items: center;
  border-style: solid;
  border-radius: 15px;
  background-color: lightgray;
`;

export const FriendStatusOnline = styled.span`
  width: 25px;
  height: 25px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: green;
`;

export const FriendStatusOffline = styled.span`
  width: 25px;
  height: 25px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendName = styled.p`
  margin-left: 50px;
  font-size: 72px;
  font-weight: bold;
`;
