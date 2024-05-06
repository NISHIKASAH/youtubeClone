import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.menu.changeMenuState);
  if (!showSideBar) return;
  return (
    <div>
      <div className="p-5 shadow-lg w-48">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/demo">Demo</a>
          </li>
          <li> Shorts</li>
          <li> Videos</li>
          <li> Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li> Music</li>
          <li> Sports</li>
          <li> Gaming</li>
          <li> Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li> Music</li>
          <li> Sports</li>
          <li> Gaming</li>
          <li> Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
