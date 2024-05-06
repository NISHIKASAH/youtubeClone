import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../utils/menuSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { addSearchChache } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const cahcheData = useSelector((store) => store.cache);
  const [SearchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showsuggestion, setShowsuggestion] = useState(false);

  const handleMenuClick = () => {
    dispatch(togglemenu());
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
    const json = await data.json();
    setSuggestionList(json[1]);

    dispatch(
      addSearchChache({
        [SearchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timeid = setTimeout(() => {
      if (cahcheData[SearchQuery]) {
        setSuggestionList(cahcheData[SearchQuery]);
      } else getSearchData();
    }, 200);
    return () => {
      clearTimeout(timeid);
    };
  }, [SearchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={handleMenuClick}
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          {" "}
          <input
            value={SearchQuery}
            onChange={handleSearchChange}
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
            className="px-5 w-1/2  border border-gray-400 p-2 rounded-l-full ml-14"
            type="text"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showsuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestionList.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
