import React, { useEffect, useState } from 'react';
import './App.scss';

export const App = () => {

    const getShoeData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                //console.log('response', response)
                return response.json();
            })
            .then(function (result) {
                console.log('myjson', result);
                setShoeData(result);
            });
    }

    useEffect(() => {
        getShoeData()
    }, [])

    const [shoeData, setShoeData] = useState({});
    //const [showQuestions, setShowQuestions] = useState<boolean>(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const firstAnswer = shoeData.questions && shoeData.questions[currentQuestion].answers[0].copy;
    const secondAnswer = shoeData.questions && shoeData.questions[currentQuestion].answers[1].copy;
    console.log('current answer///', shoeData.questions && shoeData.questions[currentQuestion].answers[0].copy)

    return (
        <>
            {showQuestions ?
                <div className="on-quiz__question-screen">
                    <div className="on-quiz__question-screen__header">
                        <span>Try on quiz 30 days risk free</span>
                    </div>
                    <div className="on-quiz__question-screen__question">
                        <span>{shoeData.questions && shoeData.questions[currentQuestion].copy}</span>
                    </div>
                    <div className="on-quiz__question-screen__actions">
                        <button onClick={() => onFirstBtnClick(currentQuestion)}>
                            {firstAnswer}
                        </button>
                        <button onClick={() => onSecondBtnClick(currentQuestion)}>
                            {secondAnswer}
                        </button>
                    </div>
                </div>
                :
                <div className="on-quiz">
                    MAIN PAGE
                    <div className="on-quiz__content">
                        <h1 className="on-quiz__content__title">Take the quiz and try your first pair!</h1>
                        <button className="on-quiz__content__btn" type="button" onClick={onTrialClick}>
                            Try On Trial!
                        </button>
                        <span className="on-quiz__content__copy">30 Days risk free</span>
                    </div>
                </div>
            }


            {/* // RESULT PAGE
        //       <div className="on-quiz__result__wrapper">
        //           <div className="on-quiz__result">
        //               <span className="on-quiz__result__title">Congratulations!</span>
        //               <span className="on-quiz__result__description">Based on your selection we've decided on the Cloudventure and Cloudflyer! Enjoy the 30 day trial!</span>
        //           </div>
        //           <div className="on-quiz__result__shoe__wrapper">
        //               <div className="on-quiz__result__shoe__img">here will be img</div>
        //               <div className="on-quiz__result__shoe">
        //                   <span className="on-quiz__result__title">Cloud X</span>
        //                   <span className="on-quiz__result__description">You perfect partner in the world's lighest fully-cushioned shoe for Running Remixed.</span>
        //               </div>
        //               <div className="on-quiz__result__shoe__info">
        //                   <span className="on-quiz__result__shoe__info__price">200CHF</span>
        //                   <span className="on-quiz__result__shoe__info__separator" />
        //                   <span>Neon and Grey</span>
        //               </div>
        //           </div>
        //           <div className="on-quiz__result__btn">
        //               <button>Shop now</button>
        //           </div>
        //       </div> */}
        </>
    );

    function onTrialClick() {
        setShowQuestions(true);
    }

    function onFirstBtnClick(currentQuestion) {
        setCurrentQuestion(currentQuestion + 1);
    }

    function onSecondBtnClick(currentQuestion) {
        setCurrentQuestion(currentQuestion + 1);
    }
}

export default App;
