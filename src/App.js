import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import React from 'react';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';




class App extends React.Component {

  state = {
    todos: [
      {
        ids: 1,
        title: "tidur"
      },
      {
        ids: 2,
        title: "sarapan"
      }

    ],
    isDelete: false,
    isEdit: false,
    // state untuk merubah input yg di modal
    editData : {
      ids: "",
      title:""
    }
  }

  // method update data
  update =() => {
    // destructer state edit data 
    const {ids,title} = this.state.editData
    // buatdatabaru
    const newData = {ids, title}
      // destructer state todos
    const newTodos = this.state.todos
    
    newTodos.splice((ids-1), 1, newData)
    this.setState({
      todos:newTodos,
      isEdit: false,
      editData: {
        ids:"",
        title:""
      }

    })
  }

  // method set title modal
  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        // ambil titlenya saja yg di ubah
        title: e.target.value
      }
    })
  }

  // method open modal delete
  openModalDelete = () => {
    this.setState({
      isDelete: true,
    })
  }

  // method close modal delete
  closeModalDelete = () => {
    this.setState({
      isDelete: false,
    })
  }

  // method open modal edit
  openModal = (ids, data) => {
    this.setState({
      isEdit : true,
      // ids, data yg di parameter openmodal di gunakan untuk mengubah state di atas 
      editData: {
        ids,
        title: data
      }
    })
  }

    // method close modal
    closeModal = () => {
      this.setState({
        isEdit : false
      })
    }
  

// methode delete task
deleteTask = (id) => {
  console.log("ok ke delete");
  // set state todosnya
  this.setState({
    todos: this.state.todos.filter(item => item.ids !== id)
  })

}

// method tambah data
addTask = (data) => {
  console.log("OK DATA bertambah");
  // ambil isi state object todosnya brapa
  const idss = this.state.todos.length;

  const newData = {
    // lalu tambahkan 1
    ids: idss + 1,
    title: data
  }
  console.log(newData);
  // set state todosnya lalu ambil objek data yg di tambah 1
  this.setState({
    todos: [...this.state.todos, newData]
  })

}

render() {
  // distracter state di atas
  const {todos} = this.state
  

  return (
    <div className="app">
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h5>Task List</h5>

      </div>

      <div className='List'>
  
      {todos.map(item => 
        <TodoItem key={item.ids} //loping component todoitem
         todoo={item}
         opensDlt={this.openModalDelete}
         del={this.deleteTask}
         open={this.openModal} 
         opens={this.openModalDelete}
         />
        
        )} 
      </div>

      {todos.map(item => 
        <DeleteModal key={item.ids}
        opens={this.state.isDelete}
        closes={this.closeModalDelete}
        del= {this.deleteTask} /> 
        )}

     

      

      <div className='input-form'>
        <FormInput add = {this.addTask} />
      </div>

      <EditModal 
        edit={this.state.isEdit} 
        close={this.closeModal}
        change={this.setTitle}
        data = {this.state.editData}
        update={this.update}
        />
       

       
    
    </div>
  );
}

}

export default App;
