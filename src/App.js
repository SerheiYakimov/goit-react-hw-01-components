import "./App.css";
import { Profile } from "./components/Profile/Profile";
import user from "./user.json";
import { Statistics } from "./components/Statistics/Statistics";
import { StatisticList } from "./components/StatisticList/StatisticList";
import statisticalData from "./statistical-data.json";
import { FriendListItem } from "./components/FriendListItem/FriendListItem";
import friends from "./friends.json";

function App() {
  const title = "Upload stats";
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
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline ? "green" : "red"}
        />
      ))}
    </div>
  );
}

export default App;
