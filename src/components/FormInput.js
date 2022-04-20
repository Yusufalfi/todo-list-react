import React, { Component } from 'react'
import Button from './Button';
import "../style/FormInput.css"



export default class FormInput extends Component {

state = {
  text: ""
}  

// method Change . ambil nilai form input yg di ketik
change = e => {

 this.setState({
   text: e.target.value
 })

}

submit = e => {
  e.preventDefault()
  // jika state nya tidakkosong
  if(this.state.text !== "") {
    // maka panggil props add di app
    this.props.add(this.state.text)
  }
  // jika di submit set statenyamenjadi kosong
  this.setState({
    text:"",
  })
  
}



  render() {
    return (
      <form style={inputForm} onSubmit ={this.submit}>
        <input 
        type="text" onChange={this.change}
        style={input} 
        value={this.state.text}
        placeholder="Tambah Task" />
        <Button
         text="Tambah" 
         variant="primary"
         action={this.submit}/>
      </form>
    )
  }
}

const inputForm ={
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between" ,
    margin: "0.5rem 0"
}

const input ={
    width: "70%",
    height: "55%",
    border: " 1px solid #eaeaea",
}
 