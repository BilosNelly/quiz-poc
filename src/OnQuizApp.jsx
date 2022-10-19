import React, { useEffect, useState } from 'react';

import './OnQuizApp.scss';
import { QuizHomepage, QuizQuestions, QuizResult, LoadingPage } from './pages';

const AnswerBtn = {
    First: 1,
    Second: 2
}

const Page = {
    HOMEPAGE: 'Homepage',
    LOADING_STATE: 'LoadingState',
    RESULTS: 'Results',
    QUESTIONS: 'Questions'
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
                setShoeData(result);
            });
    }

    useEffect(() => {
        getShoeData()
    }, [])

    const [shoeData, setShoeData] = useState({});
    const [showCurrentPage, setShowCurrentPage] = useState([Page.HOMEPAGE]);
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
    const firstAnswerRatingData = shoeData.questions && shoeData.questions[currentQuestion].answers[0].ratingIncrease;
    const secondAnswerRatingData = shoeData.questions && shoeData.questions[currentQuestion].answers[1].ratingIncrease;
    const sortedShoeNames = Object.entries(currentRating).sort((a, b) => b[1] - a[1]).map(el => el[0]);
    const pages = {
        [Page.HOMEPAGE]: () => <QuizHomepage onTrialClick={onTrialClick} />,
        [Page.QUESTIONS]: () => <QuizQuestions
            shoeData={shoeData}
            currentQuestion={currentQuestion}
            onFirstBtnClick={onFirstBtnClick}
            onSecondBtnClick={onSecondBtnClick}
        />,
        [Page.LOADING_STATE]: () => <LoadingPage />,
        [Page.RESULTS]: () => <QuizResult sortedShoeNames={sortedShoeNames} onRestartQuizClick={onRestartQuizClick}/>
    };

    return (
        <>
            {pages[showCurrentPage]()}
        </>
    );

    function onTrialClick() {
        setShowCurrentPage(Page.QUESTIONS);
    }

    function onFirstBtnClick(currentQuestion) {
        const isLastQuestion = shoeData.questions && shoeData.questions[currentQuestion].answers[0].nextQuestion === "";

        if (isLastQuestion) {
            setShowCurrentPage(Page.LOADING_STATE);
            setTimeout(() => {
                setShowCurrentPage(Page.RESULTS);
            }, 3000)
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

        updateRatingData(AnswerBtn.First);
    }

    function onSecondBtnClick(currentQuestion) {
        const isLastQuestion = shoeData.questions && shoeData.questions[currentQuestion].answers[0].nextQuestion === "";

        if (isLastQuestion) {
            setShowCurrentPage(Page.LOADING_STATE);
            setTimeout(() => {
                setShowCurrentPage(Page.RESULTS);
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

    function onRestartQuizClick() {
        setCurrentRating({});
        setCurrentQuestion(0);
        setShowCurrentPage(Page.QUESTIONS);
    }
}

export default OnQuizApp;
