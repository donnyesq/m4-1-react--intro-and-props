import React from "react";

import "./ChatStream.css";
import ChatMessage from "./ChatMessage";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messages.map((message) => {
        return (
          <ChatMessage message={message} currentUser={props.currentUser} />
        );
      })}
    </section>
  );
}

export default ChatStream;
