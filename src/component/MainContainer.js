import React from "react";
import ButtonContainer from "./ButtonContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col mx-auto">
      <ButtonContainer />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
