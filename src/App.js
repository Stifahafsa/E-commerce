// App.jsx
import React, { useState } from 'react'; // Import useState
import Nav from './components/nav';
import Cards from './components/cards';
import Sidebar from './components/sidebar';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(''); // État pour la catégorie sélectionnée

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Met à jour la catégorie sélectionnée
    };

    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar onCategoryChange={handleCategoryChange} /> {/* Passe la fonction à Sidebar */}
                    </div>
                    <div className="col-md-8">
                        <Cards selectedCategory={selectedCategory} /> {/* Passe l'état à Cards */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
