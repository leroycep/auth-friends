import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log("Failed to get friends from API", err));
  }, []);

  return (
    <div>
      <h2>Friends</h2>
      <div>
        {friends.map(friend => (
          <div key={friend.id}>
            <code>{JSON.stringify(friend)}</code>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
