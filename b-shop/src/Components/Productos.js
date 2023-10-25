 import { Component } from "react";
 import Producto from './Producto'

 const styles = {
    productos:{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px'
    }
 }
 class Productos extends Component{
    render(){
        const  { productos, agregarAlCarrito} = this.props
        return(
            <div style={styles.productos}>
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