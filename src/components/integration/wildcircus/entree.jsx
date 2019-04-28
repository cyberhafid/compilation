import React, { Component } from 'react';
import './Type.css';

    export default class Entree extends Component {
    render () {
      return (
          <div className="main">
         
          {/* Afin de valider ton code HTML, clic sur la petite flèche en haut à droite de cette fenêtre. Pour rappel, tu peux jeter un oeil par ici pour en savoir un peu plus: https://blog.codepen.io/2017/10/11/analyze-css-now-using-stylelint/ */}
          <meta charSet="UTF-8" />
          <title>Wild Circus</title>
         
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />   
          <div className="main">
            <h1>Wild Circus</h1>
            <nav className="block">  
              <ul>
                {/* TODO: Les liens du menu doivent nous emmener vers les sections correspondantes dans la page */}
                <li><a href="#Perf">Performances</a></li>
                <li><a href="#Abou">About Us</a></li>
                <li><a href="#Pric">Prices</a></li>
                <li><a href="#Cont">Contact</a></li>
              </ul>
            </nav>
            <section>
              <div id="Perf">
                <h2><a>Performances</a></h2>
                {/* TODO: En utilisant du css place ces trois performances ("lough", "dream, "marvel at") sur la même ligne en enlevant le point généré par la balise "li". Attention, utilise bien le css pour aligner les éléments, tu ne dois pas enlever les balises "li"*/}
                {/* performance 1 */}
                <ul id="Perfo">
                  <li className="perfofils">
                    <h3>Laugh</h3>
                    <p className="perfofilspolice">As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p>
                  </li>
                  {/* performance 2 */}
                  <li className="perfofils">
                    <h3>Dream</h3>
                    <p className="perfofilspolice">Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</p>
                  </li>
                  {/* performance 3 */}
                  <li className="perfofils">
                    <h3>Marvel at</h3>
                    <p className="perfofilspolice">Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.</p>
                  </li>
                </ul>
              </div>
            </section>
            <hr />
            <section>
              <div id="Abou">
                <h2><a>About Us</a></h2>
                {/* TODO: Cette section n'a pas encore été réalisée, tu as carte blanche pour nous montrer ta créativité */}
                1
                <iframe style={{border: 'none'}} src="https://galactic.ink/sketchpad/" name="os_frame" width="90%" height="800px" allowFullScreen="allowfullscreen" />
              </div>
            </section>
            <section>
              <div id="Pric">
                <h2><a>Prices</a></h2>
                {/* TODO:  Réalise un tableau qui présente les différents prix. Exemple (aggrandis la fenêtre en largeur pour bien voir l'exemple ci-dessous) :
  
                                  | Adultes | Enfants de moins de 12 ans | Groupes (plus de 10 personnes) | Ecoles
          Semaines hors mercredi  |         |                         |                                |
          week-end et mercredi    |         |                         |                                |
        */}
                <table id="Tablepri">
                  <caption>ticket price (per person, €)</caption>
                  <tbody><tr>
                      <th />
                      <th>Adults</th>
                      <th>Children ( Under 12 years old)</th>
                      <th>Group ( &gt; 10 people)</th>
                      <th>Schools</th>
                    </tr>
                    <tr>
                      <th>Week (expect Wednesday)</th>
                      <td>5</td>
                      <td>4</td>
                      <td>3</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>Week-end and Wednesday</th>
                      <td>10</td>
                      <td>9</td>
                      <td>8</td>
                      <td>7</td>
                    </tr>
                  </tbody></table>
              </div>
            </section>
            <hr />
            <section>
              <div id="Cont">
                <h2><a>Contact Us</a></h2>
                {/* TODO: Réalise un formulaire de contact avec les champs email et message plus un bouton pour envoyer le message. Pense bien à ajouter les labels pour les différents champs
          Ce formulaire n'a pas besoin d'être fonctionnel, réalise juste la mise en forme.
        */}
                <div className="block">
                  <fieldset>
                    <legend>send a message to Customer Service</legend>
                   
                      <div>
                        <label htmlFor="name">First name :</label>
                        <input type="text" id="name" name="user_name" />
                      </div>
                      <div>
                        <label htmlFor="mail">E-mail :</label>
                        <input type="email" id="mail" name="user_mail" />
                      </div>
                      <div>
                        <label htmlFor="msg">My question or comment :</label>
                        <textarea id="msg" rows={5} cols name="user_message" defaultValue={""} />
                      </div>
                      <div> <input type="submit" defaultValue="Send Message" /> </div>
                  
                  </fieldset>
                </div>
              </div>
            </section>
            <footer className="block">
              {/* TODO: Entre ton nom et prénom.
          Mets en place un lien vers le site de la Wild Code School (https://wildcodeschool.fr).
          Tu peux egalement mettre un lien sur ton nom vers ton site, ton blog ou ton profil github ou linkedin, si tu en a un.
         */}
              <p>Wild Circus by Hafid - France-IOI: <a href="http://www.france-ioi.org/user/perso.php?sLogin=cyberhafid" target="_blank"> Cyberhafid </a> - SoloLearn: <a href="https://www.sololearn.com/Profile/12418750" target="_blank"> Cyberhafid </a> - CodeAcademy : <a href="https://www.codecademy.com/fr/hafidBA7724342617" target="_blank"> Cyberhafid </a> - <a href="https://wildcodeschool.fr" target="_blank"> Wild Code School </a> - 16/01/2019 </p>
            </footer>
          </div>
        </div>
      );
    }
  };