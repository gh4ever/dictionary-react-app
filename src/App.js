import logo from './logo.png'
import github from './github.png'
import netflify from './netflify.png'
import Dictionary from './Dictionary'
import Result from './Result'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <a
            href="https://youtu.be/_heFIAa3hA0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="logo" alt="logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="pink" />
        <Result defaultKeyword="pink" />
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
