import { useEffect } from 'react';

export default function Compras() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/compras');
                const data = await response.json();

                console.log("Lista de Compras recebida:", data);
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Página de Compras</h1>
        </div>
    );
}