import React, { useEffect, useState } from 'react';

import './App.scss';
import { QuizResult } from './QuizResult';
import LoadingPage from './LoadingPage';

//Enum
const AnswerBtn = {
    First: 1,
    Second: 2
}

export const OnQuizApp = () => {

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
    const [isLoading, setIsLoading] = useState(false);
    //const [showResult, setShowResult] = useState(false);
    //const [showQuestions, setShowQuestions] = useState<boolean>(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentRating, setCurrentRating] = useState({
        cloud: 0,
        cloudflow: 0,
        cloudflyer: 0,
        cloudsurfer: 0,
        cloudventure: 0,
        cloudventure_peak: 0,
        cloudventure_waterproof: 0,
        cloudx: 0,
    });

    const firstAnswer = shoeData.questions && shoeData.questions[currentQuestion].answers[0].copy;
    const secondAnswer = shoeData.questions && shoeData.questions[currentQuestion].answers[1].copy;

    const firstAnswerRatingData = shoeData.questions && shoeData.questions[currentQuestion].answers[0].ratingIncrease;
    const secondAnswerRatingData = shoeData.questions && shoeData.questions[currentQuestion].answers[1].ratingIncrease;

    return (
        <>
            {isLoading ? <LoadingPage /> :
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
                            <div className="on-quiz__content">
                                <h1 className="on-quiz__content__title">Take the quiz and try your first pair!</h1>
                                <button className="on-quiz__content__btn" type="button" onClick={onTrialClick}>
                                    Try On Trial!
                                </button>
                                <span className="on-quiz__content__copy">30 Days risk free</span>
                            </div>
                        </div>
                    }
                </>}
        </>
    );

    function onTrialClick() {
        setShowQuestions(true);
    }

    function onFirstBtnClick(currentQuestion) {
        const isLastQuestion = shoeData.questions && shoeData.questions[currentQuestion].answers[0].nextQuestion === "";

        if (isLastQuestion) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000)
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

        updateRatingData(AnswerBtn.First);
    }

    function onSecondBtnClick(currentQuestion) {
        const isLastQuestion = shoeData.questions && shoeData.questions[currentQuestion].answers[0].nextQuestion === "";

        if (isLastQuestion) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000)
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

        updateRatingData(AnswerBtn.Second);
    }

    function updateRatingData(answer) {

        const ratingData = answer === 1 ? firstAnswerRatingData : secondAnswerRatingData;

        setCurrentRating({
            cloud: currentRating.cloud + ratingData.cloud,
            cloudflow: currentRating.cloudflow + ratingData.cloudflow,
            cloudflyer: currentRating.cloudflyer + ratingData.cloudflyer,
            cloudsurfer: currentRating.cloudsurfer + ratingData.cloudsurfer,
            cloudventure: currentRating.cloudventure + ratingData.cloudventure,
            cloudventure_peak: currentRating.cloudventure_peak + ratingData.cloudventure_peak,
            cloudventure_waterproof: currentRating.cloudventure_waterproof + ratingData.cloudventure_waterproof,
            cloudx: currentRating.cloudx + ratingData.cloudx,
        });
    }
}

export default OnQuizApp;
