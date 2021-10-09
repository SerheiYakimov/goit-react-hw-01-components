import "./App.css";
import { Profile } from "./components/Profile/Profile";
import user from "./user.json";
import { Statistics } from "./components/Statistics/Statistics";
import { StatisticList } from "./components/StatisticList/StatisticList";
import statisticalData from "./statistical-data.json";
import { FriendListItem } from "./components/FriendListItem/FriendListItem";
import friends from "./friends.json";
import { FriendList } from './components/FriendList/FriendsList';
import transactions from './transactions.json';
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { TransactionItem } from './components/TransactionItem/TransactionItem';

function App() {
  const title = "Upload stats";
  const items = transactions;
  // const isOnline = true;

  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={title}>
        {statisticalData.map((statistic) => (
          <StatisticList
            key={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
        ))}
      </Statistics>
      <FriendList>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline ? "green" : "red"}
        />
      ))}
      </FriendList>
      <TransactionHistory>
        {items.map((item) => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TransactionHistory>
    </div>
  );
}

export default App;
