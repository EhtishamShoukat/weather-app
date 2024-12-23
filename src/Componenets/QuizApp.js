import React, { useState } from "react";
import "../App.css";
import QuizQuestion from "./QuizQuestion";

export default function QuizApp() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "CSS framework",
        "JavaScript library",
        "Database",
        "Python package",
      ],
      answer: "JavaScript library",
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: "CSS",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "High Text Machine Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which JavaScript framework is maintained by Facebook?",
      options: ["Angular", "Vue", "React", "Ember"],
      answer: "React",
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>",
    },
    {
      question:
        "Which method is used to create a new array by combining elements?",
      options: ["push", "concat", "merge", "split"],
      answer: "concat",
    },
    {
      question: "What is the default display value of a <div> element?",
      options: ["block", "inline", "none", "flex"],
      answer: "block",
    },
    {
      question:
        "Which attribute is used in HTML to specify the URL of an image?",
      options: ["href", "src", "alt", "link"],
      answer: "src",
    },
    {
      question:
        "Which of the following is used to add JavaScript code to an HTML document?",
      options: ["<script>", "<javascript>", "<js>", "<code>"],
      answer: "<script>",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "bgcolor", "background-color", "background"],
      answer: "background-color",
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currectAnswer, setCurrectAnswer] = useState(null);
  const [result,setResult]=useState(0);
  const handleClick = (option) => {
    setCurrectAnswer(option);
    if(option === questions[questionIndex].answer){
        setResult(result+1)
    }
  };
  const handleSelectQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setCurrectAnswer(null);
  };
  return (
    <div className="container" style={{width:"50%",backgroundColor:"lightblue",marginTop:"50px"}}>
      {questionIndex < questions.length ? (
        <div>
          <QuizQuestion
            question={questions[questionIndex].question}
            options={questions[questionIndex].options}
            handleClick={handleClick}
            currectAnswer={currectAnswer}
          />
          <button
            disabled={currectAnswer === null}
            onClick={handleSelectQuestion}
            className={currectAnswer === null ? "button-disable" : "button"}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div style={{fontSize:"50px",margin:"20px", color:result<=5 ? "red":"Green"}}>
             Your Marks  is {result} <br style={{marginTop:"20px"}}></br>
             Remarks {result <=5 ? "Fail":"Pass" }
                
        </div>
      )}
    </div>
  );
}
