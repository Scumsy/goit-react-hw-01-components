import { Profile } from './Profile/Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionsList } from './TransactionHistory/TransactionHistory';

// console.log(user);
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   // display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionsList transactions={transactions} />
    </div>
  );
};
