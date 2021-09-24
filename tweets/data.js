const tweetData = [
  {
    tweet: "Hello Twitter",
    by: "igat786",
    likes: 123,
    comments: [],
  },
];

const addTweet = (tweet) => {
  tweetData.push(tweet);
};

export default { tweetData, addTweet };
