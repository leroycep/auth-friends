import React, { useEffect } from "react";

function Friends(props) {
  console.log(props);
  useEffect(() => {
    props.fetchFriends();
  }, []);

  return (
    <div>
      <h2>Friends</h2>
      <div>
        {props.friends.map(friend => (
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
