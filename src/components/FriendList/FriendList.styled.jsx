import styled from 'styled-components';

export const FriendListCards = styled.ul`
  display: block;
  margin-top: 50px;
`;

export const FriendCard = styled.li`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  margin-bottom: 25px;
  width: 500px;
  height: 150px;

  align-items: center;

  border-radius: 15px;
  background-color: lightgray;
`;

export const FriendStatus = styled.span`
  width: 25px;
  height: 25px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  margin-left: 50px;
  font-size: 72px;
  font-weight: bold;
`;
