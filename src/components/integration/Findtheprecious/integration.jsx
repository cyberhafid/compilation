import React, { Component } from 'react';
import './Style.css';

export default class Html extends Component {

        render () {
          return (
            <div>
              <title>Find the precious .com mince ca marche</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
                   <div className="container">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  {/* Brand/logo */}
                  <a className="navbar-brand" href="#">Logo</a>
                  {/* Links */}
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Fellows</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">The Ring</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Get my reward</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Best hunters</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Join the Army</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact us</a>
                    </li>
                  </ul>
                </nav>
                <div className="panel panel-default">
                  <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                      <li data-target="#demo" data-slide-to={0} className="active" />
                      <li data-target="#demo" data-slide-to={1} />
                      <li data-target="#demo" data-slide-to={2} />
                    </ul>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://www.noblecollection.fr/images/categories/bandeau-categorie-seigneur-des-anneaux.jpg" alt="Los Angeles" width={900} height={300} />
                        <div className="carousel-caption">
                          <h3>DANGEROUS FELLOWSHIP</h3>
                          <p>Orcs, Goblins</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.noblecollection.fr/images/categories/categorie-bilbo-hobbit.jpg" alt="Chicago" width={900} height={300} />
                        <div className="carousel-caption">
                          <h3>Destroy the ring</h3>
                          <p>Protect your master SAURON</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.noblecollection.fr/images/categories/categorie-outlander.jpg" alt="New York" width={900} height={300} />
                        <div className="carousel-caption">
                          <h3>Fellows captured</h3>
                          <p>How to get my reward</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                      <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                      <span className="carousel-control-next-icon" />
                    </a>
                  </div>
                </div>








                <div className="panel panel-default" style={{border: '3px silver solid'}}>
                  <div className="card">
                    <div className="card-header">
                      <div className="panel-heading">
                        <h5 className="panel-title">Fellows wanted dead or alive if you want to eat them later</h5>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    {/* Nav pills */}
                    <ul className="nav nav-pills" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#menu1">Menu 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#menu2">Menu 2</a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div id="home" className="container tab-pane active"><br />
                        <div className="row">
                          <div className="col-sm-4 col-md-4">
                            <div className="card">
                              <div className="thumbnail">
                                <div className="image">
                                  <div className="vitre">
                                    <img style={{width: '100%'}} src="http://idata.over-blog.com/5/06/47/52/archives/2007/08/1186150725_pirates-des-caraibes-2-gf.jpg" alt />
                                    <span style={{fontSize: 'x-large'}}> Michel</span>
                                    <div className="texte" style={{fontSize: 'xx-large'}}> Michou</div>
                                    <div className="arrondi" style={{width: '100%'}}>
                                      <div style={{fontSize: '2vw'}}> <b>Perdu </b><b style={{color: '#FF0000'}}>1€<br /></b><b style={{color: '#000000'}}>Vu
                                          chez Dede</b></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="card-title">The Wizard</h4>
                                <p className="card-text">Small description........</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-md-4">
                            <div className="card">
                              <div className="thumbnail">
                                <div className="image">
                                  <div className="vitre">
                                    <img style={{width: '100%'}} src="http://idata.over-blog.com/5/06/47/52/archives/2007/08/1186150765_02.jpg" alt />
                                    <span style={{fontSize: 'x-large'}}> Edouard</span>
                                    <div className="texte" style={{fontSize: 'xx-large'}}> Prince doudou</div>
                                    <div className="arrondi" style={{width: '100%'}}>
                                      <div style={{fontSize: '3vw', color: '#FF0000'}}><b>DEAD</b></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="card-title">HOBBIT</h4>
                                <p className="card-text">Some example text some example text.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-md-4">
                            <div className="card">
                              <div className="thumbnail">
                                <div className="image">
                                  <div className="vitre">
                                    <img style={{width: '100%'}} src="http://idata.over-blog.com/5/06/47/52/archives/2007/08/1186150802_afficheleseigneurdesannax7.jpg" alt />
                                    <span style={{fontSize: 'x-large'}}> Patrick</span>
                                    <div className="texte" style={{fontSize: 'xx-large'}}> Dans le jardin</div>
                                    <div className="arrondi" style={{width: '100%'}}>
                                      <div style={{fontSize: '2vw'}}> <b>Manoeuvre </b><b style={{color: '#FF0000'}}>20 <br /></b><b style={{color: '#000000'}}>Bon
                                          ouvrier</b></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="card-title">Yummi lee</h4>
                                <p className="card-text">orcs croisé avec Goblins</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div id="menu1" className="container tab-pane fade"><br />
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo
                          consequat.</p>
                      </div>
                      <div id="menu2" className="container tab-pane fade"><br />
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                          laudantium,
                          totam rem aperiam.</p>
                      </div>
                    </div>
                  </div>
                </div>










                <div className="panel panel-default">
                  <div className="card">
                    <div className="card-header">
                      <h3>Amazon donne des indices sur sa série
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-lg-9">
                          <div>
                            <p>Même si cette nouvelle fiction se déroulant dans l'univers créé par J. R. R. Tolkien
                              n'arrivera pas avant 2021, Amazon poursuit son teasing.
                              Après une carte interactive dévoilée le mois dernier, le producteur de cette série a
                              divulgué quelques informations en rapport avec le scénario. Les fans devraient
                              apprécier.
                            </p>
                          </div>
                          <div className="text-right">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal1">
                              Le Second Âge
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg/250px-El_Se%C3%B1or_de_los_Anillos_lectura.jpg" alt="Bootstrap" className="img-thumbnail" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="media">
                            <div className="media-left">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Hobbiton.jpg/220px-Hobbiton.jpg" className="media-object" alt="Bootstrap" style={{width: '200px'}} />
                            </div>
                            <div className="media-body">
                              <h5 className="media-heading">PERSONNAGE</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur abore et dolore magna aliqua.</p>
                              <a href className="facebook"><i className="fa fa-facebook" /> <span className="share-meta">Facebook</span></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="media">
                            <div className="media-left">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cavalier-rohan.jpg/220px-Cavalier-rohan.jpg" className="media-object" alt="Bootstrap" style={{width: '200px'}} />
                            </div>
                            <div className="media-body">
                              <h5 className="media-heading">TOURISTES</h5>
                              <p> plein cœur du Panier à
                                Marseille, accompagne de nombreux
                              </p>
                              <a href className="facebook"><i className="fa fa-facebook" /> <span className="share-meta">Facebook</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="card w-100">
                    <div className="card-header">
                      <h3>JOIN MORDOR ARMY WE NEED YOU
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="container">
                        <h2>Dark Striped Table</h2>
                        <p>Combine .table-dark and .table-striped to create a dark, striped table:</p>
                        <table className="table table-dark table-striped">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="card">
                    <div className="card-header">
                      <h3>QUE SONT DEVENUS LES PERSONNAGES APRÈS
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-lg-9">
                          <div>
                            <p>Reprenons-le là où nous l'avons quitté : avec sa petite famille, enfin, pas si petite
                              que ça. Sam et Rosie ont en effet eu 13 enfants : Elanor, Frodon, Rose, Merry,
                              Pippin, Boucle-D'or, Hamfast, Daisy, Primrose, Bilbo, Ruby, Robin et Tolman. Avec
                              tout ça, on pourrait faire un remake de Bilbo Le Hobbit !
                            </p>
                          </div>
                          <div className="text-right">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal1">
                              More info on sauvore rule them
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Peter_Jackson01.jpg/220px-Peter_Jackson01.jpg" alt="Bootstrap" className="img-thumbnail rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="card">
                    <div className="card-header">
                      <h3>The Lord of the Rings (movie series)
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/fb/Le_Seigneur_des_Anneaux_logo.png/220px-Le_Seigneur_des_Anneaux_logo.png" alt="Bootstrap" className="img-thumbnail" />
                        </div>
                        <div className="col-lg-9">
                          <div>
                            <p>The Lord of the Rings is acinematic trilogy ofUS-New Zealand fantasy directed by
                              Peter Jackson and based on JRR Tolkien's novel of the same name in three volumes.
                              The films making up this trilogy are The Community of the Ring ( 2001 ), The Two
                              Towers ( 2002 ) and The Return of the King ( 2003 ).
                            </p>
                          </div>
                          <div className="text-right">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal1">
                              More info on sauvore rule them
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="card w-100">
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">Email address</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">Example select</label>
                          <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <footer>
                <div className="container-fluid bg-dark py-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="row py-0">
                          <div className="col-sm-1 hidden-md-down">
                            <a className="bg-circle bg-info" href="#">
                              <i className="fa fa-2x fa-fw fa-address-card" aria-hidden="true" />
                            </a>
                          </div>
                          <div className="col-sm-11 text-white">
                            <div>
                              <h4> Contact</h4>
                              <p> <span className="header-font">M</span>y<span className="header-font">w</span>website.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="d-inline-block">
                          <div className="bg-circle-outline d-inline-block" style={{backgroundColor: '#3b5998'}}>
                            <a href="https://www.facebook.com/"><i className="fa fa-2x fa-fw fa-facebook text-white" />
                            </a>
                          </div>
                          <div className="bg-circle-outline d-inline-block" style={{backgroundColor: '#4099FF'}}>
                            <a href="https://twitter.com/">
                              <i className="fa fa-2x fa-fw fa-twitter text-white" /></a>
                          </div>
                          <div className="bg-circle-outline d-inline-block" style={{backgroundColor: '#0077B5'}}>
                            <a href="https://www.linkedin.com/company/">
                              <i className="fa fa-2x fa-fw fa-linkedin text-white" /></a>
                          </div>
                          <div className="bg-circle-outline d-inline-block" style={{backgroundColor: '#d34836'}}>
                            <a href="https://www.google.com/">
                              <i className="fa fa-2x fa-fw fa-google text-white" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              <p className="text-center"> Copyright © Footer Mywebsite Plugin 2014. All right reserved. </p>
              {/* Include all compiled plugins (below), or include individual files as needed */}
            </div>
          );
        }
      };