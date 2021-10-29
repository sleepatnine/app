import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const FullUserInfo = () => {
  let { id } = useParams();
  console.log(id);

  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(
        `http://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, []);

  let us = JSON.stringify(data);
  console.log(us);

  return (
    <>
      <div>
        <b>Name:</b> {data.name}
        <br />
        <b>email:</b> {data.email}
        <br />
        <b>User Name:</b> {data.username}
        <br />
        <b>Phone:</b> {data.phone}
        <br />
        
        <Link to="/user">Back</Link>
      </div>
    </>
  );
};

export default FullUserInfo;
