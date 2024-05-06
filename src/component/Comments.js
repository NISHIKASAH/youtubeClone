import React from "react";

const commentsData = [
  {
    name: "@ritiktrivedi8780",
    text: "Amazing bro you literally amazed is and great inspiration and motivation",
    replies: [],
  },
  {
    name: "@akhildhiman7869",
    text: "Great video , it really motivates me to learn new things . Thank you sir for this amazing video and yes  make video on resume also . It will really help ",
    replies: [
      {
        name: "@akhildhiman7869",
        text: "your story is most motivated for those who plan to stop the way in the mid",
        replies: [],
      },
      {
        name: "@unboundedmind06",
        text: "I also purchased colt stelle course and currently in Async portion of javascript,Colt stelle added react course in web development bootcamp course ",
        replies: [
          {
            name: "@AkshaySainidff",
            text: "Such an inspiring story sir and yes sir video related to resume and what projects we can add onto it . Sir aapke videos really addictive hai to watch everyday .",
            replies: [
              {
                name: "@arun478",
                text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
                replies: [
                  {
                    name: "@tnay78i",
                    text: "It's always a honor to have you here as a mentor, I appreciate you for the time being spent to educate us financially. Regardless of how bad it gets on the economy, I still make over $28K every single week. I truly value Sherryl Kumar and her helpful guides.",
                    replies: [
                      {
                        name: "@arun478",
                        text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "@ritiktrivedi8780",
    text: "Amazing bro you literally amazed is and great inspiration and motivation",
    replies: [
      {
        name: "@arun478",
        text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
        replies: [
          {
            name: "@tnay78i",
            text: "It's always a honor to have you here as a mentor, I appreciate you for the time being spent to educate us financially. Regardless of how bad it gets on the economy, I still make over $28K every single week. I truly value Sherryl Kumar and her helpful guides.",
            replies: [
              {
                name: "@arun478",
                text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "@priyank34",
    text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
    replies: [
      {
        name: "@arun478",
        text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
        replies: [
          {
            name: "@tnay78i",
            text: "It's always a honor to have you here as a mentor, I appreciate you for the time being spent to educate us financially. Regardless of how bad it gets on the economy, I still make over $28K every single week. I truly value Sherryl Kumar and her helpful guides.",
            replies: [
              {
                name: "@arun478",
                text: "dsa would be required since Indian IT economy is based on USA tech economy and since in usa dsa is asked in major tech companies it will be asked in india as well.Exceptions are small startups and mnc where it will not be asked",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentDetails = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, idx) => (
        <div key={idx}>
          <CommentDetails data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            {/* //note : we are iterator over listof object inside object */}
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Comments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default Comments;
