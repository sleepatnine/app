import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const UserPage = () => {
  const { id } = useParams();
  const [, setStatus] = useState("idle");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");

      const response = await fetch(
        `http://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();

      setUser(data);
      setStatus("fetched");
    };

    fetchData();
  }, []);

  const [name, email, username, phone, street, geolat, geolong, companyname] = [
    user.name,
    user.email,
    user.username,
    user.phone,
    user.address?.street,
    user.address?.geo?.lat,
    user.address?.geo?.lng,
    user.company?.name
  ];

  return (
    <div>
      <b>Name: </b> {name}
      <br />
      <b>email: </b> {email}
      <br />
      <b>User Name: </b> {username}
      <br />
      <b>Phone: </b> {phone}
      <br />
      <b>Street: </b> {street}
      <br />
      <b>Geo: </b> {geolat} , {geolong}
      <br />
      <b>Name of company: </b> {companyname}
      <br/>
      <Link to="/users">Back</Link>
    </div>
  );
};

export default UserPage;
