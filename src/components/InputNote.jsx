import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputNote(props) {

//Set clicked state for input/textarea/Zoom animation
const [isClicked, setIsClicked] = useState(false);
//set isClicked state when clicked
function expandNote() {
  setIsClicked(true);
}

  return (
  <div>
    <form class="input-note">
      {/*Display title input if textarea is clicked*/}
      {
        isClicked &&
        <input
          onChange={props.updateEntry}
          name="title"
          type="text"
          placeholder="Title..."
          value={props.title}
        />
      }
      {/*Display 1 row of text area, expand to 3 rows if clicked*/}
      <textarea
      onClick={(event) => {
        expandNote();
      }}
      onChange={props.updateEntry}
      name="content"
      type="text"
      placeholder="Take a note..."
      value={props.content}
      rows={ isClicked ? "3" : "1" }
      />
      {/*Display button animation when text area is clicked*/}
      {
        isClicked &&
        <Zoom in={ isClicked ? true : false }>
          <Fab onClick={props.addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      }
    </form>
  </div>
  );
}

export default InputNote;
