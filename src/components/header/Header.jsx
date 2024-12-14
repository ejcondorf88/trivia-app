
import './header.css'
export const Header = ({score}) => {
    return (
        <div className="header">
                <h1>Trivia</h1>
                <br/>
                <h2>Score: {score}</h2>
        </div>
        

    )
}