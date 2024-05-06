import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
const useChannelData = () => {
  const [cardsDetails, setCardsDetails] = useState([]);

  const fetchdata = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();
    setCardsDetails(data?.items);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return cardsDetails;
};
export default useChannelData;
