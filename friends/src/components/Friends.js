import React from "react";

function Friends(props) {
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
