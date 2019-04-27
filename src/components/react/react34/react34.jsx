import React, { Component } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import Content from './Content';
import Card from './Card';

const users = [

  { userName: 'jafod' },
  { userName: 'dfdfdf' },
  { userName: 'michel' },
  { userName: 'consta' },
  { userName: 'marie' },
  { userName: 'jpoulmrieafod' }

]




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
      open: false

    };
  }



  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false, users });
    }, 2000);
  }




  render() {


    if (this.state.loading) {
      return <Spinner color="secondary" />
    }

    if (this.state.open){
return(
<Content>
<p> je suis le texte </p>
</Content>
);
}





    return (

      <Container>
        <button
onClick ={() => this.setState({ open: true })}> clicl ici si ca pegfdsfs
        </button>
        <Row>
          {
            this.state.users.map((user, idx) => {

              return (
                <Col xs="6" key= {idx}>
                  <Card userName={user.userName} />
                </Col>

              );

            })
          }

        </Row>


      </Container>




    );
  }
}

export default App;