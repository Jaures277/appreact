 import React from 'react';
 
 const ReseauxSociaux = () => {
    return (
        <div className="reseaux-sociaux-container">
            <ul>
                <li>
                    <a href="https://fr.linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://onerci.com" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-globe"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                         <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
 };
 
 export default ReseauxSociaux;