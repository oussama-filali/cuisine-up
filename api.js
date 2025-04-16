import React, { useState } from 'react';
import { generateUI } from './utils/generateUI';

console.log(generateUI ? 'API importée avec succès' : 'Échec de l\'importation');

export default function GeneratedButton() {
    const [generatedCode, setGeneratedCode] = useState('');

    const handleGenerate = async () => {
        const code = await generateUI(
            'button', // Composant
            'Click Me', // Texte
            'large', // Taille
            'blue', // Couleur
            true, // Glassmorphism
            'react' // Framework
        );
        setGeneratedCode(code);
    };

    return (
        <div>
            <button onClick={handleGenerate}>Générer le bouton</button>
            <pre>{generatedCode}</pre>
        </div>
    );
}