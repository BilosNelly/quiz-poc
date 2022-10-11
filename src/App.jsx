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
    <div className="on-quiz">


      <div className="on-quiz__content">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       
            <h1 className="on-quiz__content__title">Take the quiz and try your first pair!</h1>
            <button className="on-quiz__content__btn" type="button">Try On Trial!</button>
            <span className="on-quiz__content__copy">30 Days risk free</span>
     

      </div>
    </div>
  );
}

export default App;
