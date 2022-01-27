import React from "react";
import styled from "styled-components";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <Container>
      <Section>
        <Logo src={punkLogo} alt="Logo" />

        <SearchContainer>
          <SearchIcon>
            <img src={searchIcon} alt="Icon" />
          </SearchIcon>
          <InputField>
            <input type="text" placeholder="Collection item or user....." />
          </InputField>
        </SearchContainer>

        <MenuItems>
          <p>Drops</p>
          <p>MarketPlace</p>
          <p>Create</p>
        </MenuItems>

        <HeaderActions>
          <ThemeChange>
            <Theme src={themeSwitch} />
          </ThemeChange>
        </HeaderActions>

        <LoginButton>GET IN</LoginButton>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  height: 100px;
  /* border-bottom: 1px solid orange; */
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Logo = styled.img`
  width: 200px;
`;
const SearchContainer = styled.div`
  background-color: #1c1c1e;
  height: 50px;
  flex: 1;
  display: flex;
  border-radius: 30px;
  align-items: center;
`;

const SearchIcon = styled.div`
  margin: 10px;
`;

const InputField = styled.div`
  input {
    border: none;
    background-color: #1c1c1e;
    width: 100%;
    color: whitesmoke;
    font-size: 16px;
    overflow: hidden;
    &:focus {
      outline: none;
    }
  }
`;
const MenuItems = styled.div`
  display: flex;
  color: #a2a5a0;
  font-size: 18px;
  margin: 10px;
  p {
    font-family: var(--font-family);
    margin: 10px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin: 0 10px;
  }
`;

const ThemeChange = styled.div`
  display: flex;
  border-radius: 50px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  background-color: #1c1c1e;
  cursor: pointer;
`;

const Theme = styled.img`
  width: 30px;
  height: 30px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(96, 138, 143, 1) 1%,
    rgba(217, 92, 217, 1) 99%
  );
  border: none;
  width: 100px;
  height: 44px;
  color: white;
  font-size: 16px;
  font-family: var(--font-family);
  border-radius: 30px;

  &:hover {
    color: orange;
  }
`;

export default Header;
