import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");

      const response = await fetch("http://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((userList) => (
        <div key={userList.id} className="user">
          <ul>
            <li className="user_cart" key={userList.id}>
              <img className="avatar" src="/NoAvatar.png" />
              <Link to={`/user/${userList.id}`}>{userList.name}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserList;
