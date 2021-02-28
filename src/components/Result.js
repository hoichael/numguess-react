import {useState, useEffect} from "react"

const Result = ( { guess, rangeStart, rangeEnd, reset } ) => {

    const [finalNumberState, setFinalNumber] = useState();
    let finalNumber;

    const [fauxNumberState, setFauxNumber] = useState(0);
    let fauxNumber = 0;

    const [resultNumberClass, setResultNumberClass] = useState("result-number-temp")

    const [feedbackText, setFeedbackText] = useState("Failure.");

    let [interval, setInterval] = useState(30);

    let [iterator, setIterator] = useState(0);

    function countdown() {
        setIterator(iterator += 1);
       // console.log(fauxNumber);
        setInterval(interval *= 1.15);
        genNumber();
        if(iterator < 28) {
            setTimeout(countdown, interval);
        }
    }

    function genNumber() {

        let numberTemp;

        if(rangeEnd != 1) {
            numberTemp = Math.floor(Math.random() * rangeEnd) + rangeStart;
        } else {
            numberTemp = Math.round(Math.random());
        }

       // console.log(numberTemp)

        if(iterator < 28) {
            if(numberTemp === fauxNumber) {
                genNumber()
            } else {
                fauxNumber = numberTemp;
                setFauxNumber(fauxNumber);
            }

        } else {
            finalNumber = numberTemp;
            setFinalNumber(finalNumber);
            
          //  console.log(finalNumber);
          //  console.log(guess);
            finalize();
        }
    }


    function finalize() {
        if(finalNumber == guess) {
            setResultNumberClass("result-number-final-succ")
        } else {
            setResultNumberClass("result-number-final-fail")
        }

    }


   useEffect(() => {
    countdown();
  }, []);

    return (
        <div className="result-div">
            <h1 className="result-header">THE GENERATED NUMBER IS...</h1>
            <h2 className={resultNumberClass}>{finalNumberState ? finalNumberState : fauxNumberState}</h2>
            <h1 className="result-footer">{finalNumberState && (finalNumberState == guess ? "Success!" : "Failure.")}
            <br></br>
            {finalNumberState && <button className="reset-button" onClick={reset}>M E N U</button>}
            </h1>
        </div>
    )
}

export default Result
