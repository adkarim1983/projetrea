
import React from 'react';
import './App.css';
import ProductCard from './ProductCard';

const prenom = ""; // Essayer de saisir un prenom par exemple "karim"

function App() {
  // Condition : Si 'prenom' est défini (c'est á dire non vide), l'image est affichée, sinon 'image' est définie comme null.
  /* let image = null; // Initialisez 'image' à null
// om peut aussi ce code á la place du precedant, qui est comme suit:
if (prenom) { // Vérifiez si 'prenom' est défini (non vide)
  image = (
    <img src="/coeur-blue.webp" alt={`Image de ${prenom}`} />
  );
}
*/
  const image = prenom ? (
    <img src="/coeur-blue.webp" alt={`Image de ${prenom}`} />
  ) : null;

  return (
    <div className="App">
      <h1>Le Meilleur Smartphone de l'Année 2023.</h1>
      <ProductCard />
      <p>{prenom ? `Bonjour, ${prenom} !` : "Bonjour, là !"}</p>
      {image}
    </div>
  );
}

export default App;

