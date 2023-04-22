import Q1 from "./Pages/Q1";
import "./styles.css";
import Q2 from "./Pages/Q2";
import Q4 from "./Pages/Q4";
import Q5 from "./Pages/Q5";
import Q6 from "./Pages/Q6";
import Q7 from "./Pages/Q7";
import Q22 from "./Pages/Q22";

export default function App() {
  return (
    <div className="App">
      <h1>Practice Set 5</h1>
      <Q22 />
      <ul>
        <li className="listStyle">
          <Q1 />
        </li>
        <li className="listStyle">
          <Q2 />
        </li>
        <li className="listStyle">
          <Q4 heading="User Profile" height={"100px"} width={"200px"} />
        </li>
        <li className="listStyle">
          <Q5 />
        </li>
        <li className="listStyle">
          <Q6 />
        </li>
        <li className="listStyle">
          <Q7 />
        </li>
      </ul>
    </div>
  );
}
