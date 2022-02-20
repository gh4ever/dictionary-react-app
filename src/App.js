import logo from './logo.png'
import Dictionary from './Dictionary'
import Result from './Result'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <a
            href="https://www.youtube.com/watch?v=_heFIAa3hA0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo img-fluid" alt="gh4ever logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="cat" />
        <Result />
        <footer>
          This dictionary is built by{' '}
          <a
            href="https://github.com/gh4ever/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Erika 🏉
          </a>{' '}
          and is published on{' '}
          <a
            href="https://jovial-aryabhata-079e94.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netflify
          </a>
        </footer>
      </div>
    </div>
  )
}
