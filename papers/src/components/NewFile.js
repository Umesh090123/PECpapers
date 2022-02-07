import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import '../assets/stylesheets/NewFile.css'

export default function NewFile(){
  const [newfile, setNewFile] = useState(false);

  const toggleNewFile = () => {
    setNewFile(!newfile);
  };


  return (
    <>
      <button onClick={toggleNewFile} className="newFile">
        New
      </button>

      {newfile && (
        <div className="newFile">
          <AddIcon/>  
          
          <div className="newFile__container">
            <div onClick={toggleNewFile} className="overlay"></div>
            <p>
              New
            </p>
          </div>
        </div>
      )}
      
      
    </>  
  );
}


