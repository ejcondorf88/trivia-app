import './result.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Result = ({ score, totalQuestions }) => {
    // Recuperar jugadores existentes del local storage
    const currentBestPlayers = JSON.parse(localStorage.getItem('bestPlayer')) || [];

    // Obtener el nombre del jugador actual desde el local storage
    const playerName = localStorage.getItem('name');

    // Crear el nuevo jugador
    const newPlayer = { name: playerName, score };

    // Verificar si el jugador ya está en la lista
    const updatedBestPlayers = currentBestPlayers.filter(player => player.name !== playerName);

    // Agregar o actualizar el puntaje del jugador
    updatedBestPlayers.push(newPlayer);

    // Guardar la lista actualizada en el local storage
    localStorage.setItem('bestPlayer', JSON.stringify(updatedBestPlayers));

    const title = "Resultados";
    const subtitle = "¡Gracias por participar!";
    const footer = (
        <div className="p-d-flex p-jc-center">
            <Button label="Volver a Inicio" icon="pi pi-home" className="p-button-primary" onClick={() => window.location.href = '/'} />
        </div>
    );

    return (
        <div className="result-container">
            <Card
                title={title}
                subTitle={subtitle}
                footer={footer}
                className="p-shadow-3 p-mb-3"
            >
                <p className="p-mb-2" style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                    Puntaje obtenido: <strong>{score}</strong> / {totalQuestions}
                </p>
                <p className="p-text-center" style={{ fontSize: '1rem' }}>
                    ¡Sigue practicando para mejorar tus conocimientos!
                </p>
            </Card>
        </div>
    );
};
