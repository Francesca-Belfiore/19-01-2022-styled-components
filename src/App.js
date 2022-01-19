import { useState } from "react";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import './App.css';

const Header = styled.header`
    text-align: left;
    width: 600px;
    margin: 42px auto;
    box-size: border-box;
    display: flex;

    h1 {
      display: inline-block;
      margin: 0;
      width: 550px;
      font-size: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
    }

    div {
      margin-top: 10px;
      background-color: black;
      width: 48px;
      height: 23px;
      padding: 1px;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      user-select: none;
`;

const Switch = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: ${(props) => props.isToggled ? '25px' : '0px'};
  background-color: #fafafa;
  border: 1px solid black;
  transition: all 0.35s ease;
        
    &:hover {
      cursor: pointer;
      background-color: #fafafa; 
    }
    &:focus {
      box-shadow: 0px 0px 2.5px 3px pink;
    }
  }
`;

const BlogIntro = styled.div`
  text-align: left;
  width: 600px;
  margin: auto;
  height: 56px;
  display: flex;
    
  p {
    width: 260px;
    margin: 5px 0;
    font-size: 18px;
    line-height: 1.4;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 14px;
  }

  a {
    color: ${({ theme }) => theme.link};
  }
`;

const Article = styled.article`
  text-align: left;
  width: 600px;
  margin: 42px auto;
  box-size: border-box;

  h1 {
    font-size: 1.75rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme.link};
    margin: 56px 0 7px;
  }

  small {
    font-size: 90%;
  }
`;

const Footer = styled.footer`
  width: 600px;
  margin: auto auto 42px;
  text-align: left;
  font-size: 18px;

  a {
    color: ${({ theme }) => theme.link};

    &:hover {
      text-decoration: none;
    }

  &:active {
    color: ${({ theme }) => theme.link};
    }
  }

  div {
    display: float;
    float: right;
  }
`;

function App() {

  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setIsToggled(!isToggled);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div style={{}} className="App">

          <Header>
            <h1>Overreacted</h1>
            <div onClick={themeToggler}>
              🌙 ☀️
              <Switch isToggled={isToggled}></Switch>
            </div>
          </Header>

          <BlogIntro>
            <img src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" alt="Dan Abramov" />
            <p>Personal blog by <a href='https://mobile.twitter.com/dan_abramov'>Dan Abramov</a>. I explain with words and code.</p>
          </BlogIntro>

          <Article>
            <h1>npm audit: Broken by Design</h1>
            <small>July 7, 2021 • ☕️☕️☕️ 14 min read</small>
            <p>Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</p>
          </Article>

          <Article>
            <h1>Before You memo()</h1>
            <small>February 23, 2021 • ☕️ 5 min read</small>
            <p>Rendering optimizations that come naturally.</p>
          </Article>

          <Article>
            <h1>The WET Codebase</h1>
            <small>July 13, 2020 • ☕️ 1 min read</small>
            <p>Come waste your time with me.</p>
          </Article>

          <Footer>
            <a href="">twitter</a> • <a href="">github</a> • <a href="">stack overflow</a>
            <div><a href="">rss</a></div>
          </Footer>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;