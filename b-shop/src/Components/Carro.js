import { Component } from "react";
import BubbleAlert from './BubbleAlert'
const styles = {
    carro:{
        backgroundColor : ' #359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubbles:{
        position : 'relative',
        left : 12,
        top : 20 

    }
}
class Carro extends Component{
    render(){
        return(
            <div>
                <span style={styles.bubbles}>
                    <BubbleAlert value = {10}/>
                </span>
                <button style={styles.carro}>
                    Carrito
                </button>
            </div>
        )
    }
}

export default Carro