import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import WeatherMain from './WeatherMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDisplay from './WeatherDisplay'



class App extends Component{
render(){

  return (
    <Switch>
    
 <Route exact path="/" component={WeatherMain}></Route>
 <Route  path="/detail" component={WeatherDisplay}></Route>
    </Switch>
    
  );
}

}

export default App;
