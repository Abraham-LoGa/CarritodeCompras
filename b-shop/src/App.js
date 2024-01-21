import { Component } from 'react'
import Productos from './Components/Productos'
import Layout from './Components/Layout'
import Title from './Components/Title'
import Navbar from './Components/Navbar'
class App extends Component{
  state = {
    productos:[
      {name: 'Jersey Diablos', Price: '1500', img : '/Productos/diablos.jpg'},
      {name: 'Jersey Guerreros', Price: '2345', img : '/Productos/guerreros.jpg'},
      {name: 'Jersey Nacional', Price: '3700', img : '/Productos/mexico.jpg'},
      {name: 'Jersey Tigres', Price: '954', img : '/Productos/Tigres.jpg'},
      {name: 'Jersey Tomateros', Price: '2050', img : '/Productos/tomateros.jpg'},
      {name: 'Jersey Venados', Price: '1303', img : '/Productos/Venados.jpg'}
    ],
    carro: [],
  }

  agregarAlCarrito = (producto) =>{
    const {carro} = this.state
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map( x => x.name === producto.name
        ?({
          ...x,
          cantidad: x.cantidad +1
        })
        :x)
        return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })})
  }
  render(){
    console.log(this.state.carro)
    return (
      <div>
        <Navbar/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarrito = {this.agregarAlCarrito}
            productos = {this.state.productos}        
          />
        </Layout>
      </div>
    )
  }
}

export default App;
