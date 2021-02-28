
const DifficultyButton = ( { onClick, difficulty, id} ) => {

    function clicked() {
       onClick(id, difficulty);
    }

    return (

        <div>
            <button className="difficulty-btn"
            onClick = {() => clicked()}
            id = {id}>
            {difficulty}
            </button>
        </div>
    )
}

export default DifficultyButton
