 import { Component } from "react";
 import Producto from './Producto'

 class Productos extends Component{
    render(){
        const  { productos, agregarAlCarrito} = this.props
        return(
            <div>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarrito ={agregarAlCarrito}
                        key = {producto.name}
                        producto = {producto}
                    />)}
            </div>
        )
    }
 }

 export default Productos