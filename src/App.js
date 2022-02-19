import logo from './logo.png'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          ERIKA
          <a
            href="https://www.youtube.com/watch?v=_heFIAa3hA0"
            target="_blank"
            rel="norefferer"
          >
            <img src={logo} className="App-logo img-fluid" alt="gh4ever logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="valentine" />
        <footer>
          This dictionary is built by{' '}
          <a
            href="https://github.com/gh4ever/dictionary-react-app"
            target="_blank"
            rel="norefferer"
          >
            Erika 🏉
          </a>{' '}
          and is published on{' '}
          <a
            href="https://jovial-aryabhata-079e94.netlify.app"
            target="_blank"
            rel="norefferer"
          >
            Netflify
          </a>
        </footer>
      </div>
    </div>
  )
}
