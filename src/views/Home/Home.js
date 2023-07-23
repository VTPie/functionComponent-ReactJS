import logo from '../../logo.svg';
import './Home.scss'

const Home = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This is my ReactJS project.
            </p>
        </div>
    )
}
export default Home