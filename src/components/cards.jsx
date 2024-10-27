import React from 'react';

// Sample products with image paths
const products = [
    { Id: 1, Nom: 'Collier Élégant', Prix: 139, Description: "Un magnifique collier en or doré, parfait pour les occasions spéciales.", Image: 'images/1.jpeg', Category: 'collier' },
    { Id: 2, Nom: 'Collier Chic', Prix: 139, Description: "Collier en argent sterling avec un pendentif en forme de cœur, idéal pour les cadeaux.", Image: 'images/2.jpeg', Category: 'collier' },
    { Id: 3, Nom: 'Collier Sombre', Prix: 199, Description: "Collier avec des perles noires et blanches, ajoutant une touche d'élégance à votre tenue.", Image: 'images/3.jpeg', Category: 'collier' },
    { Id: 4, Nom: 'Collier Luxe', Prix: 99, Description: "Un collier simple et raffiné, parfait pour un look quotidien.", Image: 'images/4.jpeg', Category: 'collier' },
    { Id: 5, Nom: 'Bracelet en Cuir', Prix: 149, Description: "Bracelet en cuir tressé, offrant une allure masculine et décontractée.", Image: 'images/5.jpeg', Category: 'bracelets' },
    { Id: 6, Nom: 'Bracelet perlé', Prix: 129, Description: "Bracelet orné de perles colorées, apportant une touche de couleur à votre poignet.", Image: 'images/6.jpeg', Category: 'bracelets' },
    { Id: 7, Nom: 'Bracelet Bangle', Prix: 149, Description: "Bracelet bangle élégant en or rose, parfait pour une superposition.", Image: 'images/7.jpeg', Category: 'bracelets' },
    { Id: 8, Nom: 'Bague Vintage', Prix: 129, Description: "Bague vintage avec une pierre précieuse centrale, un véritable bijou d'art.", Image: 'images/8.jpeg', Category: 'bagues' },
    { Id: 9, Nom: 'Bague Minimaliste', Prix: 149, Description: "Bague en argent simple et élégante, parfaite pour le quotidien.", Image: 'images/9.jpeg', Category: 'bagues' },
    { Id: 10, Nom: 'Bague en Or', Prix: 129, Description: "Bague en or classique avec un design intemporel, à porter en toute occasion.", Image: 'images/10.jpeg', Category: 'bagues' },
    { Id: 11, Nom: 'Bague en Argent', Prix: 129, Description: "Bague en argent 925 avec des détails en filigrane, pour un style unique.", Image: 'images/11.jpeg', Category: 'bagues' }
];

const Cards = ({ selectedCategory }) => {
    // Filter products based on the selected category
    const filteredProducts = selectedCategory
        ? products.filter(product => product.Category === selectedCategory)
        : products;

    return (
        <div className="card">
            <h3 className="card-header">Liste des articles</h3>
            <div className="card-body">
                <div className="row">
                    {filteredProducts.map(product => (
                        <div className="col-md-4 mb-4" key={product.Id}>
                            <div className="card">
                                <img
                                    src={product.Image}
                                    className="card-img-top"
                                    alt={product.Nom}
                                    onError={(e) => {
                                        e.target.src = 'path/to/thumbnail.jpg'; // Replace with your thumbnail path
                                        e.target.alt = 'Image non disponible';
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.Nom}</h5>
                                    <p className="card-text">{product.Description}</p>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-info">Prix: {product.Prix} Dh</button>
                                        <button className="btn btn-primary">Ajouter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
