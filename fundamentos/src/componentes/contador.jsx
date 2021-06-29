import React, { Component } from 'react'

export default class contador extends React.Component {


    state = {    
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: parseInt(this.state.valor) + parseInt(this.state.passo)
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input type="number" value={this.state.passo} onChange={e => this.setState({ passo: +e.target.value })} />
                </div>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <p>
                        <button onClick={this.dec}>-</button>
                        <button onClick={this.inc}>+</button> 
                    </p>                   
                </div>
            </div>            
        )
    }

}