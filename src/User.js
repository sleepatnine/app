import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch("http://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((User) => {
        return (
          <div className="user">
            <ul>
              <li className="user_cart" key={User.id}>
                <img className="avatar" src="/NoAvatar.png" />
                <Link to={`/user/${User.id}`}>{User.name}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default User;
