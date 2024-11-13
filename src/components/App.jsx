import Profile from './Profile/Profile';
import userData from '../data/userData.json';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';
import '../index.css';
import 'modern-normalize';
import './App.css';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Home Work</h1>
      <Profile
        title="Task 1"
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
