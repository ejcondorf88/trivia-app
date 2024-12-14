import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
export const QuestionCard = ({ question, onAnswer }) => {
    const { category, question: questionText, correct_answer, incorrect_answers } = question;

    // Mezclar respuestas correctas e incorrectas
    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

    return (
        <Card className="question-card" title={category} subTitle="Responde la pregunta:">
            <p>{questionText.replace(/&quot;/g, '"')}</p>
            <div className="answers">
                {answers.map((answer, index) => (
                    <Button
                        key={index}
                        label={answer}
                        className="p-button-outlined p-button-secondary answer-button"
                        onClick={() => onAnswer(answer)}
                    />
                ))}
            </div>
        </Card>
    );
};
