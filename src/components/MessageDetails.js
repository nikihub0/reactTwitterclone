import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";

const MessageDetails = ({ messages }) => {
//   console.log(messages);
   

  const { messageId } = useParams();

  const foundMessage =
      messages &&
      messages.find((msg) => msg._id === messageId);

  if(!foundMessage){
    return <h2>No Message found.</h2>
  }

  return (
    <div className="all-msg-container">
      <div className="msg-container">
        <h3><Link to={`/users/${foundMessage.userId._id}/messages`} >{foundMessage.userId.name}</Link></h3>
        <p>{foundMessage.text}</p>
        <p>{Date(foundMessage.date)}</p>
        <div className="msg-details-extra">
          <p>Message ID: {foundMessage._id}</p>
          <p>User ID: {foundMessage.userId._id}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;