import { useEffect } from 'react';

export default function Compras() {
    useEffect(() => {
        const fetchData = async () => {
            
                const response = await fetch('http://localhost:3000/compras');
                const data = await response.json();
                console.log("Compras:", data);
            
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Página de Compras</h1>
        </div>
    );
}