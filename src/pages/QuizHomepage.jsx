import React from 'react';

export const QuizHomepage = (props) => {
    return (
        <div className="on-quiz">
            <div className="on-quiz__content">
                <h1 className="on-quiz__content__title">Take the quiz and try your first pair!</h1>
                <button className="on-quiz__content__btn" type="button" onClick={props.onTrialClick}>
                    Try On Trial!
                </button>
                <span className="on-quiz__content__copy">30 Days risk free</span>
            </div>
        </div>
    );
}

export default QuizHomepage;
