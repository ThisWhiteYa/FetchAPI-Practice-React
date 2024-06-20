import React, { useState, useEffect } from "react";
import axios from "axios";
function FetchData() {
  const [data, setData] = useState([]);
  const fetch = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <ul>
        {/* {console.log(data[0].title)} */}
        {data.map(val =>(
            <li key={val.id}>{val.id}. {val.title}</li>
        ))}
      </ul>
    </>
  );
}

export default FetchData;
