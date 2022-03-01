import logo from './logo.png'
import github from './github.png'
import netflify from './netflify.png'
import Dictionary from './Dictionary'
import Result from './Result'
import { ThemeContext, themes } from './ThemeContext'
import { Button, InputGroup } from 'reactstrap'
import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <InputGroup>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                  color="link"
                  onClick={() => {
                    setDarkMode(!darkMode)
                    changeTheme(darkMode ? themes.light : themes.dark)
                  }}
                >
                  <span className="d-lg-none d-md-block">Switch mode</span>
                </Button>
              )}
            </ThemeContext.Consumer>
          </InputGroup>{' '}
          <a
            href="https://youtu.be/_heFIAa3hA0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="logo" alt="logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="wonderland" />
        <Result defaultKeyword="wonderland" />
        <footer>
          This 💋Cheshire Cat🙀 dictionary is built by Erika{' '}
          <a
            href="https://github.com/gh4ever/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="github" alt="github" />
          </a>{' '}
          <a
            href="https://jovial-aryabhata-079e94.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={netflify} className="netflify" alt="netflify" />
          </a>{' '}
          & Special thanks to{' '}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SheCodes
          </a>
        </footer>
      </div>
    </div>
  )
}
