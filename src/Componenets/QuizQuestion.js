import React from 'react';
import '../App.css';

export default function QuizQuestion({ question, options,handleClick,currectAnswer }) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index} onClick={()=>handleClick(option)} className={currectAnswer === option ? 'selected' : ''}>{option}</li>
                ))}
            </ul>
        </div>
    );
}
