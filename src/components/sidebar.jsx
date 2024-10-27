import React from 'react';

const Sidebar = ({ onCategoryChange }) => {
    return (
        <div className="card">
            <div className="card-header">Mes produits</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" onClick={() => onCategoryChange('')}>Articles</li>
                <li className="list-group-item" onClick={() => onCategoryChange('bracelets')}>Les Bracelets inoxydable</li>
                <li className="list-group-item" onClick={() => onCategoryChange('collier')}>Les Colliers dorés</li>
                <li className="list-group-item" onClick={() => onCategoryChange('bagues')}>Les Bagues</li>
            </ul>
        </div>
    );
};

export default Sidebar;
