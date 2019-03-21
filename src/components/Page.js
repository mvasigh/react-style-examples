import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Feed from './Feed';
import Menu from './Menu';
import { getHslString } from '../libs/util'

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  * {
    transition: 0.3s ease;
  }

  .menu {
    flex-basis: 40%;
  }

  .content {
    padding-top: 1.2rem;
    flex-basis: 60%;
  }
`;

const BaseStyles = createGlobalStyle`
  body {
    background-color: ${({ theme, hue }) =>
      getHslString(hue, 50, theme.shades.medium)};
    font-family: 'Nunito', sans-serif;
    margin: 0;
    transition: 0.3s ease;
    transition-property: background-color;
  }
`;

const Page = () => {
  const [hue, setHue] = useState(100);
  const [subreddit, setSubreddit] = useState('reactjs');

  useEffect(() => {
    setHue(Math.floor(Math.random() * 360));
  }, [subreddit]);

  return (
    <React.Fragment>
      <BaseStyles hue={hue} />
      <Layout>
        <div className="menu">
          <Menu hue={hue} setSubreddit={setSubreddit} />
        </div>
        <div className="content">
          <Feed hue={hue} subreddit={subreddit} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Page;
