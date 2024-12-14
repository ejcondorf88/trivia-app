export const Table = () => {
    const isUser = localStorage.getItem('isUser');
    return (
        <div className="table"> 
            <h1>Tabla de puntajes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Posicion</th>
                        <th>Nombre</th>
                        <th>Puntaje</th>
                    </tr>
                </thead>
                <tbody>
                    {isUser ? JSON.parse(localStorage.getItem('bestPlayer')).map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </div>
    )
}