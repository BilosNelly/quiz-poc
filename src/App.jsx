import React, { useEffect } from 'react';
import './App.scss';

export const App = () => {

  const getShoeData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }

  useEffect(()=>{
    getShoeData()
  },[])

  return (
//     <div className="on-quiz">
//  MAIN PAGE
//     <div className="on-quiz__content">
//         <h1 className="on-quiz__content__title">Take the quiz and try your first pair!</h1>
//         <button className="on-quiz__content__btn" type="button">Try On Trial!</button>
//         <span className="on-quiz__content__copy">30 Days risk free</span>
//     </div> 
//     </div>

// SECOND PAGE
//         <div className="on-quiz__question-screen">
//             <div className="on-quiz__question-screen__header">
//                 <span>Try on quiz 30 days risk free</span>
//             </div>
//             <div className="on-quiz__question-screen__question">
//                 <span>Are you male or female</span>
//             </div>
//             <div className="on-quiz__question-screen__actions">
//                 <button>Male</button>
//                 <button>Female</button>
//             </div>
//         </div>

      <div className="on-quiz__result__wrapper">
          <div className="on-quiz__result">
              <span className="on-quiz__result__title">Congratulations!</span>
              <span className="on-quiz__result__description">Based on your selection we've decided on the Cloudventure and Cloudflyer! Enjoy the 30 day trial!</span>
          </div>
          <div className="on-quiz__result__shoe__wrapper">
              <div className="on-quiz__result__shoe__img">here will be img</div>
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

export default App;
