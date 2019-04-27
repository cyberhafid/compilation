import React, { Component } from 'react';
import './Style.css';





export default class Gandalf extends Component {

    render() {
        return (
            <div>
                {/* Afin de valider ton code HTML, clic sur la petite flèche en haut à droite de cette fenêtre. Pour rappel, tu peux jeter un oeil par ici pour en savoir un peu plus: https://blog.codepen.io/2017/10/11/analyze-css-now-using-stylelint/ */}
                <meta charSet="UTF-8" />
                <title> Structurer une page HTML</title>
                <link rel="stylesheet" href="fichier.css" />
                <div className="image">
                    <div className="vitre">
                        <img src="https://image.noelshack.com/fichiers/2019/09/6/1551550560-gandalf.png" alt />
                        <span>
                            <center>Gandalf</center>
                        </span>
                        <div className="texte">
                            <center><b>Gandalf</b></center>
                        </div>
                        <div className="arrondi">
                            <center><b>Reward </b><b style={{ color: '#FF0000' }} >1000</b></center>
                        <center><b>Border coins</b></center>
                    </div>
                </div>
            </div>
            </div>
      );
    }
};