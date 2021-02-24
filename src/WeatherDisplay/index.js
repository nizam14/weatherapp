import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


class WeatherDisplay extends Component{


state={
  data:{}
}
componentDidMount=()=>{
  this.setState({data:this.props.location.state})
  // console.log(this.props.location.state)
}


render(){
console.log(this.state.data.name)
  return (<div>

    {Object.keys(this.state.data).length===0 ? null:
    <Container>     
          <Row>
              <Col md="12 mt-4">  
                      
                  <Card>            
                      <Card.Header as="h5">{this.state.data.name}</Card.Header>
                      <Card.Body>
                          <Card.Title>{}</Card.Title>
                          <Card.Text>
                          
                          </Card.Text>
                          {/* <Button variant="primary" onClick={()=>this.moreDetail()}> More Detail </Button> */}
                      </Card.Body>
                      
                  </Card>      
               
              </Col>                           
          </Row>              
      </Container>
    }
  </div>
   
  );
}

}

export default WeatherDisplay;
