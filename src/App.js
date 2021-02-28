import {useState} from "react"
import DifficultySelect from './components/DifficultySelect'
import Game from "./components/Game"
import Numbers from "./components/Numbers"

const App = () => {

    const [ID, setID] = useState(0)
    const [difficulty, setDifficulty] = useState()

    function startGame(ID, diff) {
        setDifficulty(diff);
        setID(ID);
    }

    return (
        <div>
            <div className="container">
                <div className="UI">
                    {ID === 0 ? 
                    (
                        <DifficultySelect onClick={startGame}/>
                    ) : ( 
                        <Game difficulty={difficulty} id={ID} reset={() => {setID(0)}}/> 
                    )}
                </div>
            <Numbers layer={"background"}/>
            <Numbers layer={"foreground"}/>
            </div>
        </div>
    )
}

export default App
