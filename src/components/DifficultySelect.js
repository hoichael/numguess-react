import DifficultyButton from "./DifficultyButton"

const DifficultySelect = ( { onClick }) => {
    return (
        <div className="difficulty-select-div">
            <h1 className="difficulty-select-text">T A K E</h1>
            <DifficultyButton onClick={onClick} difficulty={"E A S Y"} id={1} />
            <h1 className="difficulty-select-text">Y O U R</h1>
            <DifficultyButton onClick={onClick} difficulty={"M E D I U M"} id={2} />
            <h1 className="difficulty-select-text">P I C K</h1>
            <DifficultyButton onClick={onClick} difficulty={"H A R D"} id={3} />
        </div>
    )
}

export default DifficultySelect
