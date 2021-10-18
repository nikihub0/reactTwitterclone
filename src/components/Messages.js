import React from "react";
import {Link} from 'react-router-dom';

const Messages = ({ messages }) => {
  // console.log(messages);

  messages.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="all-msg-container">
      {messages &&
        messages.map((msg, index) => {
          return (
            <div className="msg-container" key={index}>
              <Link to={`/messages/${msg._id}`}>
                <h3>
                  {msg.userId && msg.userId.name}
                  {!msg.userId && "No username available."}
                </h3>
                <p>{msg.text}</p>
                <p>{Date(msg.date)}</p>
              </Link>
            </div>
          );
        })}
      {!messages && <h3>No messages could be found.</h3>}
    </div>
  );
};

export default Messages;