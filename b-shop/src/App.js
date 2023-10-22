import { Component } from 'react'
import Productos from './Components/Productos'
class App extends Component{
  state = {
    productos:[
      {name: 'Jersey Diablos', Price: '1500', img : '/Productos/diablos.jpg'},
      {name: 'Jersey Guerreros', Price: '2345', img : '/Productos/guerreros.jpg'},
      {name: 'Jersey Nacional', Price: '3700', img : '/Productos/mexico.jpg'},
      {name: 'Jersey Tigres', Price: '954', img : '/Productos/Tigres.jpg'},
      {name: 'Jersey Tomateros', Price: '2050', img : '/Productos/tomateros.jpg'},
      {name: 'Jersey Venados', Price: '1303', img : '/Productos/Venados.jpg'}
    ]
  }
  render(){
    return (
      <div>
        <Productos
          agregarAlCarro = {() => console.log('No hace nada')}
          productos = {this.state.productos}        
        />
      </div>
    )
  }
}

export default App;
