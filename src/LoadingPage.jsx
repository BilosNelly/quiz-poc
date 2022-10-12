import loader from './assets/loader.gif'

export const LoadingPage = () => {

    return (
        <div className="on-quiz__loader">
            <img src={loader} alt="loading..." />
            <span className="on-quiz__loader__copy">We're running to get your results.</span>
        </div>
    );
}

export default LoadingPage;
