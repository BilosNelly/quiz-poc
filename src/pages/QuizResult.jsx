import {
    Cloud,
    CloudFlow,
    CloudFlyer,
    CloudSurfer,
    CloudVenture,
    CloudventurePeak,
    CloudventureWaterproof,
    CloudX
} from '../assets';

export const QuizResult = (props) => {

    const shoeModels = {
        'cloud': Cloud,
        'cloudflow': CloudFlow,
        'cloudflyer': CloudFlyer,
        'cloudsurfer': CloudSurfer,
        'cloudventure_peak': CloudventurePeak,
        'cloudventure_waterproof': CloudventureWaterproof,
        'cloudventure': CloudVenture,
        'cloudx': CloudX,
    };

    const shoeNames = props.sortedShoeNames;

    return (
        <div className="on-quiz__result__wrapper">
            <div className="on-quiz__result">
                <span className="on-quiz__result__title">Congratulations!</span>
                <span className="on-quiz__result__description">Based on your selection we've decided on the {shoeNames[1]} and {shoeNames[2]}! Enjoy the 30 day trial!</span>
            </div>
            {Object.values(shoeNames).map((shoe, index) => {
                return (
                    <li key={index}>
                        <div className="on-quiz__result__shoe__wrapper">
                            <div className="on-quiz__result__shoe__img">
                                <img src={shoeModels[shoe]} alt="Shoe model img" />
                            </div>
                            <div className="on-quiz__result__shoe">
                                <span className="on-quiz__result__title">{shoe}</span>
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
                    </li>
                );
            })}
            <a onClick={props.onRestartQuizClick}>Try again quiz!</a>
        </div>
    );
}

export default QuizResult;
