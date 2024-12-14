import './question.css';
import { useEffect, useState } from 'react';
import { Question as Preguntas } from '../../service/Question';
import { QuestionCard } from '../questioncard/QuestionCard';
import { Header } from '../header/Header';
import { Result } from '../result/Result';

export const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const preguntas = new Preguntas();

    // Función para obtener preguntas
    const fetchQuestions = async () => {
        try {
            const data = await preguntas.getQuestions();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    // Efecto para cargar las preguntas al montar el componente
    useEffect(() => {
        fetchQuestions();
    }, []);

    // Manejar respuesta seleccionada
    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correct_answer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true); // Muestra resultados al final
        }
    };

    if (questions.length === 0) {
        return <p>Cargando preguntas...</p>;
    }

    // Mostrar resultados si se terminó el cuestionario
    if (showResult) {
        return <Result score={score} totalQuestions={questions.length} />;
    }

    return (
        <div className="question">
            <Header  score={score}/>
            <h1>Pregunta {currentQuestionIndex + 1} de {questions.length}</h1>
            <QuestionCard
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
            />
        </div>
    );
};
