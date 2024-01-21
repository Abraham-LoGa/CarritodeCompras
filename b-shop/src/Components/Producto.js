import { Component } from "react";
import Button from "./Button"
const style = {
    producto:{
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '85%',
        padding:'10px 15px',
        borderRadius: '5px',
        margin: 'auto'
    },
    img_content:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    }
}
class Producto extends Component{
    render(){
        const {producto, agregarAlCarrito} = this.props
        return(
            <div style={style.producto}>
                <div style={style.img_content}>
                    <img alt={producto.name} src={producto.img}/>
                </div>
                <h3>{producto.name}</h3>
                <p>{producto.Price}</p>
                <Button onClick = {() => agregarAlCarrito(producto)}>
                    Agregar al carro
                </Button>
                
            </div>
        )
    }
}

export default Producto