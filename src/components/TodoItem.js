import React from 'react';
import Button from './Button';
import PropTypes from "prop-types"


// destructer propsnya ambil dari proptypes
 const TodoItem = ({ todoo, del, open, opens}) => {

  // method hapus by id
  const hapusById = (id) => {
      // panggil propstypes del
      del(id)
  }

  return (
    <div style={todoItem}>
        <p> {todoo.title}</p>
        <div>
          <Button 
            text="edit"
             variant="success"
             action={() => open(todoo.ids, todoo.title)}
             />
          <Button text="hapus" variant="warning"
          // () => hapusById(todoo.ids)
          action={ () => hapusById(todoo.ids) }/>
        </div>
        
    </div>
  )
}

// propsType atau typenya berupa objek dan harus required

TodoItem.propsTypes = {
  todoo : PropTypes.object.isRequired,
  del: PropTypes.func.isRequired, //del ini dari props app
}




export default TodoItem;

// ccs menggunakan iline-style

const todoItem =  {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between" ,
    margin: "0.5rem 0"
}
