import {useState, useEffect} from "react"
import Result from "./Result"

const Game = ( { id, difficulty, reset} ) => {

    const [gotInput, setInputBool] = useState(false);
    const [rangeStart, setRangeStart] = useState();
    const [rangeEnd, setRangeEnd] = useState();
    const [guessInput, setInput] = useState();
    const [buttonChar, setButtonChar] = useState("<");

    function setInformation() {

        switch(id) {
            case 1:
                setRangeStart(0);
                setRangeEnd(1);
                break;
            case 2:
                setRangeStart(1);
                setRangeEnd(5);
                break;
            case 3:
                setRangeStart(1);
                setRangeEnd(10);
                break;
            default: {
                console.log("default yo");
            }    
        }

    }

    useEffect(setInformation);

    function SetGuess(e) {
        e.preventDefault();
        console.log(e.target.value);
        setInput(e.target.value);
    }

    function submitGuess(e) {
        e.preventDefault();
        if(guessInput >= rangeStart && guessInput <= rangeEnd) {
            setInputBool(true);
        } else {
            alert("no");
        }
    }

    return (
        <div className="game-div">
            {gotInput ? (
                <Result guess={guessInput} rangeStart={rangeStart} rangeEnd={rangeEnd} reset={reset}/>
            ) : (
                <>
                <h1 className="game-header"> {difficulty} </h1>
                <h2 className="range-header">{`(${rangeStart} - ${rangeEnd})`}</h2>
                <form>  
                    <input type="number" className="guess-input" 
                    onChange={(e) => SetGuess(e)}>
                    </input>
                    <button 
                        className="guess-submit"
                        type="submit"
                        onMouseEnter={() => setButtonChar(">")}
                        onMouseLeave={() => setButtonChar("<")}
                        onClick={(e) => submitGuess(e)}>
                        {buttonChar}
                    </button>
                </form>
                </>
            )}
            
        </div>
    )
}

export default Game
