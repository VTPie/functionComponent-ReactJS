import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const NotFound = () => {
    let history = useHistory()
    const returnHome = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h4>404 Not Found</h4>
            <button class="btn btn-primary" onClick={() => returnHome()}>Go to Home Page</button>
        </div>
    )
}
export default NotFound