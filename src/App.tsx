import React from "react";
import './App.css';
import Car from "./Car/Car";

type carType = {
  name: string,
  year: number,
}

type changeName = {
  name: any,
  index?: any,
}

class App extends React.Component {

  state = {
    cars: [
      {name: 'Ford', year: 2014},
      {name: 'Mazda', year: 2008},
      {name: 'Lada', year: 2022},
      {name: 'Lada', year: 2022},
      {name: 'Lada', year: 2022},
      {name: 'Lada', year: 2022},
      {name: 'Lada', year: 2022},
    ],
    pageTitle: 'React Components',
    showCars: false,
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  hanldelInput(event: any) {
    this.setState((dad) => {
      return(
        this.state.pageTitle = event.target.value
      )
    })
  }

  onChangeName(name: string, index: number) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
      cars: cars
    })
  }

  deleteHandler(index: number) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({cars})
  }
  
  render(): React.ReactNode {
    const divStyle: object = {
      textAlign: 'center',
    }

    
    

    let cars = null;

    if(this.state.showCars){
      cars = this.state.cars.map((car: carType, index: any) => {
        return(
          <Car 
            name={car.name} 
            age={car.year}
            key={index}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event:any) => this.onChangeName(event.target.value, index)}
          />)})
        
    }

    return(
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type='text' onChange={this.hanldelInput.bind(this)}/>

        <button 
          onClick={this.toggleCarsHandler}>
            Toggle cars
        </button>

        {cars}
      </div>
    )
  }
}




export default App
