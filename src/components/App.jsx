import React, {useState} from "react";
import Header from "./Header";
import InputNote from "./InputNote";
import Footer from "./Footer";
import Note from "./Note";

//Call components
function App() {
  //Set states
  const [entry, setEntry] = useState(
    {
      id: "",
      title:"",
      content: ""
    }
  );
  const [allNotes, setAllNotes] = useState([]);

  //Updates title+content states when typed
  function updateEntry(event) {
    const {name, value} = event.target;
    setEntry ((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }
  //Adds new note
  function addNote(event) {
    setAllNotes((prevNotes) => {
      return [...prevNotes, entry];
    });
    setEntry(
      {
        id: "",
        title: "",
        content: ""
      });
    event.preventDefault();
  }
  //Deletes existing note
  function deleteNote(id) {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputNote
        updateEntry = {updateEntry}
        addNote = {addNote}
        title = {entry.title}
        content = {entry.content}
      />
      {allNotes.map((newNote, index) => (
          <Note
            key = {index}
            id = {index}
            title = {newNote.title}
            content = {newNote.content}
            deleteNote = {deleteNote}
          />
      ))}
      <Footer />
    </div>
  );
}

//export App()
export default App;
