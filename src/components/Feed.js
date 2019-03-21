import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import placeholder from '../../assets/img/placeholder.png';
import { slideUp } from '../styles/animations';

const transformData = rawData =>
  rawData.data.children
    .map(child => {
      const { title, url, id, subreddit, stickied } = child.data;
      return { title, url, id, subreddit, stickied };
    })
    .filter(item => !item.stickied);

const Feed = ({ subreddit, hue }) => {
  const [feed, setFeed] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(({ data }) => {
      setFeed(transformData(data));
      setLoading(false);
    });
  }, [subreddit]);

  if (loading)
    return (
      <div
        css={`
          color: rgba(0, 0, 0, 0.4);
          text-align: center;
        `}
      >
        Loading...
      </div>
    );

  return (
    <div
      css={`
        animation: ${slideUp} 0.2s ease;
      `}
    >
      {feed.map(item => (
        <Card {...item} key={item.id} hue={hue} image={placeholder} />
      ))}
    </div>
  );
};

export default Feed;
