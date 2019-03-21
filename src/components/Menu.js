import React, { useState } from 'react';
import styled from 'styled-components';
import { getHslString } from '../libs/util';

const StyledMenu = styled.div`
  position: sticky;
  top: 0;
  padding: 1.2rem 3.2rem 0 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;

  * {
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
  }

  input {
    background-color: ${({ theme, hue }) =>
      getHslString(hue, 50, theme.shades.mediumDark)};
    color: ${({ theme, hue }) => getHslString(hue, 50, theme.shades.light)};
  }

  button {
    padding: 0 1.2rem;
    background-color: ${({ theme, hue }) =>
      getHslString(hue, 50, theme.shades.dark)};
    color: ${({ theme, hue }) => getHslString(hue, 50, theme.shades.medium)};
  }
`;

const Input = styled.input`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 100%;
  border: none;
  outline: none;
  padding: 0.6rem 0.4rem;
`;

const Button = styled.button`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  outline: none;
`;

const Menu = ({ hue, setSubreddit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(value);
    setValue('')
  };

  return (
    <StyledMenu>
      <Form hue={hue} onSubmit={handleSubmit}>
        <Input value={value} onChange={e => setValue(e.target.value)} />
        <Button>Go</Button>
      </Form>
    </StyledMenu>
  );
};

export default Menu;
