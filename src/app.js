'use strict'

// import React from 'react'
import React, { Component } from 'react'
// import Button from './button'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Square from './square'
// import Title from './title'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Insira um valor aqui',
      checked: false,
      slctValue: '2',
      showbtn: false,
    }
  }

  render () {
    return (
      <div>
        <form 
          onSubmit={(e) => { 
            e.preventDefault()
            console.log('event', e)
          }}
        
          onChange={(e) => {
            console.log('name', e.target.name);
            console.log('value', e.target.value);
        }}
        >
          <input type='text' value={this.state.value} onChange={(e) => {
            console.log(e.target.value)
            this.setState({
              value: e.target.value
            }) 
          }} />
          
          <br/><br/>

          <input type='radio' name='rd' value='1' defaultChecked /> Radio 1<br/>
          <input type='radio' name='rd' value='2' /> Radio 2
          <br/><br/>

          <select value={this.state.slctValue} 
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({
                slctValue: e.target.value
              })
            }}
            >
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>

          <br/><br/>
          <textarea defaultValue='Comentários aqui' />

          <br/><br/>
          <label>
            <input type='checkbox' 
              value='my-checkbox' 
              checked={this.state.checked}  
              onChange={(e) => {
                this.setState({
                  checked: !this.state.checked
                }, () => {
                  this.setState({
                    showbtn: this.state.checked
                  })
                  console.log(this.state.checked);
                }) 
              }}
            /> Aceito os termos
          </label>

          <br/><br/>

          <button type='submit' disabled={!this.state.showbtn}>Enviar</button>
          
        </form>
      </div>
    )
  }
}

/************  Códigos usados em aulas anteriores ***********/

/* Controlled component */

/*
class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Valor inicial'
    }
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            console.log(e.target.value)
            this.setState({
              value: e.target.value
            }) 
          }} />
        </form>
      </div>
    )
  }
}
*/

/*  setState

class App extends Component {
constructor() {
    super()
    this.state = {
      text: 'Philipe'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Tavares'
      })}>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

*/

/* Botões / children 

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>Botão</Button>
        <br/><br/>
        <LikeButton>Botão</LikeButton>
        <br/><br/>
        <SearchButton />
      </div>
    )
  }
}
*/

/*  onclick alterar cor do square por parametro

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
        alert('clicou')
      }}>
        <Square color='black' />
      </div>
    )
  }
}
*/

/* Enviando parâmetros via props para um component

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Philipe' lastname='Tavares' />
      </div>
    )
  }
})
*/
export default App
