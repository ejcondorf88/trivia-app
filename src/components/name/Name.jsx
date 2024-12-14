import './name.css'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';

import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Name = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
         // Actualiza el estado con el valor del input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        navigate('/question'); 
        };

    return (
        <div className="name">
            <h1>Ingrese su nombre: {name}</h1>
            <form onSubmit={handleSubmit}>
                <InputText 
                    id="nameUser" 
                    placeholder="Ingrese su nombre" 
                    value={name} 
                    onChange={handleNameChange} // Vincula el estado con el input
                />
                <Button id="save" label="Save" />
            </form>
        </div>
    );
};
