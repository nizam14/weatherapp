import React, { Component } from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
// import WeatherDisplay from '../WeatherDisplay'


import axios from 'axios'
import {weatherIcon} from '../calls'
import { Link } from 'react-router-dom';



class WeatherMain extends Component{

    state={
        getWeatherValue: "",
        data: {},
        arryEmy:JSON.parse(localStorage.getItem('array'))===null?[]:JSON.parse(localStorage.getItem('array')),
        
    }




    cityChange = (e)=>{

        this.setState({
            getWeatherValue: e.target.value
        })
        console.log('getWeatherValue')
    }

    weatherShow = async() => {
        // localStorage.setItem("city",this.state.getWeatherValue)
        const ApiKey = {
            keys: "50f2779cb60c16555e1287b74cf14df7"
        }
    
        let res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.getWeatherValue}&appid=${ApiKey.keys}`)
    // console.log(res.data)
    // localStorage.setItem("city",JSON.stringify(res.data))
    // this.setState({data: res.data})



// let temp = this.state.data
// temp.push=(this.state.arryEmy)
localStorage.setItem('array',JSON.stringify(this.state.arryEmy.length===0?[res.data]:[...this.state.arryEmy, res.data]))
this.setState({arryEmy: this.state.arryEmy.length===0?[res.data]:[...this.state.arryEmy, res.data]})
console.log(this.state.arryEmy)

// console.log(this.state.arryEmy)


// this.setState({
//   List: [...this.state.List,this.state.value]
// })

// console.log(this.state.data)

    }

    weatherDelete = async(i) => {
        let temp = this.state.arryEmy.slice()
        temp.splice(i, 1)
        this.setState({arryEmy: temp})
        // console.log(temp)


    }

    moreDetail = (ele) => {
        // const dele = this.state.data;
        console.log(ele)
this.props.history.push({pathname:"/detail",state:{...ele}})
    }   




render(){
  
  return (
      <>
    <Container>
        <Row className="">
        <Col md={6} lg={6}>
      
   
        <h1 className="mt-5 mb-4" style={{color: "white"}}>Search weather on your city</h1>
  <InputGroup className="mb-3">
    <FormControl
      type="text" 
      placeholder="city..." 
      value={this.state.getWeatherValue} 
      onChange={this.cityChange}     
    />
    <InputGroup.Append>
      <Button variant="danger" type="submit" 
      onClick={this.weatherShow}>Search Weather</Button>
    </InputGroup.Append>
  </InputGroup>

        </Col>
</Row>
    </Container>
<Container>     
    <Row>
    {this.state.arryEmy.length===0? null :
        this.state.arryEmy.map((ele, i)=>{
            return(        
                <Col md="3" className="mb-3">
                    
                        <Card>
                            <Card.Header as="h5">{ele.name}<span className="text-right" onClick={()=>this.weatherDelete(i)}>X</span></Card.Header>
                            <Card.Body className="text-center p-2" >
                                <Card.Text>{ele.weather[0].description} {weatherIcon(ele.weather[0].description)}</Card.Text>
                                {/* <Card.Text>{weatherIcon(ele.weather[0].description)}</Card.Text> */}
                                {/* ele.weather[0].description */}
                                <Card.Text>Wind {`${(ele.wind.speed * 3.6).toFixed(2)} Km/h`}</Card.Text>
                                <Card.Text>
                                {`${(ele.main.temp - 273.15).toFixed(2)} C`}<sup>.</sup> {ele.sys.country}
                                </Card.Text>
                                {/* <div onClick={()=>this.moreDetail(ele)} style={{textDecoration:"underline",cursor:"pointer"}}>More Detail</div> */}
                            </Card.Body>
                        </Card>
                 
                </Col>                            
            )
        })
           }
    </Row>              
</Container>


{/* {this.state.arryEmy.map((ele)=>{
    return(
        <div>
            why not working
        </div>
    )
}) */}

      
      
    
   </> 
  );
}

}

export default WeatherMain;
