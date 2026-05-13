import { useEffect } from 'react';

export default function Agendamentos() {
    useEffect(() => {
        const fetchData = async () => {
            
                const response = await fetch('http://localhost:3000/agenda-completa');
                const data = await response.json();
                console.log("Agendamentos:", data);
            
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Agendamentos</h1>
        </div>
    );
}