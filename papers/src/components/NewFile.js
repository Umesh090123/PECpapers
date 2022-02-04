import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../assets/stylesheets/NewFile.css'

function NewFile() {
  return (
      <div className='newFile'>
        <div className='newFile__container'>
          <AddIcon />
          <p>New</p>
        </div>
      </div>
  )
}

export default NewFile;
