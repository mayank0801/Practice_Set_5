import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetchQ1";

export default function Q1() {
  const [userStatus, setUserStatus] = useState([]);
  const getUserData = async () => {
    try {
      const {
        status,
        data: { users }
      } = await fakeFetch("https://example.com/api/users/status");
      setUserStatus(users);
      // console.log(status,users);
    } catch (e) {
      console.log(e, "err");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const listItem = userStatus.map(({ name, status }) => (
    <li
      key={name}
      style={{
        listStyle: "none",
        padding: "0.5rem",
        color: status === "Online" ? "green" : "red"
      }}
    >
      {name}-{status}
    </li>
  ));
  return (
    <>
      <h1>Online User</h1>
      <ul>{listItem}</ul>
    </>
  );
}

// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.
