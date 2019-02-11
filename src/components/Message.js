import React from "react";

function Message(props) {
  return (
    <div className="message">
      <div className="message-username">{this.props.username}</div>
      <div className="message-text">{this.props.text}</div>
    </div>
  );
}

export default Message;
