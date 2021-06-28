import React, { Component } from 'react'

export default class contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    render () {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Valor: {this.state.valor}</h4>
                <h4>Passo: {this.state.passo}</h4>

                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>            
        )
    }

}