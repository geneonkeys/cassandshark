import cassandsharkLogo from './assets/cassandshark.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>S&</h1>
        <a href="mailto:hello@cassandshark.com" target="_blank">
          <img src={cassandsharkLogo} className="logo react" alt="Cassandshark logo" />
        </a>
        <h1>SHARK.</h1>
      </div>
    </>
  )
}

export default App
