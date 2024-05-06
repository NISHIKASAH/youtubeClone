import React, { useEffect, useState } from "react";
import { RandomNamegenerate, generateRandomText } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/LiveChatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const LiveChatDetails = useSelector((store) => store.chat.messagedata);

  const getLiveChat = () => {
    const obj = {
      name: RandomNamegenerate(),
      message: generateRandomText(25),
    };
    dispatch(addMessage(obj));
  };
  useEffect(() => {
    const ti = setInterval(() => {
      getLiveChat();
    }, 1000);
    return () => {
      clearInterval(ti);
    };
  });
  return (
    <div className="flex flex-col">
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {LiveChatDetails.map((chat, idx) => (
            <ChatMessage key={idx} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <div>
        <form
          className="w-full p-2 ml-2 border border-black"
          onSubmit={(e) => {
            e.preventDefault();
            const obj = {
              name: "NishikaSah",
              message: LiveMessage,
            };
            dispatch(addMessage(obj));
            setLiveMessage("");
          }}
        >
          <input
            className="px-2 w-96"
            type="text"
            value={LiveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
