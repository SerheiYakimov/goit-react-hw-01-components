import "./App.css";
import { Profile } from "./components/Profile/Profile";
import user from "./user.json";
import { Statistics } from "./components/Statistics/Statistics";
import { StatisticList } from "./components/StatisticList/StatisticList";
import statisticalData from "./statistical-data.json";

function App() {
  const title = "Upload stats";

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
    </div>
  );
}

export default App;
