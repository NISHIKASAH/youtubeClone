import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addChannelDetails } from "../utils/ChannelSlice";
import ChannelDetails from "./ChannelDetails";

const Cards = ({ info }) => {
  const dispatch = useDispatch();
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const obj = {
    channelTitle: channelTitle,
    title: title,
    publishedAt: publishedAt,
  };
  const getData = () => {
    dispatch(addChannelDetails(obj));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="px-4 py-2">
        <li className="font-bold py-2 ">{title}</li>
        <li className="font-mono">{channelTitle}</li>

        <span>{(statistics.viewCount / 100000).toFixed(2)}k views</span>
        <span>•</span>
        <span>{publishedAt.slice(0, 10)}</span>
      </ul>
    </div>
  );
};

export default Cards;
