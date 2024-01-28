import { useState } from "react";
import "./App.css";
import Questions from "./Questions";

function App() {   
  const [quesIdx , setQuesIdx] = useState(0) ; 
  const currQues = Questions[quesIdx] ; 
  const [score , setScore] = useState(0) ; 
  const [showScore , SetShowScore] = useState(false) ; 
  const selectOption = (i)=>{
    if(currQues.answer === i) { 
      setScore(score + 1 ) ; 
    }  

    const nextQues = quesIdx + 1 
    if(nextQues < Questions.length) {
      setQuesIdx(quesIdx + 1) 
    } 
    else{
      SetShowScore(true) ; 
    }
    
  } 

  const resetTest = () =>{
    setQuesIdx(0) ; 
    setScore(0) ; 
    SetShowScore(false) 
  }
  return (
    <div className="quiz-container"> 
     {
      showScore ? <div>
        <h1>Your score : {score}</h1>
        <button className="btn btn-success" onClick={()=>resetTest()}>Retake test</button>
      </div> : (
        <div className="quiz-container-question">
        <p>{currQues.question}</p> 
        <div className="quiz-container-options">
         <ul className="quiz-container-ul"> 
            {currQues.options.map((option , i)=> { 
              return <li className="quiz-container-li" onClick={()=>selectOption(i)}>{option}</li> 
            } 
            )}
         </ul>
        </div>
      </div>
      )
     }
     
    </div>
  );
}

export default App; 
