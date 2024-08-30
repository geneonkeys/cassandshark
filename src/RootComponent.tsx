import { Routes, Route, NavLink } from 'react-router-dom'
import { ROUTES } from './lib/constants/routes-contants'
import HomePage from './pages/HomePage'
import cassandsharkLogo from './assets/cassandshark.svg'
import './RootComponent.css'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

const RootComponent = () => {
    return (
        <div>
            <div className="row">
                <NavLink to={ROUTES.HOME}>Home</NavLink>
                <NavLink to={ROUTES.ABOUT}>About</NavLink>
                <NavLink to={ROUTES.RESUME}>Resume</NavLink>
                <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
            </div>
            <h1>S&</h1>
            <a href="mailto:hello@cassandshark.com" target="_blank">
                <img src={cassandsharkLogo} className="logo react" alt="Cassandshark logo" />
            </a>
            <h1>SHARK.</h1>
            <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.RESUME} element={<ResumePage />} />
                <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default RootComponent
