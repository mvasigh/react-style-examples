import React from 'react';
import styled from 'styled-components';
import { getHslString } from '../libs/util';

const StyledCard = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  border-radius: 12px;
  flex-direction: row;
  background-color: ${({ theme, hue }) =>
    getHslString(hue, 50, theme.shades.extraLight)};
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  margin-bottom: 2rem;

  :hover {
    box-shadow: 0px 19px 14px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  .thumbnail {
    flex-basis: 12rem;
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: ${({ theme, hue }) =>
      getHslString(hue, 50, theme.shades.dark)};

    img {
      background-color: ${({ theme, hue }) =>
        getHslString(hue, 50, theme.shades.dark)};
      object-fit: cover;
      width: 100%;
    }
  }

  .content {
    flex-grow: 1;
    height: 9.6rem;
    max-height: 9.6rem;
    padding: 1.2rem 0.8rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    .subreddit {
      flex-basis: 20%;
      margin: 0;
      letter-spacing: 4px;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme, hue }) => getHslString(hue, 50, theme.shades.medium)};
    }

    .title {
      font-weight: 400;
      margin: 0.4rem 0;
    }
  }
`;

const Card = props => (
  <StyledCard {...props}>
    <div className="thumbnail">
      <img src={props.image} alt={props.title} />
    </div>
    <div className="content">
      <p className="subreddit">{props.subreddit}</p>
      <h4 className="title">{props.title}</h4>
    </div>
  </StyledCard>
);

export default Card;
