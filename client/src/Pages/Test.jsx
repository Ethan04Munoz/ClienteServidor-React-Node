import { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Llamada al backend
        axios.get('http://localhost:5000/api/message')
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error('Error al conectar con el servidor:', error);
            });
    }, []);

    return (
        <div>
            <h1>Hola!</h1>
            <p>{message}</p>
        </div>
    );
}

export default Test;
