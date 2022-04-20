import React, { Component } from 'react';

import '../style/DeleteModal.css';
import Button from './Button';

class DeleteModal extends Component {
 
    render() {
        const {opens, closes, del, todoo} =  this.props;

        //  method hapus by id
  const hapusById = (id) => {
      // panggil propstypes del
      del(id)
  }
    if (opens) {
        return (
        <div className='modal-container'>
            <div className='modal-box'>
                <h3>Delete Modal</h3>

                <div className='btn-group'>
                <Button text='ok' variant='primary' action={() => hapusById(todoo)}/>  
                <Button text='close' variant='warning' action={closes} />  
                
            </div>

            </div>
            
            
        </div>
        )
    }else {
     return null
  }
 }
}


export default DeleteModal;
