import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RootComponent from './RootComponent'

function App() {
    return (
        <BrowserRouter>
            <RootComponent />
        </BrowserRouter>
    )
}

export default App
