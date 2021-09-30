import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <Fab
        onClick={(event) => {
          props.deleteNote(props.id);
        }}
      >
        <DeleteForeverIcon />
      </Fab>
      </Zoom>
    </div>
  );
}
//Export Note fxn output
export default Note;
