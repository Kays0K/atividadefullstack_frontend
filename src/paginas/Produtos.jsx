import { useEffect } from 'react';

export default function Produtos() {
    useEffect(() => {
        const fetchData = async () => {
            
                const response = await fetch('http://localhost:3000/estoque');
                const data = await response.json();
                console.log("Produtos:", data);
            
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
        </div>
    );
}