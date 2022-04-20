
import React, { Component } from 'react'
import Button from './Button';
import '../style/EditModal.css';



class EditModal extends Component {

 
  render() {
    //   destrucprops
    const {edit, close, data, change, update } = this.props;

    // jika edit bernilai true makan tampilmodal
    if (edit) {
     
    
    return (
      <div className='modal-container'>
        <div className='modal-box'>
           <h3>Edit Task</h3> 
           <div className='input'>
                <input type="text" value={data.title} onChange={change} />
           </div>
           <div className='btn-group'>
              <Button text='ok' variant='primary' action={update}/>  
              <Button text='cancel' variant='warning' action={close}/>  
           </div>
        </div>
      </div>
    )
  } else {
      return null
  }

  }
}

export default EditModal;
