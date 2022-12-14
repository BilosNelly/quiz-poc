export const QuizQuestions = (props) => {

    const firstAnswer = props.shoeData.questions && props.shoeData.questions[props.currentQuestion].answers[0].copy;
    const secondAnswer = props.shoeData.questions && props.shoeData.questions[props.currentQuestion].answers[1].copy;
    const currentQuestionNumber = props.shoeData.questions && props.shoeData.questions[props.currentQuestion].id + 1;
    const questionsLength = Object.keys(props.shoeData.questions).length;

    return (
        <div className="on-quiz__question-screen">
            <div className="on-quiz__question-screen__header">
                <span>Try on quiz 30 days risk free</span>
            </div>
            <div className="on-quiz__question-screen__question">
                <div>{currentQuestionNumber}/{questionsLength}</div>
                <span>{props.shoeData.questions && props.shoeData.questions[props.currentQuestion].copy}</span>
            </div>
            <div className="on-quiz__question-screen__actions">
                <button onClick={() => props.onFirstBtnClick(props.currentQuestion)}>
                    {firstAnswer}
                </button>
                <button onClick={() => props.onSecondBtnClick(props.currentQuestion)}>
                    {secondAnswer}
                </button>
            </div>
        </div>
    );
}

export default QuizQuestions;
