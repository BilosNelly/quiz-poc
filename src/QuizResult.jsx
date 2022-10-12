export const QuizResult = () => {
    return (
        <div className="on-quiz__result__wrapper">
            <div className="on-quiz__result">
                <span className="on-quiz__result__title">Congratulations!</span>
                <span className="on-quiz__result__description">Based on your selection we've decided on the Cloudventure and Cloudflyer! Enjoy the 30 day trial!</span>
            </div>
            <div className="on-quiz__result__shoe__wrapper">
                <div className="on-quiz__result__shoe__img">
                    here will be img
                </div>
                <div className="on-quiz__result__shoe">
                    <span className="on-quiz__result__title">Cloud X</span>
                    <span className="on-quiz__result__description">You perfect partner in the world's lighest fully-cushioned shoe for Running Remixed.</span>
                </div>
                <div className="on-quiz__result__shoe__info">
                    <span className="on-quiz__result__shoe__info__price">200CHF</span>
                    <span className="on-quiz__result__shoe__info__separator" />
                    <span>Neon and Grey</span>
                </div>
            </div>
            <div className="on-quiz__result__btn">
                <button>Shop now</button>
            </div>
        </div>
    );
}

export default QuizResult;
