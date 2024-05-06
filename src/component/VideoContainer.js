import Cards from "./Cards";
import { Link } from "react-router-dom";
import useChannelData from "../utils/useChannelData";

const VideoContainer = () => {
  const cardsDetails = useChannelData();

  if (!cardsDetails) return;

  return (
    <div className="flex flex-wrap">
      {cardsDetails.map((card, idx) => {
        return (
          <Link key={idx} to={"/watch?v=" + card.id}>
            <Cards info={card} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
